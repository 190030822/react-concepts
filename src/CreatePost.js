import React, { useEffect, useState } from 'react';

function CreatePost({ postData, postCreation }) {
  const [titleState, setTitleState] = useState(postData.title);
  const [subjectState, setSubjectState] = useState(postData.body);

  useEffect(() => {
    setTitleState(postData.title);
    setSubjectState(postData.body);
  }, [postData]);

  const handleFieldState = (e, fieldName) => {
    switch (fieldName) {
      case 'title':
        setTitleState(e.target.value);
        break;
      case 'subject':
        setSubjectState(e.target.value);
        break;
      default:
        console.log('Invalid State');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let post = {
      userId: 1,
      id: postData.id,
      title: titleState,
      body: subjectState,
    };
    postCreation(post);
    setTitleState('');
    setSubjectState(''); 
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          value={titleState}
          onChange={(e) => handleFieldState(e, 'title')}
        />
      </div>

      <div>
        <input
          type="text"
          name="subject"
          id="subject"
          value={subjectState}
          onChange={(e) => handleFieldState(e, 'subject')}
        />
      </div>
      <div>
        <input type="submit" value={postData.id === 0 ? 'Create' : 'Update'} />
      </div>
    </form>
  );
}

export default CreatePost;
