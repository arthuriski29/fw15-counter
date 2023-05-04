import React from "react"
import propTypes from "prop-types"

const Counter = (props)=>{
  const [count, setCount] = React.useState(0)
  const [errorMessage, setErrorMessage] = React.useState('')
  function decrement() {
    if(count > 0){
      setCount(count - 1)
      setErrorMessage('')
    }else{
      setErrorMessage('Minimum number exceeded')
    }
  }
  function increment() {
    if(count < 10){
      setCount(count + 1)
      setErrorMessage('')
    }else{
      setErrorMessage('Maximum number exceeded')
    }
  }
  const {onChangeNumber} = props
  React.useEffect(()=>{
    console.log('componentDidMount')
  }, [])
  React.useEffect(()=>{
    function changeNumber (num){
      onChangeNumber(num)
    }
    changeNumber(count)
  }, [count, onChangeNumber])

  return (
    <>
    <div>{errorMessage}</div>
    <div className= 'flex justify-between gap-16'>
      <button onClick={decrement} className="btn btn-outline h-1 bg-white text-2xl text-neutral border-none">-</button>
      <button onClick={increment} className="btn btn-outline h-1 bg-white text-2xl text-neutral border-none">+</button>
    </div>
    </>
    
  )
}

Counter.propTypes = {
  onChangeNumber: propTypes.function
}

export default Counter