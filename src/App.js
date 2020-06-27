import React, { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [quotes, setQuotes] = useState ([])

  useEffect (()=> {
    const fetchData = async () => {
    const result = await fetch('https://cyf-tayfuntayfun.herokuapp.com/quotes/random')
      .then(response => response.json())
      setQuotes(result);
      console.log(quotes)
    }
  fetchData();
  }, []);

    const handleClick =() => {
      window.location.reload(true)
    }

  return (
    quotes ? 
    <div className="quote-box">
      <div className='quote-box-quote'>
        <div>
          <p style={{
                    fontSize:'24px'
                    }}>{quotes.quote}</p>
        </div>
        <div>
          <p style={{
                    color:'yellow'
                    }}>{quotes.author}</p>
        </div>
      </div>
      <div className='button-box'>
        <button 
            style={{backgroundColor:'#263238',
                    border: '1px solid gray',
                    borderRadius:'3px',
                    padding:'10px',
                    color:'white'
                    }}
            onClick={handleClick}
            ><b>New Quote</b>
        </button>
      </div>
    </div> : null
  );
}

export default App;
