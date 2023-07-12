import { useEffect } from 'react';

const useLog = (event) => {
    useEffect(() => {
        fetch('/api/logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ event }),
        }).then((res) => {
            console.log(res);
        });
    }, []);
};

export default useLog;
