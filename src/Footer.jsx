import React, { memo } from 'react'

const Footer = ({onDecrement}) => {
    console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
    
  return (
    <div>Footer
      <button onClick={onDecrement}>onDecrement</button>
    </div>
  )
}

export default  memo(Footer)