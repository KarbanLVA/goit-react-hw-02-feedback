export default function Statistics({good,netral,bad,total,positive}) {
    return (
        <div>           
            <p>Good: {good}</p>
            <p>Netral: {netral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positive}%</p>    
        </div>
    )
}