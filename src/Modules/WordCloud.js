import React from 'react'

export default function WordCloud({Answer1, Answer2}) {
  return (
    <div className='d-flex justify-content-around'>
    <div className='border-1 border-secondary'>
        <h4>Triggers</h4>
        <p>{Answer1}</p>
        </div>
    <div className='border-1 border-secondary'>
        <h4>Reasons</h4>
        <p>{Answer2}
        </p></div>
    </div>
  )
}
