import {useReducer} from 'react';   
const initialState = {count: 0}
type CounterState={
    count: number
}
type UpdateAction ={
    type: 'increment' | 'decrement'
    payload: number
}

type ReactAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ReactAction
function reducer(state: CounterState, action: CounterAction){
        switch(action.type){
            case 'increment':
                return { count: state.count + action.payload }
          case 'decrement': 
              return {count: state.count - action.payload} 
              default:
                return {count: 0}  
        }
}

export const Counter=() =>{
    const[state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment 10</button>
        <button onClick = {() => dispatch({type: 'decrement',  payload: 10})}>Decrement 10</button>
        <button onClick = {() => dispatch({type: 'reset'})}>Reset</button>
      
        </>
    )
}

