import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPesoSign, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ParkingSpotCard = (props) => {
    const thumbnail = props.thumbnail;
    const location = props.location;
    const price = props.price;
    const duration_type = props.duration_type;
    const availability = props.availability;

    return (
        <Link className="parking-spot-card col-3 rounded-box p-4 mx-2 my-4" href="#">
            <img src={thumbnail} />
            <h4>{location}</h4>
            <small>
                <FontAwesomeIcon icon={faPesoSign} className="fa fa-md mr-2" />
                {price} php
            </small>
            <br />
            <div className="d-flex justify-content-between">
                <small>
                    <FontAwesomeIcon icon={faClock} className="fa fa-md mr-2" />
                    {duration_type} Term
                </small>
                <small>{availability}</small>
            </div>
        </Link>
    );
};
export default ParkingSpotCard;
