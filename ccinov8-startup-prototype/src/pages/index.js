export default function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <a className="navbar-brand" href="/">
                    {' '}
                    <img id="logo" src="/images/logo.png" /> PPark{' '}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#intro" data-toggle="modal" data-target="#signup-modal">
                                PREREGISTER
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                <div className="row featurette px-5" id="intro">
                    <div className="col-md-6 my-auto">
                        <img src="/images/car-parking.png" />
                    </div>
                    <div className="col-md-6 my-auto">
                        <h2 className="featurette-heading">
                            FIND A PARKING SPOT <br />
                            <span className="text-primary">WITH EASE</span>
                        </h2>
                        <p className="lead">Having trouble finding where to park your car? Willing to rent out your parking space to others? We got you covered.</p>
                        <div>
                            <a href="#about" className="btn btn-primary btn-rounded mr-4">
                                LEARN MORE
                            </a>
                            <button href="#signup-renter" className="btn btn-outline-primary mr-4" data-toggle="modal" data-target="#signup-modal">
                                PREREGISTER
                            </button>
                            <div className="modal fade" id="signup-modal" tabIndex="-1" role="dialog" aria-labelledby="Sign Up Modal" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="row d-flex justify-content-around p-5">
                                                <a className="signup-modal-link col-5 d-flex flex-column justify-content-center align-items-center signup-modal-div text-center" href="#signup/renter">
                                                    <i className="fa fa-car modal-icon" aria-hidden="true"></i>
                                                    <p>I WANT TO LOOK FOR A PARKING SPACE</p>
                                                </a>
                                                <a className="signup-modal-link col-5 d-flex flex-column justify-content-center align-items-center signup-modal-div text-center" href="signup/rentee">
                                                    <i className="fa fa-home modal-icon" aria-hidden="true"></i>
                                                    <p>I WANT TO RENT OUT MY PARKING SPACE</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette px-5" id="about">
                    <div className="col-md-6 my-auto">
                        <h2 className="featurette-heading">WHAT DO WE DO?</h2>
                        <p className="lead">Our product is designed to help private vehicle owners to find parking spaces that are being rented out by parking space owners within the Philippines.</p>
                    </div>
                    <div className="col-md-3 rounded-div my-auto d-flex flex-column align-items-center">
                        <img src="/images/ease-of-access.png" />
                        <p className="text-center">EASE OF ACCESS</p>
                    </div>
                    <div className="col-md-3 rounded-div my-auto d-flex flex-column align-items-center">
                        <img src=" /images/less-time-wasted.png" />
                        <p className="text-center">LESS TIME WASTED</p>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette px-5" id="signup-renter">
                    <div className="col-md-6 my-auto">
                        <img src="/images/drivers.png" />
                    </div>
                    <div className="col-md-6 my-auto">
                        <h2 className="featurette-heading">
                            WANT TO START
                            <br />
                            <span className="text-primary">BOOKING?</span>
                        </h2>
                        <p className="lead">Follow our step by step process to learn how to book a parking space.</p>
                        <a href="#signup/renter" className="btn btn-primary">
                            GET STARTED
                        </a>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette px-5" id="signup-rentee">
                    <div className="col-md-6 my-auto">
                        <h2 className="featurette-heading">
                            WILLING TO RENT OUT YOUR
                            <br />
                            <span className="text-primary">PARKING SPACE?</span>
                        </h2>
                        <p className="lead">Follow our step by step process to learn more on how to rent out your parking space.</p>
                        <a href="signup/rentee" className="btn btn-primary">
                            GET STARTED
                        </a>
                    </div>
                    <div className="col-md-6 my-auto">
                        <img src="images/parking-space-owners.png" />
                    </div>
                </div>
            </div>
        </>
    );
}
