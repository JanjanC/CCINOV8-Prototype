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
            <div class="form-group d-flex flex-row align-items-center">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" checked={isTimeRangeEnabled} onChange={clearInput} />
                </div>
                <label className="form-check-label">
                    <span class="mx-1">{props.day}</span>
                </label>
                <input
                    type="time"
                    class="form-control"
                    name="time_start"
                    value={props.timeStart}
                    onChange={(e) => props.setTimeStart(e.target.value)}
                    disabled={!isTimeRangeEnabled}
                />
                <span class="mx-1">to</span>
                <input
                    type="time"
                    class="form-control"
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
