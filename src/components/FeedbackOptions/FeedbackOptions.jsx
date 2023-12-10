// import { click } from "@testing-library/user-event/dist/click";

export default function FeedbackOptions ({showStatistics,clickGood, clickNetral, clickBad}) {
    return (
        <div onClick={showStatistics}>
            <button onClick={clickGood}>good</button>
            <button onClick={clickNetral}>netral</button>
            <button onClick={clickBad}>bad</button>
        </div>    
    ) 

}  
    
    



