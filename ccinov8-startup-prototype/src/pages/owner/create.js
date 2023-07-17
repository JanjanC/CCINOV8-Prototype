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
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="rounded-box p-4">
                        <h2 className="text-center py-4">PARKING SPACE INFORMATION</h2>
                        <div className="row">
                            <form className="col-6 my-auto">
                                {/* <div className="form-group d-flex flex-row align-items-center">
                                    <label className="control-label col-4" htmlFor="count">
                                        No. of Parking Spaces:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="number"
                                        placeholder="Number of Parking Spaces"
                                        value={parkingSpaceCount}
                                        required="required"
                                        onChange={(e) => setParkingSpaceCount(e.target.value)}
                                    />
                                </div> */}

                                {/* <div className="form-group d-flex flex-row align-items-center">
                                    <label className="control-label col-4" htmlFor="type">
                                        Nature of Parking Spaces:
                                    </label>
                                    <select
                                        className="form-select form-control"
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

                                <div className="form-group d-flex flex-row align-items-center">
                                    <label className="control-label col-4" htmlFor="location">
                                        Complete Address:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control col-8"
                                        name="location"
                                        placeholder="Complete Address"
                                        value={location}
                                        required="required"
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>

                                <div className="form-group d-flex flex-row align-items-center">
                                    <label className="control-label col-4" htmlFor="description">
                                        Description:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control col-8"
                                        name="description"
                                        placeholder="Description"
                                        value={description}
                                        required="required"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div className="form-group d-flex flex-row align-items-center">
                                    <label className="control-label col-4">Available Dates:</label>

                                    <div className=" col-8">
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="sundayCheck"
                                                value="sunday"
                                            />
                                            <label className="form-check-label" htmlFor="sundayCheck">
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
                                            <label className="form-check-label" htmlFor="mondayCheck">
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
                                            <label className="form-check-label" htmlFor="tuesdayCheck">
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
                                            <label className="form-check-label" htmlFor="wednesdayCheck">
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
                                            <label className="form-check-label" htmlFor="thursdayCheck">
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
                                            <label className="form-check-label" htmlFor="fridayCheck">
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
                                            <label className="form-check-label" htmlFor="saturdayCheck">
                                                Sa
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="form-group d-flex flex-row align-items-center">
                                    <label className="control-label col-4" htmlFor="time">
                                        Parking Time Availability:
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="time_start"
                                        placeholder="Price per Hour (in Php)"
                                        value={parkingTimeStart}
                                        required="required"
                                        onChange={(e) => setParkingTimeStart(e.target.value)}
                                    />
                                    <span className="mx-1">to</span>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name="time_end"
                                        placeholder="Price per Hour (in Php)"
                                        value={parkingTimeEnd}
                                        required="required"
                                        onChange={(e) => setParkingTimeEnd(e.target.value)}
                                    />
                                </div> */}

                                <div className="form-group d-flex flex-row align-items-center">
                                    <label className="control-label col-4" htmlFor="price">
                                        Price per Hour<span className="text-danger">*</span>:{' '}
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        placeholder="Price per Hour (in Php)"
                                        value={rate}
                                        required="required"
                                        onChange={(e) => setRate(e.target.value)}
                                    />
                                </div>

                                {/* <div className="form-group d-flex flex-row align-items-center">
                                    <label className="control-label col-4"> Image </label>
                                    <div className="col-12">
                                        <FilePond allowMultiple={false} required={true} />
                                    </div>
                                </div> */}

                                <div className="form-group d-flex flex-row align-items-center">
                                    <small className="text-danger">
                                        *your total earnings on our platform will be subject to a 3% (TO CHANGE) commission
                                    </small>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block mb-2">
                                        CONTINUE
                                    </button>
                                </div>
                            </form>
                            <div className="col-6 mx-auto my-auto">
                                <div className="d-flex flex-row align-items-center"></div>
                                {/* <label>Image: </label> */}
                                <FilePond allowMultiple={false} required={true} />
                                {/* <img src="/images/parking-space-owners.png" /> */}
                                {/* <div className="d-block w-100"> */}
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
