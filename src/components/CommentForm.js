import React from 'react'

const CommentForm = () => {
  return (
    <div>
        <form>
            <textarea className='forminput' type='text' placeholder='Leave a comment'/><br/>
            <button className='formbutton'>Write</button>
        </form>
    </div>
  )
}

export default CommentForm