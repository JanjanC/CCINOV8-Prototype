import executeQuery from '../../../lib/db';
import { randomUUID } from 'crypto';

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const result = await executeQuery({
                    query: 'SELECT * FROM booking',
                });
                return res.status(200).json(result);
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
            break;

        case 'POST':
            const result = await executeQuery({
                query: 'INSERT INTO booking (parking_id, user_id, datetime_start, datetime_end, active) VALUES (?, ?, ?, ?, ?)',
                values: [req.body.parking_id, randomUUID(), req.body.datetime_start, req.body.datetime_end, req.body.active],
            });

            if (result.affectedRows) {
                res.status(201).json({ message: 'Insert Successful' });
            } else {
                throw Error('Insert Failed');
            }
    }
};
