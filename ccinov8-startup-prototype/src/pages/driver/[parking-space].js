import { useState } from 'react';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const today = new Date().toLocaleDateString('sv');
    const parking_id = parking.parking_id;
    const active = 1;
    const [date, setDate] = useState('');
    const [timeStart, setTimeStart] = useState('');
    const [timeEnd, setTimeEnd] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const datetime_start = date + ' ' + timeStart + ':00';
        const datetime_end = date + ' ' + timeEnd + ':00';
        const booking = { parking_id, datetime_start, datetime_end, active };

        // Call from the booking GET
        const fetch_res = await fetch('/api/booking', { method: 'GET' });
        const data = await fetch_res.json();

        var is_conflict = false;
        for (var idx in data) {
            let item = data[idx];
            if (item.parking_id == booking.parking_id) {
                if (!(booking.datetime_start >= item.datetime_end && booking.datetime_end >= item.datetime_start)) {
                    is_conflict = true;
                }
            }
        }

        if (is_conflict) {
            console.log('Test');
        } else {
            console.log('PASS');
        }

        // const res = await fetch('/api/booking', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(booking),
        // });

        // if (res.ok) {
        //     router.push('/driver');
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
                            <form onSubmit={handleSubmit}>
                                <h5>
                                    Date:{' '}
                                    <input
                                        required
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
                                                required
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
                                                required
                                                name="time_end"
                                                type="time"
                                                min={timeStart}
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
