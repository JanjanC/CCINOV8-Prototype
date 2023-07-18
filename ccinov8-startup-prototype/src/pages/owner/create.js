import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import ScheduleSelector from 'react-schedule-selector';
import Link from 'next/link';
import TimeRange from '@/components/time-range';
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

    const [image, setImage] = useState(null);

    const [sundayTimeStart, setSundayTimeStart] = useState('');
    const [sundayTimeEnd, setSundayTimeEnd] = useState('');
    const [mondayTimeStart, setMondayTimeStart] = useState('');
    const [mondayTimeEnd, setMondayTimeEnd] = useState('');
    const [tuesdayTimeStart, setTuesdayTimeStart] = useState('');
    const [tuesdayTimeEnd, setTuesdayTimeEnd] = useState('');
    const [wednesdayTimeStart, setWednesdayTimeStart] = useState('');
    const [wednesdayTimeEnd, setWednesdayTimeEnd] = useState('');
    const [thursdayTimeStart, setThursdayTimeStart] = useState('');
    const [thursdayTimeEnd, setThursdayTimeEnd] = useState('');
    const [fridayTimeStart, setFridayTimeStart] = useState('');
    const [fridayTimeEnd, setFridayTimeEnd] = useState('');
    const [saturdayTimeStart, setSaturdayTimeStart] = useState('');
    const [saturdayTimeEnd, setSaturdayTimeEnd] = useState('');

    const handleUpload = (f) => {
        if (f.length == 0) return;
        setImage(f[0].file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const parking = { location, description, rate, image };
        console.log('parking', parking);
        const res = await fetch('/api/owner/parking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parking),
        });

        // if (res.ok) {
        //     router.push('/success');
        // } else {
        //     router.push('/error');
        // }
    };

    return (
        <>
            <div className="container ">
                <div className="justify-content-center align-items-center">
                    <div className="rounded-box p-4">
                        <h2 className="text-center py-4">PARKING SPACE INFORMATION</h2>

                        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="form-group d-flex flex-row align-items-center">
                                <label className="control-label col-4"> Image: </label>
                                <div className="col-8">
                                    <FilePond
                                        allowMultiple={false}
                                        required={true}
                                        name="image"
                                        onupdatefiles={handleUpload}
                                    />
                                </div>
                            </div>

                            <label className="control-label col-12">Parking Availability:</label>
                            <div className="form-group d-flex flex-row align-items-center">
                                <div className=" col-12">
                                    <TimeRange
                                        day={'Sun'}
                                        timeStart={sundayTimeStart}
                                        setTimeStart={setSundayTimeStart}
                                        timeEnd={sundayTimeEnd}
                                        setTimeEnd={setSundayTimeEnd}
                                    />
                                </div>
                            </div>
                            <div className="form-group d-flex flex-row align-items-center">
                                <div className=" col-12">
                                    <TimeRange
                                        day={'Mon'}
                                        timeStart={mondayTimeStart}
                                        setTimeStart={setMondayTimeStart}
                                        timeEnd={mondayTimeEnd}
                                        setTimeEnd={setMondayTimeEnd}
                                    />
                                </div>
                            </div>
                            <div className="form-group d-flex flex-row align-items-center">
                                <div className=" col-12">
                                    <TimeRange
                                        day={'Tue'}
                                        timeStart={tuesdayTimeStart}
                                        setTimeStart={setTuesdayTimeStart}
                                        timeEnd={tuesdayTimeEnd}
                                        setTimeEnd={setTuesdayTimeEnd}
                                    />
                                </div>
                            </div>
                            <div className="form-group d-flex flex-row align-items-center">
                                <div className=" col-12">
                                    <TimeRange
                                        day={'Wed'}
                                        timeStart={wednesdayTimeStart}
                                        setTimeStart={setWednesdayTimeStart}
                                        timeEnd={wednesdayTimeEnd}
                                        setTimeEnd={setWednesdayTimeEnd}
                                    />
                                </div>
                            </div>
                            <div className="form-group d-flex flex-row align-items-center">
                                <div className=" col-12">
                                    <TimeRange
                                        day={'Thu'}
                                        timeStart={thursdayTimeStart}
                                        setTimeStart={setThursdayTimeStart}
                                        timeEnd={thursdayTimeEnd}
                                        setTimeEnd={setThursdayTimeEnd}
                                    />
                                </div>
                            </div>
                            <div className="form-group d-flex flex-row align-items-center">
                                <div className=" col-12">
                                    <TimeRange
                                        day={'Fri'}
                                        timeStart={fridayTimeStart}
                                        setTimeStart={setFridayTimeStart}
                                        timeEnd={fridayTimeEnd}
                                        setTimeEnd={setFridayTimeEnd}
                                    />
                                </div>
                            </div>
                            <div className="form-group d-flex flex-row align-items-center">
                                <div className=" col-12">
                                    <TimeRange
                                        day={'Sat'}
                                        timeStart={saturdayTimeStart}
                                        setTimeStart={setSaturdayTimeStart}
                                        timeEnd={saturdayTimeEnd}
                                        setTimeEnd={setSaturdayTimeEnd}
                                    />
                                </div>
                            </div>

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
                                    onChange={(e) => setRate(e.target.value)}
                                />
                            </div>

                            <div className="form-group d-flex flex-row align-items-center">
                                <small className="text-danger">
                                    *your total earnings on our platform will be subject to a 3% commission
                                </small>
                            </div>

                            <div className="form-group mx-auto">
                                <button type="submit" className="btn btn-primary btn-block mb-2">
                                    CONTINUE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParkingCreate;
