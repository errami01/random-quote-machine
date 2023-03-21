
import './App.css';

function App() {
  const mainColor= `#${Math.floor(Math.random()*1000000)}`
  console.log(mainColor)
  return (
    <div className="App">
      <h1 className='quote--h1'><i className="fa-solid fa-quote-left"></i>When I let go of what I am, I become what I might be.</h1>
      <h5 className='author--h5'>- Lao Tzu</h5>
      <div className='bottom-container'>
        <i className="fa-brands fa-square-twitter"></i>
        <i className="fa-brands fa-square-tumblr"></i>
        <button className='newQuote-btn' style={{background: mainColor}}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
