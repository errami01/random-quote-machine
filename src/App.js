
import './App.css';
import { useEffect, useState } from 'react';

// https://api.quotable.io/random?tags=technology,famous-quotes
function App() {
  const [mainColor, setMainColor] = useState("")
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [clicked, setClicked] = useState(0)

  
   async function handleNewQuote(){
    const toFadeOut = document.querySelectorAll('.toFadeOut')
    toFadeOut.forEach((elem)=>elem.style.animation="fadeOut 1s")
    htmlRoot.style.animation = "fadeOut 1s"
      let myPromise = new Promise((resolve)=>{
        setTimeout(()=>(resolve('ok')), 1000) 
        
      
      })
    await myPromise
    setClicked((prev)=> prev+1)
    
  }
  const htmlRoot = document.querySelector(":root")
  htmlRoot.style.setProperty('--main-color', mainColor)
  // console.log(htmlRoot.getPropertyValue('height'))
  useEffect(()=>{
    
    fetch('https://api.quotable.io/random?')
    .then(res=> res.json())
    .then(res=> setData(res))
    setMainColor(`#${Math.ceil(Math.random()*999999)}`)
  },[clicked])
  console.log(data)
  return (
    <div className='background-div'>
      <div key={clicked} className="App">
        <h1 className='quote--h1 toFadeOut' ><i className="fa-solid fa-quote-left"></i>{data.content}</h1>
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
