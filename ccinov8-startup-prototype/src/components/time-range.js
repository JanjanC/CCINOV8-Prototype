import React, { useState } from 'react';

const TimeRange = (props) => {
    const [isTimeRangeEnabled, setIsTimeRangeEnabled] = useState(false);

    const clearInput = (e) => {
        setIsTimeRangeEnabled(e.target.checked);
        if (!e.target.checked) {
            props.setTimeStart('');
            props.setTimeEnd('');
        }
    };

    return (
        <>
            <div className="form-group d-flex flex-row align-items-center">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" checked={isTimeRangeEnabled} onChange={clearInput} />
                </div>
                <label className="form-check-label">
                    <span className="mx-1">{props.day}</span>
                </label>
                <input
                    type="time"
                    className="form-control"
                    name="time_start"
                    value={props.timeStart}
                    onChange={(e) => props.setTimeStart(e.target.value)}
                    disabled={!isTimeRangeEnabled}
                />
                <span className="mx-1">to</span>
                <input
                    type="time"
                    className="form-control"
                    name="time_end"
                    value={props.timeEnd}
                    onChange={(e) => props.setTimeEnd(e.target.value)}
                    disabled={!isTimeRangeEnabled}
                />
            </div>
        </>
    );
};

export default TimeRange;
