import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPesoSign, faClock } from '@fortawesome/free-solid-svg-icons';

export const getServerSideProps = async (context) => {
    const id = context.params['parking-space'];

    const res = await fetch(process.env.BASE_URL + `/api/parking/info?id=${id}`);
    const parking = await res.json();
    return {
        props: { parking: parking[0] },
    };
};

export default function ParkingSpace({ parking }) {
    const today = new Date().toLocaleDateString('sv');
    
    return (
        <>
            <div className="container h-100">
                <div className="rounded-box mt-5 p-4">
                    <h1 className="text-center border-bottom pb-4">{parking.address}</h1>
                    <div className="row mt-3">
                        <div className="col-5">
                            <img src={parking.image} />
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
