import SmallBox from './Small Box'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter } from '../features/counter'

export default function BigBox(){

    const counter = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

    return (
        <section className="big-box">
            <h2>Big Box</h2>

            <div className="counter-grp">
                <button onClick={()=>dispatch(decrementCounter({level: "INCREMENT_LEVEL_TWO"}))}> 
                    - 
                </button>
                    <p>{counter.level2}</p>
                <button onClick={()=>dispatch(incrementCounter({level: "INCREMENT_LEVEL_TWO"}))}>
                     + 
                </button>
            </div>

            <SmallBox />
        </section>
    )
    }
