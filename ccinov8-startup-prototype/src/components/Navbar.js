const Navbar = () => {
    return (
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
    );
};

export default Navbar;
