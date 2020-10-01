import React from 'react'
import {Route} from 'react-router-dom'
import classes from './C.module.css'
import {connect} from 'react-redux'

const C = (props) => (
    <div className={classes.Container}>
        {props.timer}
    </div>
)

const mapStateToProps = state => {
    return{
        timer : state.timer
    }
}

export default connect(mapStateToProps)(C)