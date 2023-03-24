
import './App.css';
import { useEffect, useState, useRef } from 'react';
const fadeOut ='fadeOut 1s'
// https://api.quotable.io/random?tags=technology,famous-quotes
function App() {
  // const [mainColor, setMainColor] = useState("")
  const [data, setData] = useState({})
  // const [isLoading, setIsLoading] = useState(false)
  const [clicked, setClicked] = useState(0)
  const [firstLoad, setFirstLoad] = useState(true)
  const nextData = useRef({})
  const currentData = useRef({})
  const backgrounDiv = useRef()
  const mainColor = useRef(`#${Math.ceil(Math.random()*999999).toString()}`)
  const toFadeOut = useRef([])
  console.log(`#${Math.random().toString().slice(2,8) }`)
  // console.log("current "+currentData)
  // if(firstLoad) backgrounDiv.current.style.setProperty('--main-color', `#${Math.ceil(Math.random()*999999).toString()}`)
   function handleNewQuote(){
    currentData.current = nextData.current
    toFadeOut.current.forEach((ele)=>{ele.style.animation = fadeOut})
    
    // htmlRoot.style.animation = "fadeOut 1s"
    
    setTimeout(()=>{
    backgrounDiv.current.style.setProperty('--main-color', `#${Math.random().toString().slice(2,8)}`)
    setClicked((prev)=> prev+1)

    },500)
    
  }
  const htmlRoot = document.querySelector(":root")
  htmlRoot.style.setProperty('--main-color', mainColor)
  // console.log(htmlRoot.getPropertyValue('height'))
  useEffect(()=>{
    fetch('https://api.quotable.io/random?')
    .then(res=> res.json())
    .then(res=> {
      nextData.current = res
      // setIsLoading(false)
      // setMainColor(`#${Math.ceil(Math.random()*999999).toString() }`)
    
    })

    if(firstLoad)
    {fetch('https://api.quotable.io/random?')
    .then(res=> res.json())
    .then(res=> {
      backgrounDiv.current.style.setProperty('--main-color', `#${Math.random().toString().slice(2,8)}`)
      currentData.current = res
      setFirstLoad(false)
      // setMainColor(`#${Math.ceil(Math.random()*999999)}`)
    
    })}   
  },[clicked])
 
  return (
    <div className='background-div' ref={backgrounDiv}>
      <div key={clicked} className="App">
        <h1 className='quote--h1' ref={(ele)=>(toFadeOut.current[0] = ele)}><i className="fa-solid fa-quote-left"></i>{currentData.current.content} </h1>
        <h5 className='author--h5' ref={(ele)=>(toFadeOut.current[1] = ele)}>- {currentData.current.author}</h5>
        <div className='bottom-container'>
          <span className='icon'><i className="fa-brands fa-square-twitter" ></i></span>
          <span className='icon'><i className="fa-brands fa-square-tumblr"></i></span>
          <button className='newQuote-btn .toFadeOut' onClick={handleNewQuote} >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
