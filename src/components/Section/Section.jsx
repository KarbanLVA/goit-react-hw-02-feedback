import { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Statistics from "../Statistics/Statistics"
import NotificationMessage from "../Notification message/Notification message"

class Section extends Component {
    state =  {
        valueGood:0,
        valueNetral:0,
        valueBad:0,
        valueBoole:false               
    }

    handlClickGood = () => {
        this.setState((prevState) => ({valueGood:prevState.valueGood + 1}))        
    }

    handlClickNetral = () => {
        this.setState((prevState) => ({valueNetral:prevState.valueNetral + 1}))        
    } 
    
    handlClickBad = () => {
        this.setState((prevState) => ({valueBad:prevState.valueBad + 1}))        
    }
    countTotalFeedback = () => (this.state.valueGood + this.state.valueNetral + this.state.valueBad)

    countPositiveFeedbackPercentage = () => {
        return (Math.round(this.state.valueGood / this.countTotalFeedback() * 100))
    }
    showStatistics = () => {
        this.setState({valueBoole:true})
    }
    
    render() {
        return (
            <div>
                
                <h1>Please leave feedback</h1>
    
                <FeedbackOptions
                    showStatistics={this.showStatistics}
                    clickGood={this.handlClickGood}
                    clickNetral={this.handlClickNetral}
                    clickBad={this.handlClickBad}
                />

                <h2>Statistics</h2> 
    
                {this.state.valueBoole &&
                <Statistics                                                                                      
                    good={this.state.valueGood}
                    netral={this.state.valueNetral}
                    bad={this.state.valueBad}
                    total={this.countTotalFeedback()}
                    positive={this.countPositiveFeedbackPercentage()}
                />}
                                
                 
                {!this.state.valueBoole && <NotificationMessage/>}
                
            </div>     
        )
    }
}

export default Section;