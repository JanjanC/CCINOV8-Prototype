export default function Rentee() {
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
                            <a className="nav-link" href="/">
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#signup-renter">
                                PREREGISTER
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="rounded-box p-4">
                        <h2 className="text-center py-4">RENT OUT YOUR PARKING SPACE</h2>
                        <div className="row">
                            <form className="col-6 my-auto" action="/signup/rentee" method="POST">
                                <div className="form-group d-flex flex-row align-items-center">
                                    <i className="fa fa-lg fa-user mr-4"></i>
                                    <input type="text" className="form-control" name="name" placeholder="Full Name" required="required" />
                                </div>

                                <div className="form-group d-flex flex-row align-items-center">
                                    <i className="fa fa-lg fa-birthday-cake mr-4"></i>
                                    <input type="date" className="form-control" name="birthdate" placeholder="Date of Birth" required="required" />
                                </div>

                                <div className="form-group d-flex flex-row align-items-center">
                                    <i className="fa fa-lg fa-envelope mr-4"></i>
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                                </div>

                                <div className="form-group d-flex flex-row align-items-center">
                                    <i className="fa fa-lg fa-phone mr-4"></i>
                                    <input type="tel" className="form-control" name="contact" placeholder="Contact Number" required="required" />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block mb-2">
                                        PREREGISTER
                                    </button>
                                    <a href="../signup/renter">WANT TO LOOK FOR PARKING SPACES INSTEAD?</a>
                                </div>
                            </form>
                            <div className="col-6">
                                <img src="/images/parking-space-owners.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
