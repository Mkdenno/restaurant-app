import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import CommentForm from './CommentForm'

const commenturl='http://localhost:4000/comments'


const Header=styled.div`
margin:3rem;
`
const CommentFormInput=styled.div`
margin:3rem;
`
const Commentsection=styled.div`
margin:3rem;
width:60%;

`

function Comment() {
  const [comments, setComments]=useState([])

  useEffect(()=>{
    fetch(commenturl)
    .then(res=>res.json())
    .then(data=>{
      setComments(data)
    })

  },[])
  const displayComments=comments.map((comment)=>(
    <div className='Mycomments' key={comment.id}>
       {comment.description}

    </div>
  ))


  return (
    <div>
      <Header><h1>Write a comment</h1></Header>
      <CommentFormInput>
      <CommentForm onAddComment={handleAddComment}/>
      </CommentFormInput>
      <Commentsection>
        <h2 className='commentHeader'>Comment Section</h2>
        <div>
          <h2> {displayComments}</h2>
        </div>
      </Commentsection>

    </div>
  )
}

export default Comment