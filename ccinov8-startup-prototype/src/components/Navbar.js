import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <Link className="navbar-brand" href="/">
                <img id="logo" src="/images/logo.png" /> PPark
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" href="/#about">
                            ABOUT
                        </Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link className="nav-link" href="/#intro" data-toggle="modal" data-target="#signup-modal">
                            PREREGISTER
                        </Link> */}
                        <Link className="nav-link" href="/#signup-driver">
                            PREREGISTER
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
