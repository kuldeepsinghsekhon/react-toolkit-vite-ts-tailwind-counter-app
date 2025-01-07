
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../counterSlice'
import { useState } from 'react';
type Props = {}

export default function Counter({}: Props) {
    const count = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();
    const[incByValue, setIncByValue] = useState(0);
   function resetAll(){
         dispatch({type: 'counter/resetAll'})
         setIncByValue(0);
    }
    function incrementByValue(){
        dispatch({type: 'counter/incrementByValue', payload: incByValue})
    }
  return (
    <div>
        <h1>Counter</h1>
        <div>
            <span>{count}</span>
            <br/>
            <input type='number' value={incByValue} onChange={(e) => setIncByValue(parseInt(e.target.value)||0)} />    
           <br/>
            <button type='button' className='text-white bg-green-700 hover:bg-green-800 py-2.5 px-5 rounded-lg' onClick={() =>{dispatch(increment())}}>Increment+</button>
            <button className='mt-4 ml-4 text-white bg-yellow-400 hover:bg-yellow-500 py-2.5 px-5 rounded-lg' onClick={() => dispatch(decrement())}>decrement-</button>
            <button className='mt-4 ml-4 text-white bg-purple-700 hover:bg-purple-800 py-2.5 px-5 rounded-lg ' onClick={incrementByValue}>Increment by {incByValue}</button>  
            <button className='mt-4 ml-4 text-white py-2.5 px-5 bg-red-700 hover:bg-red-800 rounded-lg focus:ring-4 focus:ring-purple-300' onClick={resetAll}>Reset</button>
        </div>
    </div>
  )
}