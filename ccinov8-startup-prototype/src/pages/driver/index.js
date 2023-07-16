import ParkingSpotCard from '@/components/parking-spot-card';

export default function DriverSearch() {
    return (
        <>
            <div className="container h-100 mt-5">
                <div className="row justify-content-center py-5">
                    <h1>Available Parking Spaces</h1>
                </div>
                <div className="row d-flex flex-wrap justify-content-around">
                    <ParkingSpotCard
                        thumbnail="\images\car-parking.png"
                        location="Taft Avenue, Manila"
                        price="50"
                        duration_type="Short"
                        availability="Available"
                    ></ParkingSpotCard>
                    <ParkingSpotCard
                        thumbnail="\images\car-parking.png"
                        location="Taft Avenue, Manila"
                        price="50"
                        duration_type="Short"
                        availability="Available"
                    ></ParkingSpotCard>
                    <ParkingSpotCard
                        thumbnail="\images\car-parking.png"
                        location="Taft Avenue, Manila"
                        price="50"
                        duration_type="Short"
                        availability="Available"
                    ></ParkingSpotCard>
                </div>
            </div>
        </>
    );
}
