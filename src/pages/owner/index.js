import Image from 'next/image';
import { useEffect } from 'react';
import ParkingSpotCard from '@/components/parking-spot-card';

export const getServerSideProps = async () => {
    const res = await fetch(process.env.BASE_URL + '/api/parking');
    const data = await res.json();
    return {
        props: { parkings: data },
    };
};

const OwnerHome = ({ parkings }) => {
    return (
        <>
            <div className="container h-100 mt-5">
                <a href="/owner/create" class="btn btn-block btn-primary">
                    Register a New Parking Spot
                </a>

                <div className="row justify-content-center py-5">
                    <h1>My Parking Spaces</h1>
                </div>
                <div className="row d-flex flex-wrap justify-content-around">
                    {parkings.map((parking) => (
                        <ParkingSpotCard
                            user_type="owner"
                            id={parking.parking_id}
                            thumbnail="\images\car-parking.png"
                            location={parking.address}
                            description={parking.description}
                            rate={parking.rate}
                            time_start={parking.time_start}
                            time_end={parking.time_end}
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
