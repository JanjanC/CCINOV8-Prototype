const OwnerHome = () => {
    return (
        <>
            <h1>Welcome Back Owner!</h1>

            <div className="Notif">
                <h2>Notifications</h2>

                <ul>
                    <h3>Bob has paid for this month's due - Taft Avenue</h3>
                    <h3>Alice has booked your parking - Pedro Gil</h3>
                    <h3>Charlie has booked your parking - EGI Taft Towers</h3>
                </ul>
            </div>
            <section>
                <div className="Parking">
                    <div className="Spot1">
                        <img
                            src="https://parklio.com/assets/img/blog/100003/the-best-solution-for-parking-protection_1657283968214.jpg"
                            alt="Parking Spot 1"
                        ></img>
                        <h3>Taft Avenue</h3>
                        <p>OCCUPIED</p>
                    </div>

                    <div className="Spot2">
                        <img
                            src="https://hips.hearstapps.com/hmg-prod/images/vacant-car-parking-space-royalty-free-image-1591721505.jpg"
                            alt="Parking Spot 1"
                        ></img>
                        <h3>Pedro Gil</h3>
                        <p>UNOCCUPIED</p>
                    </div>

                    <div className="Spot3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG/1200px-Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG"
                            alt="Parking Spot 1"
                        ></img>
                        <h3>EGI Taft Towers</h3>
                        <p>BOOKED</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OwnerHome;
