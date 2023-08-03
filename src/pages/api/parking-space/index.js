import executeQuery from '../../../lib/db';
import requestIp from 'request-ip';
import { randomUUID } from 'crypto';

export default async (req, res) => {
    switch (req.method) {
        case 'POST':
            try {
                const UUID = randomUUID();
                const ipAddress = requestIp.getClientIp(req);
                const result = await executeQuery({
                    query: 'INSERT INTO parking_info (user_id, ip_address, number, type, location, time_start, time_end, price)',
                    values: [
                        UUID,
                        ipAddress,
                        req.body.number,
                        req.body.type,
                        req.body.location,
                        req.body.time_start,
                        req.body.time_end,
                        req.body.price,
                    ],
                });

                if (result.affectedRows) {
                    res.status(201).json({ message: 'Insert Successful' });
                } else {
                    throw Error('Insert Failed');
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            break;
    }
};
