import BalanceSummary from "./components/BalanceSummary"
import { useState , useRef } from "react"
import AddButton from "./components/AddButton"

function App() {

  let inputRef=useRef(null)
  const [newBalance,setBalance]=useState(0)
  
  function handleAddBalance(){
    
    console.log(inputRef)
  }
  return(
    <>
      
      <BalanceSummary balance='100'/>    
      <AddButton />
    </>
    
  )
  
}

export default App