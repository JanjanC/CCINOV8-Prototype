import ParkingSpotCard from '@/components/parking-spot-card';
import Crypto from 'crypto';

export const getServerSideProps = async () => {
    const res = await fetch(process.env.BASE_URL + '/api/owner/parking');
    const data = await res.json();

    for (var idx in data) {
        let id = data[idx].user_id + data[idx].address + data[idx].time + data[idx].time_start + data[idx].time_end;
        id = Crypto.createHash('sha256', process.env.SESSION_SECRET).update(id).digest('hex');
        data[idx].id = id;
    }

    return {
        props: { parkings: data },
    };
};

export default function DriverHome({ parkings }) {
    return (
        <>
            <div className="container h-100 mt-5">
                <div className="row justify-content-center py-5">
                    <h1>Available Parking Spaces</h1>
                </div>
                <div className="row d-flex flex-wrap justify-content-around">
                    {parkings.map((parking) => (
                        <ParkingSpotCard
                            key={parking.id}
                            id={parking.id}
                            thumbnail="\images\car-parking.png"
                            address={parking.address}
                            price={parking.price}
                            duration_type="Short"
                            availability="Available"
                        ></ParkingSpotCard>
                    ))}
                </div>
            </div>
        </>
    );
}
