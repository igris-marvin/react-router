import { Footer } from "../../components/home/Footer"

export const Home = () => {
    
    return <>

        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 1" />
                            <div className="card-body">
                                <h5 className="card-title">Service 1</h5>
                                <p className="card-text">Description of Service 1.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 2" />
                            <div className="card-body">
                                <h5 className="card-title">Service 2</h5>
                                <p className="card-text">Description of Service 2.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Service 3" />
                            <div className="card-body">
                                <h5 className="card-title">Service 3</h5>
                                <p className="card-text">Description of Service 3.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </>
}