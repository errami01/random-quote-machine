
import './App.css';
import { useEffect } from 'react';
// https://api.quotable.io/random?tags=technology,famous-quotes
function App() {
  const mainColor= `#${Math.floor(Math.random()*1000000)}`
  
  const htmlRoot = document.querySelector(":root")
  htmlRoot.style.setProperty('--main-color', mainColor)
  // console.log(htmlRoot.getPropertyValue('height'))
  useEffect(()=>{
    fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
    .then(res=> res.json())
    .then(res=> console.log(res))
  },[])
  return (
    <div className="App">
      <h1 className='quote--h1'><i className="fa-solid fa-quote-left"></i>When I let go of what I am, I become what I might be.</h1>
      <h5 className='author--h5'>- Lao Tzu</h5>
      <div className='bottom-container'>
        <i className="fa-brands fa-square-twitter"></i>
        <i className="fa-brands fa-square-tumblr"></i>
        <button className='newQuote-btn' >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
