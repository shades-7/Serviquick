import React from 'react'
import {Route} from 'react-router-dom'
import B from '../B/B'
import C from '../C/C'


const A = () => (
    <React.Fragment>
        <Route path="/" exact render={() => <B />} />
        <Route path="/c" exact render={() => <C />} />
    </React.Fragment>
)

export default A