import React, { memo } from 'react'

const Header = ({onIncreament}) => {
    console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH')
  return (
    <div>Header
      <button onClick={onIncreament}>Increament</button>
    </div>
  )
}

export default memo(Header)