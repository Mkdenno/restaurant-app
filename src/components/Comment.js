import React from 'react'
import styled from 'styled-components'
import CommentForm from './CommentForm'


const Header=styled.div`
margin:3rem;
`
const CommentFormInput=styled.div`
margin:3rem;
`

function Comment() {
  return (
    <div>
      <Header><h1>Leave a comment</h1></Header>
      <CommentFormInput>
      <CommentForm/>
      </CommentFormInput>

    </div>
  )
}

export default Comment