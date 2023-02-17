import '.././App.css';
import Footer from './footer';
import Nav from './nav';
function Home() {
  return (
    <>
      <Nav />
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://source.unsplash.com/random/1920x1080/?books" height="500" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="p-3 mb-2 bg-light text-dark">Book Management Systems </h5>
              <p className="text-warning">Purchase books: Admin can also add the details of the book purchased from shops along with the shop name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="para">
        <h1>Book World</h1>
        <p>
        If you're a book lover who's always looking for something new to read, this web site is a site you definitely need in your life        </p>
      </div>
      <Footer />
    </>
  )
}
export default Home
// https://source.unsplash.com/random/1920x1080/?black,dark