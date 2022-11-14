import React from 'react'

export default function SendButton() {
  const setNewQuestion = (e) => {
    alert("new question saved")
  }
  return (
    <div>
      <button className='bg-transparent  border border-1 border-secondary rounded' onClick={setNewQuestion}>set</button>
    </div>
  )
}
