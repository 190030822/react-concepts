import PhotoCard from "./Profile";
import photosData from "./data";

function App() {
  return <main className="album-container">
    {
      photosData.map((profile, index) => {
        const {title, url:profieImage, thumbnailUrl} = profile;
        return <PhotoCard key = {index} title = {title} profieImage = {profieImage} thumbnailUrl = {thumbnailUrl} />
      })
    } 
  </main>
}


export default App;
