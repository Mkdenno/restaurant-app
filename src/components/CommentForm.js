import React, {useState} from 'react'


const CommentForm = () => {
    const[description,setDescription]=useState()

    const handleInput=(event)=>{
        setDescription(event.target.value)
        console.log(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()

        fetch()

    }

  return (

    <div>
        <form onSubmit={handleSubmit}>
            <textarea className='forminput' type='text' placeholder='Leave a comment' name='text' value={description}  onChange={handleInput}/><br/>
            <button type='button' className='formbutton'>Write</button>
        </form>
    </div>
  )
}

export default CommentForm