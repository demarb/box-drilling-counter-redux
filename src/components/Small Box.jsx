import {useEffect, useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter } from '../features/counter'

export default function SmallBox(){

    const counter = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

    return (
        <section className="small-box">
            <h3>Small Box</h3>
            
            <div className="counter-grp">
                <button onClick={()=>dispatch(decrementCounter({level: "INCREMENT_LEVEL_THREE"}))}> 
                    - 
                </button>
                    <p>{counter.level3}</p>
                <button onClick={()=>dispatch(incrementCounter({level: "INCREMENT_LEVEL_THREE"}))}>
                     + 
                </button>
            </div>

        </section>
    )
}