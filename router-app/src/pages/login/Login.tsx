
export const Login = () => {

    return (
        <>
            {/* <center> */}
                <div className="container d-flex vh-100">
                    <div className="row justify-content-center align-self-center w-100">
                        <div className="col-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Login</h5>
                                    <div className="card-body">
                                        <div className="row">
                                            <label className="form-label" htmlFor="inputUsername1">Username</label>
                                            <input className="form-control" type="text" id="inputUsername1"/>
                                        </div>
                                        <div className="row">
                                            <label className="form-label" htmlFor="inputPassword1">Password</label>
                                            <input className="form-control" type="password" id="inputPassword1"/>
                                        </div>
                                        <div className="row">
                                            <button className="btn btn-primary mt-4" type="button">Login</button>
                                        </div>
                                        <div className="row text-center mt-3">
                                            <p>Not a member? <a href="/">Sign Up</a></p>
                                        </div>
                                        <div className="row mt-0 align-items-center justify-content-center">
                                            <div className="col-12 d-flex justify-content-center align-items-center mt-0 pd-0">
                                                <div className="me-2">
                                                    Or sign up with:
                                                </div>
                                                <div className="ms-0 ps-0">
                                                    <a href="/">
                                                        <i className="bi bi-google fs-3"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </center> */}
        </>
    )
}