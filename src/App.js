import logo from './logo.svg';
import './App.css';
import LatestProducts from './components/LatestProducts';
 
function App() {
  return (
    <div style={{textAlign:"center"}}>
         <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/jewellery banner.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="./images/banner2.png" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="./images/Jewellery.jpeg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
         <hr/>
         <div  style={{paddingLeft:"20%", paddingRight: "10%"}}>
         <LatestProducts />
         </div>
         <br/><br/>         
    </div>
  );
}

export default App;
