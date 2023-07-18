import Image from 'next/image';
import { useEffect } from 'react';
import ParkingSpotCard from '@/components/parking-spot-card';

export const getServerSideProps = async () => {
    const res = await fetch(process.env.BASE_URL + '/api/owner/parking');
    const data = await res.json();
    return {
        props: { parkings: data },
    };
};

const OwnerHome = ({ parkings }) => {
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
            <div className="container h-100 mt-5">
                <div className="row justify-content-center py-5">
                    <h1>My Parking Spaces</h1>
                </div>
                <div className="row d-flex flex-wrap justify-content-around">
                    {parkings.map((parking) => (
                        <ParkingSpotCard
                            thumbnail="\images\car-parking.png"
                            location={parking.address}
                            price={parking.price}
                            duration_type="Short"
                            availability="Available"
                        ></ParkingSpotCard>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OwnerHome;
