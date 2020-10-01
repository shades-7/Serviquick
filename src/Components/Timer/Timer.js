import React from 'react'
import classes from './Timer.module.css'
import {connect} from 'react-redux'

class Timer extends React.Component {

    intervalID = 0

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.props.onChangeValue(this.props.timer + 1)
        }, 1000)
        
    }

    render() {

        if(!this.props.running){
            clearInterval(this.intervalID)
        }
        return(
            <div className={classes.Container}>
                {this.props.timer}
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return{
        timer : state.timer,
        running : state.running
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onChangeValue : val => dispatch({
            type : 'TIMER_CHANGE_VALUE',
            payload : val
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)