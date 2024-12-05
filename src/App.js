import React, { useCallback, useState } from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const App = () => {
  
  const [count, setCount] = useState(0)
  const onDecrement = useCallback(()=>{
    setCount(prev=>prev-1)
  },[setCount])

  const onIncreament = useCallback(()=>{
    setCount(prev=>prev+1)
  },[setCount])
  return (
    <>
      <Header  onIncreament={onIncreament}/>
      <Content count={count}/>
      <Footer onDecrement={onDecrement}/>
    </>
    )
}

export default App