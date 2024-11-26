import React  from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './features/counter/counterSlice'

function App() {
 
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()

  function handleIncrement(){

    dispatch(increment())
  }

  console.log(count)
  return (
    <>
  
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter : {count}</h1>
      <div>
        <button 
          
          onClick={handleIncrement}
          style={{ margin: '5px', padding: '10px', fontSize: '16px' }}
        >
          Increment
        </button>

        {/* <span>c {count}</span> */}
        <button 
          onClick={()=>dispatch(decrement())}
          style={{ margin: '5px', padding: '10px', fontSize: '16px' }}
        >
          Decrement
        </button>
      </div>
    </div>

    </>
  )
}

export default App