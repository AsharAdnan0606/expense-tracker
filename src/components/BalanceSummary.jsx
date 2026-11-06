import SummaryCard  from "./SummaryCard";

function BalanceSummary(props){

  return(
    <div className="BalanceSummary">
      <div className="SummaryCard">
        <SummaryCard label='Balance' amount={`${props.balance}$`} />  
      </div>

      <div className="SummaryCard">
        <SummaryCard label='Receipt' amount={0} />  
      </div>

      <div className="SummaryCard">
        <SummaryCard label='Spent' amount={0} />  
      </div>
      
    </div>
      
  )
  
  
}

export default BalanceSummary