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

    const [image, setImage] = useState('');

    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const [rate, setRate] = useState('');

    const handleImage = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }

        // try {
        //     const file = e.target.files[0];
        //     const base64Image = await imageToBase64(file);
        //     setImage(base64Image);
        // } catch (error) {
        //     console.error(error);
        // }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(image);
        const parking = { location, description, image, start, end, rate };

        const res = await fetch('/api/parking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parking),
        });

        if (res.ok) {
            router.push('/owner');
        } else {
            router.push('/error');
        }
    };

    return (
        <>
            <div className="container ">
                <div className="justify-content-center align-items-center">
                    <div className="rounded-box p-4">
                        <h2 className="text-center py-4">PARKING SPACE INFORMATION</h2>

                        <form onSubmit={handleSubmit}>
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
                                {/* <div className="col-8">
                                    <FilePond
                                        allowMultiple={false}
                                        required={true}
                                        name="image"
                                        onupdatefiles={handleUpload}
                                    />
                                </div> */}
                                <input type="file" onChange={handleImage} />
                            </div>

                            <div className="form-group d-flex flex-row align-items-center">
                                <label className="control-label col-4">Parking Availability:</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="time_start"
                                    value={start}
                                    onChange={(e) => setStart(e.target.value)}
                                />
                                <span className="mx-1">to</span>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="time_end"
                                    value={end}
                                    onChange={(e) => setEnd(e.target.value)}
                                />
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
