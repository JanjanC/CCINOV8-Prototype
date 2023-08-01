import ParkingSpotCard from '@/components/parking-spot-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPesoSign, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
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
