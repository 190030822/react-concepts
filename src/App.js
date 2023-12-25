

let moviesData = [
  {
    title: "Avatar: The Last Airbender",
    movie_image: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nulla?"
  },
  {
    title: "Toy Story",
    movie_image: "https://www.yardbarker.com/media/d/0/d087c897fc875471933ced712bf4677d8b551a3a/thumb_16x9/28-best-animated-movie-franchises-time.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nulla?"
  },
  {
    title: "The Light House",
    movie_image: "https://www.keyframeschool.mx/wp-content/uploads/2019/02/up.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nulla?"
  },
  {
    title: "The Ghost School",
    movie_image: "https://wallpapercave.com/dwp1x/wp2383818.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, nulla?"
  },
]


const Movie = (props) => {
  const {title, image, desc} = props;
  console.log(image);
  return (
    <article className = "movie-article">
      <figure className="img-container">
        <img className = "main-image" src = {image} alt = "Avatar pic" />
        <figcaption className = "sub-heading">{title}</figcaption>
    </figure>
    <p>{desc}</p>
  </article>
  );
}


function App() {
  return (
    <section className = "flex-container"> {
      moviesData.map((movie, index) => {
        const {title, movie_image: image, desc} = movie;
        return (<Movie key = {index} title = {title} image = {image} desc = {desc}/>);
      })
    }
      
    </section>
   
  );
}

export default App;
