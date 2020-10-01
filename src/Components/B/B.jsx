import React from 'react'
import Timer from '../Timer/Timer'
import classes from './B.module.css'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

const B = (props) => (
    <div className={classes.Container}>
        <Timer />
        <button className={classes.button} onClick={props.handleStop}>Stop</button>
        <NavLink to="/c" className={classes.LinkToC}>Visit C</NavLink>
    </div>
)

const mapDispatchToProps = dispatch => {
    return{
        handleStop : () => dispatch({
            type : 'HANDLE_STOP'
        })
    }
}

export default connect(null, mapDispatchToProps)(B)