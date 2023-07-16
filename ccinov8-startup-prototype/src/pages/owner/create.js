import { useState } from 'react';
import ScheduleSelector from 'react-schedule-selector';

const ParkingCreate = () => {
    const [schedule, setSchedule] = useState([]);
    // const handleChange = (newSchedule) => {
    //     this.setState({ schedule: newSchedule });
    // };
    // https://github.com/bibekg/react-schedule-selector
    return (
        <>
            <ScheduleSelector
                selection={schedule}
                numDays={5}
                minTime={8}
                maxTime={22}
                hourlyChunks={2}
                onChange={setSchedule}
            />
        </>
    );
};

export default ParkingCreate;
