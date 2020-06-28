import React, { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [quotes, setQuotes] = useState ({})

  const quote_api_url= 'https://cyf-tayfuntayfun.herokuapp.com/quotes/random';

  const getRandomQuote = () => {
    fetch(quote_api_url)
      .then(response => response.json())
      .then((data) => setQuotes(data))
  };

  useEffect (()=> {
    getRandomQuote();
  }, []);

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
            onClick={getRandomQuote}
            ><b>New Quote</b>
        </button>
      </div>
    </div> : null
  );
}

export default App;
