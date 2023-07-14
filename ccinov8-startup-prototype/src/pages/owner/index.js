import Image from 'next/image';

const OwnerHome = () => {
    return (
        <>
            {/* <h1>Welcome Back Owner!</h1> */}

            {/* <div classNameName="Notif">
                <h2>Notifications</h2>

                <ul>
                    <h3>Bob has paid for this month's due - Taft Avenue</h3>
                    <h3>Alice has booked your parking - Pedro Gil</h3>
                    <h3>Charlie has booked your parking - EGI Taft Towers</h3>
                </ul>
            </div> */}

            <div className="row">
                <div className="card mb-4">
                    <Image
                        className="card-img-top img-fluid"
                        src={'/images/drivers.png'}
                        width={320}
                        height={180}
                        alt="Card image cap"
                    ></Image>
                    <div className="card-body">
                        <h4 className="card-title">Taft Avenue</h4>
                        <p className="card-text">Occupied</p>
                    </div>
                </div>

                <div className="card mb-4">
                    <Image
                        className="card-img-top img-fluid"
                        src={'/images/drivers.png'}
                        width={320}
                        height={180}
                        alt="Card image cap"
                    ></Image>
                    <div className="card-body">
                        <h4 className="card-title">Taft Avenue</h4>
                        <p className="card-text">Occupied</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OwnerHome;
