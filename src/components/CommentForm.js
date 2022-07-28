import React, { useState } from "react";

const postUrl = "http://localhost:4000/comments";

const CommentForm = ({ onAddComment }) => {
  const [description, setDescription] = useState();

  const handleInput = (event) => {
    setDescription(event.target.value);
    // console.log(event.target.value)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted successfully");

    const inputData = {
      description: description,
    };

    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((addNewComment) => onAddComment(addNewComment));

    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="forminput"
          type="text"
          placeholder="Leave a comment"
          name="text"
          required
          value={description}
          onChange={handleInput}
        />
        <br />
        <button type="submit" className="formbutton">
          Write
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
