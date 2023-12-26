import posts from './data.js';
import Comment from './Comment.js';

function App() {
  return (
    <main>
      <section className="comments">
        {
          posts.map((comment) => {
            const { id, name, email, body} = comment;
            return <Comment  key = {id} name = {name} email = {email} body = {body} />

          })
        }
      </section>
    </main>
  );
}


export default App;
