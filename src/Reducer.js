const initialState = {
    timer : 0,
    running : true
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TIMER_CHANGE_VALUE' : 
            return{
                ...state,
                timer : action.payload
            }
        case 'HANDLE_STOP' :
            console.log('Handling Stop') 
            clearInterval(0)
            return{
                ...state,
                running : false
            }
    }

    return state
}

export default Reducer