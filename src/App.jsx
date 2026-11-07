import BalanceSummary from "./components/BalanceSummary"
import { useState , useRef } from "react"
import AddButton from "./components/AddButton"

function App() {

  let inputRef=useRef(null)
  let categoryRef=useRef(null)
  const [Balance,setBalance]=useState(0)
  
  function handleAddButton(){
    let newBalance=0
    console.log(`input shows: ${inputRef.current.value}`)
    console.log(`category selected: ${categoryRef.current.value}`)
    if (categoryRef.current.value === 'Add'){
       newBalance=Number(Balance)+Number(inputRef.current.value)
    }else{
       newBalance=Number(Balance)-Number(inputRef.current.value)
    }

    
    setBalance(newBalance)
  }

  
  return(
    <>     
      <BalanceSummary balance={Balance}/>    
      <AddButton inputRef={inputRef}/>
      <select ref={categoryRef}>
        <option value='Add'>Add</option>
        <option value='Spend'>Spend</option>
      </select>
      <button onClick={handleAddButton}>+</button>
      
    </>
    
  )
  
}

export default App