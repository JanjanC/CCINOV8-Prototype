import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useLog from '@/hooks/useLog';

export default function ParkingSpace() {
    useLog('Rent Parking Space Page');

    const [parkingSpaceCount, setParkingSpaceCount] = useState('');
    const parkingNatureOptions = ['Residential', 'Commercial', 'Residential or Commercial'];
    const [parkingNature, setParkingNature] = useState(parkingNatureOptions[0]);
    const [parkingLocation, setParkingLocation] = useState('');
    const [parkingTimeStart, setParkingTimeStart] = useState('');
    const [parkingTimeEnd, setParkingTimeEnd] = useState('');
    const [parkingPriceRate, setParkingPriceRate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div class="container h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="rounded-box p-4">
                        <h2 class="text-center py-4">PARKING SPACE INFORMATION</h2>
                        <div class="row">
                            <form class="col-6 my-auto" action="/signup/rentee/parking" method="POST">
                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="count">
                                        No. of Parking Spaces:
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="count"
                                        placeholder="Number of Parking Spaces"
                                        value={parkingSpaceCount}
                                        required="required"
                                        onChange={(e) => setParkingSpaceCount(e.target.value)}
                                    />
                                </div>

                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="type">
                                        Nature of Parking Spaces:
                                    </label>
                                    <select
                                        class="form-select form-control"
                                        name="type"
                                        onChange={(e) => setParkingNature(e.target.value)}
                                        defaultValue={parkingNature}
                                    >
                                        {parkingNatureOptions.map((option, idx) => (
                                            <option key={idx} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="location">
                                        Location of Parking Spaces:
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="location"
                                        placeholder="Name of City"
                                        value={parkingLocation}
                                        required="required"
                                        onChange={(e) => setParkingLocation(e.target.value)}
                                    />
                                </div>

                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="time">
                                        Parking Time Availability:
                                    </label>
                                    <input
                                        type="time"
                                        class="form-control"
                                        name="time_start"
                                        placeholder="Price per Hour (in Php)"
                                        value={parkingTimeStart}
                                        required="required"
                                        onChange={(e) => setParkingTimeStart(e.target.value)}
                                    />
                                    <span class="mx-1">to</span>
                                    <input
                                        type="time"
                                        class="form-control"
                                        name="time_end"
                                        placeholder="Price per Hour (in Php)"
                                        value={parkingTimeEnd}
                                        required="required"
                                        onChange={(e) => setParkingTimeEnd(e.target.value)}
                                    />
                                </div>

                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="price">
                                        Renting Price per Hour<span class="text-danger">*</span>:{' '}
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="price"
                                        placeholder="Price per Hour (in Php)"
                                        value={parkingPriceRate}
                                        required="required"
                                        onChange={(e) => setParkingPriceRate(e.target.value)}
                                    />
                                </div>

                                <div class="form-group d-flex flex-row align-items-center">
                                    <small class="text-danger">
                                        *your total earnings on our platform will be subject to a 3% (TO CHANGE) commission
                                    </small>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block mb-2">
                                        CONTINUE
                                    </button>
                                </div>
                            </form>
                            <div class="col-6">
                                <img src="/images/parking-space-owners.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
