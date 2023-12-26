const Comment = ({name, email, body}) => {
    return (
    <div className="comment">
        <div className="comment-header">
            <span>{name}</span> 
            <span>{email}</span>
        </div>
        <div className="comment-body">
            {body}
        </div>
    </div>
    );
}

export default Comment;