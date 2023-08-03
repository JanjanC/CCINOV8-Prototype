import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPesoSign, faClock } from '@fortawesome/free-solid-svg-icons';

export default function ParkingSpace() {
    const router = useRouter();
    const data = router.query;
    const parking = JSON.parse(data.data);
    const today = new Date().toLocaleDateString('sv');

    //TODO: Remove this after
    console.log(parking);
    return (
        <>
            <div className="container h-100">
                <div className="rounded-box mt-5 p-4">
                    <h1 className="text-center border-bottom pb-4">{parking.address}</h1>
                    <div className="row mt-3">
                        <div className="col-5">
                            <img src={parking.thumbnail} />
                        </div>
                        <div className="col-7 p-4">
                            <div className="border rounded p-3">
                                <p>{parking.description}</p>
                            </div>
                            <br />
                            <h5>
                                Availability: <FontAwesomeIcon icon={faClock} className="fa fa-md mr-1" />{' '}
                                {parking.time_start} - {parking.time_end}
                            </h5>
                            <h5>
                                Rate: <FontAwesomeIcon icon={faPesoSign} className="fa fa-md mr-1" />
                                {parking.rate}/hr
                            </h5>
                            <br />
                            <h5>
                                Time: <input type="date" min={today}></input>
                            </h5>
                            <div className="row">
                                <div className="col">
                                    <h5>
                                        Time in: <input type="time"></input>
                                    </h5>
                                </div>
                                <div className="col">
                                    <h5>
                                        Time out: <input type="time"></input>
                                    </h5>
                                </div>
                            </div>
                            <h5 className="text-right mt-5 mr-3">
                                <input className="btn btn-lg btn-primary" type="submit" value="Book" />
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
