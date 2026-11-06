import SummaryCard  from "./SummaryCard";

function BalanceSummary(){

  return(
    <div className="BalanceSummary">
      <div className="SummaryCard">
        <SummaryCard label='Balance' amount={1000} />  
      </div>

      <div className="SummaryCard">
        <SummaryCard label='Receipt' amount={500} />  
      </div>

      <div className="SummaryCard">
        <SummaryCard label='Spent' amount={500} />  
      </div>
      
    </div>
      
  )
  
  
}

export default BalanceSummary