import React from 'react'

function Comment(props) {

    const {id, title, body, deletePost, updatePost} = props;

    const getPost = () => {
        return {
            "userId" : 1,
            "id" : id,
            "title" : title,
            "body" : body
        }
    }

  return (
    <article style={{margin : "2rem"}}>
        <div>{title}</div>
        <div>{body}</div>
        <button onClick={() => deletePost(id)}>Delete Post</button>
        <button onClick = { () => updatePost(getPost()) }> Update Post</button>
    </article>
  );
}

export default Comment;