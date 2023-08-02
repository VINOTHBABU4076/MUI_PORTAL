import React, { useReducer } from 'react';


function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return(
            { count: state.count + 1 }
            )
        case 'decrement':
            return(
            { count: state.count - 1 })
    }
}
const Reduce = () => {
        const [state, dispatch] = useReducer(reducer, { count: 0 })

        function handleincrement() {
            dispatch({
                type: 'increment'
            })
        }

        function handledecrement() {
            dispatch({
                type: 'decrement'
            })
        }
            return (
                <div>
                    <button onClick={handleincrement}> Increment </button>
                    <p>count:{state.count}</p>
                    <button onClick={handledecrement}> decrement </button>

                </div>
            )
            }
        export default Reduce
