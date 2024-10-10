import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement, reset, incrementByAmount } from '../redux/counterSlice';

const Counter = () => {
  const [amount, setAmount] = useState(0)
  const { count } = useSelector(state => state.counterReducer)
  console.log(count);
  const dispatch = useDispatch()
  const handleIncrementAmount = () => {
    if (amount) {
      // dispatch action with input amount
      dispatch(incrementByAmount(amount))
    }
    else {
      alert("please enter amount!")
    }

  }



  return (
    <div className='border rounded p-5 text-center'>
      <h1 style={{ fontSize: '100px' }}>{count}</h1>

      <div style={{ width: '500px' }} className='mt-5 d-flex justify-content-between '>
        <button onClick={() => dispatch(decrement())} type="button" className="btn btn-danger">DECREMENT</button>
        <button onClick={() => dispatch(reset())} type="button" className="btn btn-warning">RESET</button>
        <button onClick={() => dispatch(increment())} type="button" className="btn btn-success">INCREMENT</button>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-5">
        <input onChange={e => setAmount(e.target.value)} type="text" placeholder='Input increment amount' className='form-control' />
        <button onClick={handleIncrementAmount} className='btn btn-primary ms-5'>Increment by amount</button>
      </div>


    </div>
  )
}

export default Counter