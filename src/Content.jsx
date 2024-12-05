import React, { memo } from 'react'

const Content = ({count}) => {
    console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
    
  return (
    <div>Content {count}</div>
  )
}

export default memo(Content)