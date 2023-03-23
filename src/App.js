
import './App.css';
import { useEffect, useState, useRef } from 'react';

// https://api.quotable.io/random?tags=technology,famous-quotes
function App() {
  const [mainColor, setMainColor] = useState("")
  const [data, setData] = useState({})
  // const [isLoading, setIsLoading] = useState(false)
  const [clicked, setClicked] = useState(0)
  const [firstLoad, setFirstLoad] = useState(true)
  const nextData = useRef({})
  const currentData = useRef({})
  
  console.log(`${nextData}`)
  console.log("current "+currentData)
  
   function handleNewQuote(){
    currentData.current = nextData.current
    const toFadeOut = document.querySelectorAll('.toFadeOut')
    toFadeOut.forEach((elem)=>elem.style.animation="fadeOut 2s")
    htmlRoot.style.animation = "fadeOut 1s"
    //   let myPromise = new Promise((resolve)=>{
    //     setTimeout(()=>(resolve('ok')), 1000) 
        
      
    //   })
    // await myPromise
    // setIsLoading(true)
    setTimeout(()=>setClicked((prev)=> prev+1),1000)
    
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
      // setMainColor(`#${Math.ceil(Math.random()*999999)}`)
    
    })

    if(firstLoad)
    {fetch('https://api.quotable.io/random?')
    .then(res=> res.json())
    .then(res=> {
      currentData.current = res
      setFirstLoad(false)
      // setMainColor(`#${Math.ceil(Math.random()*999999)}`)
    
    })}
    

    
  },[clicked])
 
  return (
    <div className='background-div'>
      <div key={clicked} className="App">
        <h1 className='quote--h1 toFadeOut' ><i className="fa-solid fa-quote-left"></i>{currentData.current.content} </h1>
        <h5 className='author--h5 toFadeOut'>- {data.author}</h5>
        <div className='bottom-container'>
          <i className="fa-brands fa-square-twitter .toFadeOut" ></i>
          <i className="fa-brands fa-square-tumblr .toFadeOut"></i>
          <button className='newQuote-btn .toFadeOut' onClick={handleNewQuote} >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
