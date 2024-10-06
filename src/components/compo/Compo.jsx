import React from 'react'
import './Compo.css'
import Toggle from '../Toggle/Toggle'
import { useState,useEffect } from 'react'


const Compo = () => {

 const[quotes, setquotes]=useState("");
   
  const getquote=()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((data)=>{
      let randomnum=Math.floor(Math.random()*data.length);
      setquotes(data[randomnum]);
    });
  };

useEffect(()=>{
  getquote();
},[]);

  return (
    <div className='compo'>
      
        <div className='compo-tog'>
            <p>{quotes.text}</p>
          <h3>- {quotes.author }</h3> </div>
          <div className='tog' type='button' onClick={getquote}> <Toggle/>  </div>
           
        </div>

    //.split(',')[0]    
  )


}

export default Compo
/*  
 {quotes.text} .split(',')[0]*/


/*  const [quotes, setQuotes] = useState(''); // Store fetched quotes
  const [resultData, setResultData] = useState(''); // Store the displayed text with typing effect

  // Function to apply typing effect
  const delayPara = (index, nextWord) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setResultData((prevData) => prevData + nextWord);
        resolve(); // Signal completion for chaining promises (optional)
      }, 100 * index); // Adjust delay based on index (optional)
    });
  };

  // Function to fetch quotes and start typing effect
  const getQuote = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Error fetching quotes:', data.message); // Handle errors
      }

      const randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);

      // Start typing effect after quote is set
      if (quotes.text) {
        typeQuote(quotes.text);
      }
    } catch (error) {
      console.error('Error fetching quotes:', error.message); // Log errors
    }
  };

  // Function to iterate and apply typing effect to quote
  const typeQuote = async (quoteText) => {
    for (let i = 0; i < quoteText.length; i++) {
      await delayPara(i, quoteText[i]); // Apply typing effect
    }
    // Ensure all characters are displayed even if delayPara resolves early
    setResultData(quoteText);
  };

  useEffect(() => {
    getQuote();
  }, []); // Run getQuote on component mount */