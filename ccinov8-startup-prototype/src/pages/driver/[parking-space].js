import { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPesoSign, faClock } from '@fortawesome/free-solid-svg-icons';

export default function ParkingSpace() {
    const router = useRouter();
    const data = router.query;
    const parking = JSON.parse(data.data);
    const today = new Date().toLocaleDateString('sv');

    const parking_id = parking.id;
    const active = 1;
    const [date, setDate] = useState('');
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');

    //TODO: Remove this after
    console.log(parking);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(date);
        const datetime_start = date + timeStart;
        const datetime_end = date + timeEnd;
        console.log(datetime_start);
        const parking = { parking_id, datetime_start, datetime_end, active };
        //console.log(parking);
        // const res = await fetch('/api/owner/parking', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(parking),
        // });

        // if (res.ok) {
        //     router.push('/owner');
        // } else {
        //     router.push('/error');
        // }
    };

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
                            <form onSubmit={handleSubmit}>
                                <h5>
                                    Date:{' '}
                                    <input
                                        name="date"
                                        type="date"
                                        min={today}
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    ></input>
                                </h5>
                                <div className="row">
                                    <div className="col">
                                        <h5>
                                            Time in:{' '}
                                            <input
                                                name="time_start"
                                                type="time"
                                                min={parking.time_start}
                                                value={timeStart}
                                                onChange={(e) => setTimeStart(e.target.value)}
                                            ></input>
                                        </h5>
                                    </div>
                                    <div className="col">
                                        <h5>
                                            Time out:{' '}
                                            <input
                                                name="time_end"
                                                type="time"
                                                max={parking.time_end}
                                                value={timeEnd}
                                                onChange={(e) => setTimeEnd(e.target.value)}
                                            ></input>
                                        </h5>
                                    </div>
                                </div>
                                <h5 className="text-right mt-5 mr-3">
                                    <input className="btn btn-lg btn-primary" type="submit" />
                                </h5>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
