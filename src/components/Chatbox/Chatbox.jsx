import React, { useContext } from 'react'
import './Chatbox.css'
import { Context } from '../../Contexti/Context'
const Chatbox = () => {

   const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  return (
    <div className="fun-bottom">
        {!showResult?(<> </>): (<div className="result">
            <div className="result-title">
                <img src="assets/image.jpeg" alt="" />
                <p> {recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src="assets/icons8-magic-48.png" alt="" />
                {loading? <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
               
            </div>
            </div>)}
        <div className="searchbox">
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Amara is here for you'/>
          <img onClick={()=>onSent()} src="assets/icons8-send-64.png" alt="" />
        </div>
    </div>
  )
}

export default Chatbox
//line 17; inside danger...here we add an object,where we define html property, and provide result data; 
//if i provide resultdata state as within {resultdata} only, it will display all the tags
// available inside the text; if i want to hide those tags and display it as an html tag we use this
//line 17; if loading is true, it means response is not generated yet and we display animation; else we display answer