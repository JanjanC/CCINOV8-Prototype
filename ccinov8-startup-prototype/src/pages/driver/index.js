import ParkingSpotCard from '@/components/parking-spot-card';

export const getServerSideProps = async () => {
    const res = await fetch(process.env.BASE_URL + '/api/owner/parking');
    const data = await res.json();

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
                            thumbnail="\images\car-parking.png"
                            location={parking.location}
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
