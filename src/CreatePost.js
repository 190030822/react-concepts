import React, { useState } from 'react';

function CreatePost({ postData, postCreation }) {
  const [titleState, setTitleState] = useState(postData.title);
  const [subjectState, setSubjectState] = useState(postData.body);

  if (postData.id !== 0 &&  postData.userId === 1) {
    // Firstly, the code i am implemeted is not the good practice and we can utilize useEffect() or another useState() but,
    //  my "INTENTION" is to know the exact issue behind this problem if we do like this.
    //1) My main problem is when i am updating the post this CreatePost component is rendered from the parent component(Increment file)
    //  with new postData to fill the input fields. so i am using the if block to update field states values only one time.
    setTitleState(postData.title);
    setSubjectState(postData.body);
    postData.userId = 2;  // 2) set this userId to 2 just not to re-render the if block again. 
    // as I am setting the userID to 1 during saving the post. so no problem.

    

    // 3)as excepted the if bloc is executing only one time and updating the state values(I have checked it through console.log), 
    // but they are not getting replicated in the input fields. once you check while running the code anna.

    // can you help anna ?

  }


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
