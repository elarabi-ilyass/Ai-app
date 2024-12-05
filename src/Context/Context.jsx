import {createContext} from 'react' 
import run from '../config/gemini'

export const Context=createContext();

 export const ContextProvider =(props) =>{

  const onSent = async (prompt)=>{
    await run(prompt)
  }
  onSent("what is REACT")

  const contextValue ={

  }

  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider> 
  )
}