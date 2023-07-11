import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCakeCandles, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Rentee() {
    return (
        <>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="rounded-box p-4">
                        <h2 className="text-center py-4">RENT OUT YOUR PARKING SPACE</h2>
                        <div className="row">
                            <form className="col-6 my-auto" action="/signup/rentee" method="POST">
                                <div className="form-group d-flex flex-row align-items-center">
                                    <FontAwesomeIcon icon={faUser} className="fa fa-lg mr-4" />
                                    <input type="text" className="form-control" name="name" placeholder="Full Name" required="required" />
                                </div>

                                <div className="form-group d-flex flex-row align-items-center">
                                    <FontAwesomeIcon icon={faCakeCandles} className="fa fa-lg mr-4" />
                                    <input type="date" className="form-control" name="birthdate" placeholder="Date of Birth" required="required" />
                                </div>

                                <div className="form-group d-flex flex-row align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="fa fa-lg mr-4" />
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" />
                                </div>

                                <div className="form-group d-flex flex-row align-items-center">
                                    <FontAwesomeIcon icon={faPhone} className="fa fa-lg mr-4" />
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
