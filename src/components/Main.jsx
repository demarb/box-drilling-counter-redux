import {useState} from 'react'
import BigBox from './Big Box'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter } from '../features/counter'

export default function Main(){

    const counter = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

    return (
        <section className="main">

                <h1>Main</h1>
                
                <div className="counter-grp">
                <button onClick={()=>dispatch(decrementCounter({level: "INCREMENT_LEVEL_ONE"}))}>
                         - 
                    </button>

                        <p>{counter.level1}</p>

                    <button onClick={()=>dispatch(incrementCounter({level: "INCREMENT_LEVEL_ONE"}))}>
                        +
                    </button>
                </div>
                


                <BigBox />

        </section>
        
    )
}