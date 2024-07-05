import Navbar from '../app/component/navbar';
import Footer from '/app/component/footer';

const Home = () => {
    return (
        <>
            <Navbar />
            
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/1.png" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="img/2.png" className="d-block w-100" alt="Slide 2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <h1 className="text-center mt-4">Shopnow <span className="badge bg-secondary"></span></h1>

            <div className="row mt-4">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <img src="img/012-0345-333.png" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <img src="img/3.jpg" className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <img src="img/25.png" className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
