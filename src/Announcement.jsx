import React from 'react'

const Announcement = ({ text }) => {
  if (!text) return null
  return (
    <div className='alert alert-info usa-width-one-whole'>
      <div className='alert-body'>
        <h3 className='alert-heading'>Announcement</h3>
        <p className='alert-text'>{text}</p>
      </div>
    </div>
  )
}

export default Announcement