import { createContext, useState } from "react";
import run from "../Config/gemini";

export const Context=createContext();
const ContextProvider=(props)=>{

const[input, setInput]=useState("");//input to save input data
const[recentPrompt, setRecentPrompt]=useState("");//when we click on send button, input field data will be saved in the recentprompt, and we display it in chatbox
const[prevPrompts, setPrevPrompts]=useState([]);//declared it as an array to store all the input history
const[showResult, setShowResult]=useState(false);//boolean type; once its true, it will hide the grid text boxes and display result
const[loading,setLoading]=useState(false);//if its true, it will display loading animation;after getting data we will make it false; so that we can display data
const[resultData,setResultData]=useState("");//display result

const delayPara=(index, nextWord)=>{
setTimeout(function(){ //for typing effect
    setResultData(prev=>prev+nextWord);
},75*index)
}

const onSent=async (prompt)=>{

    setResultData("") //when we'll run this function, our result data will be reset; our previous response will be removed from our state variable
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    setPrevPrompts(prev=>[...prev,input])
    const response = await run(input)
    let responseArray=response.split("**");//in order to not let some text appear within double * as it was happening before and to replace it with bold
    let newResponse="";
    for(let i=0;i<responseArray.length;i++)//for loop to iterate each word separated with double * and to add bold tag around it
    {
        if(i===0 || i%2 !==1){//meaning index is even no.
         newResponse+=responseArray[i];
        }
        else{
            newResponse+="<b>"+responseArray[i]+"</b>";
        }
    }
    let newResponse2=newResponse.split("*").join("</br")//whenever we get a * we replace it with a new line
    let newResponseArray=newResponse2.split(" ");
    for(let i=0;i<newResponseArray.length;i++)
    {
     const nextWord=newResponseArray[i];
     delayPara(i,nextWord+" ")
    }
    setLoading(false)//to hide loading animation
    setInput(" ")//input field reset with empty string

}

const contextValue={
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,

}
return ( 
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
)
}
export default ContextProvider