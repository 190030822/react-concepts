const PhotoCard = (props) => {
    const {title, profieImage, thumbnailUrl} = props;
    return (
      <article className="profile-card">
        <section className="photo-description">  
          <img className = "photo" src = {profieImage} alt = {title}/>
          <p>This is title </p>
        </section>
        <a href = {thumbnailUrl}> Details </a>
      </article>
    );
  }

  export default PhotoCard;