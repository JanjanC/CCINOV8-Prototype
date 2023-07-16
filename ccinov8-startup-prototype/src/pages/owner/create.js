import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImagePreview);
import ScheduleSelector from 'react-schedule-selector';
import Link from 'next/link';

const ParkingCreate = () => {
    // const [schedule, setSchedule] = useState([]);
    // const handleChange = (newSchedule) => {
    //     this.setState({ schedule: newSchedule });
    // };
    // https://github.com/bibekg/react-schedule-selector
    // const router = useRouter();

    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState('');

    return (
        <>
            <div className="mt-5">
                {/* <ScheduleSelector
                    selection={schedule}
                    numDays={5}
                    minTime={8}
                    maxTime={22}
                    hourlyChunks={2}
                    onChange={setSchedule}
                /> */}
            </div>
            <div class="container h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="rounded-box p-4">
                        <h2 class="text-center py-4">PARKING SPACE INFORMATION</h2>
                        <div class="row">
                            <form class="col-6 my-auto">
                                {/* <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="count">
                                        No. of Parking Spaces:
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="number"
                                        placeholder="Number of Parking Spaces"
                                        value={parkingSpaceCount}
                                        required="required"
                                        onChange={(e) => setParkingSpaceCount(e.target.value)}
                                    />
                                </div> */}

                                {/* <div class="form-group d-flex flex-row align-items-center">
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
                                </div> */}

                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="location">
                                        Complete Address:
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="location"
                                        placeholder="Complete Address"
                                        value={location}
                                        required="required"
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>

                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="description">
                                        Description:
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="description"
                                        placeholder="Description"
                                        value={description}
                                        required="required"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5">Available Dates:</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="sudayCheck" value="sunday" />
                                        <label className="form-check-label" for="sudayCheck">
                                            Su
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="mondayCheck"
                                            value="monday"
                                        />
                                        <label className="form-check-label" for="mondayCheck">
                                            Mo
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="tuesdayCheck"
                                            value="tuesday"
                                        />
                                        <label className="form-check-label" for="tuesdayCheck">
                                            Tu
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="wednesdayCheck"
                                            value="wednesday"
                                        />
                                        <label className="form-check-label" for="wednesdayCheck">
                                            We
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="thursdayCheck"
                                            value="thursday"
                                        />
                                        <label className="form-check-label" for="thursdayCheck">
                                            Th
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="fridayCheck"
                                            value="friday"
                                        />
                                        <label className="form-check-label" for="fridayCheck">
                                            Fr
                                        </label>
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="saturdayCheck"
                                            value="saturday"
                                        />
                                        <label className="form-check-label" for="saturdayCheck">
                                            Sa
                                        </label>
                                    </div>
                                </div>

                                {/* <div class="form-group d-flex flex-row align-items-center">
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
                                </div> */}

                                <div class="form-group d-flex flex-row align-items-center">
                                    <label class="control-label col-5" for="price">
                                        Price per Hour<span class="text-danger">*</span>:{' '}
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="price"
                                        placeholder="Price per Hour (in Php)"
                                        value={rate}
                                        required="required"
                                        onChange={(e) => setRate(e.target.value)}
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
                            <div class="col-6 mx-auto my-auto">
                                {/* <img src="/images/parking-space-owners.png" /> */}
                                {/* <div className="d-block w-100"> */}
                                <FilePond
                                    allowMultiple={false}
                                    credits={('', '')}
                                    // other FilePond options and configurations can be added here
                                />
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParkingCreate;
