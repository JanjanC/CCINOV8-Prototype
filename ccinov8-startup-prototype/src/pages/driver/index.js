import ParkingSpotCard from '@/components/parking-spot-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPesoSign, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import crypto from 'crypto';

export const getServerSideProps = async () => {
    const res = await fetch(process.env.BASE_URL + '/api/owner/parking');
    const data = await res.json();
    console.log(data);
    for (var idx in data) {
        data[idx].url = crypto
            .createHash('sha256', process.env.SESSION_SECRET)
            .update(data[idx].parking_id.toString())
            .digest('hex');
    }

    return {
        props: { parkings: data },
    };
};

export default function DriverHome({ parkings }) {
    return (
        <>
            <div className="container h-100 pb-5">
                <div className="row d-flex flex-row align-items-center justify-content-center py-4">
                    <div className="col-6">
                        <form>
                            <div className="form-group d-flex flex-row align-items-center">
                                <i className="fa fa-lg fa-search mr-4"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Where do you need to park?"
                                    required="required"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <img src="/images/google-maps.png" />
                </div>
                <div className="row d-flex justify-content-end pt-5">
                    <h4>
                        SORT BY:
                        <a href="#">
                            <FontAwesomeIcon icon={faPesoSign} className="fa fa-md ml-3" />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faClock} className="fa fa-md ml-3" />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faStar} className="fa fa-md ml-3" />
                        </a>
                    </h4>
                </div>
                <div className="row d-flex flex-wrap justify-content-start">
                    {parkings.map((parking) => (
                        <ParkingSpotCard
                            key={parking.parking_id}
                            user_type="driver"
                            id={parking.parking_id}
                            url={parking.url}
                            thumbnail="\images\car-parking.png"
                            address={parking.address}
                            rate={parking.rate}
                            time_start={parking.time_start}
                            time_end={parking.time_end}
                            description={parking.description}
                        ></ParkingSpotCard>
                    ))}
                </div>
            </div>
        </>
    );
}
