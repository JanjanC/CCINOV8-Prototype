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
                    query: 'INSERT INTO registration (user_id, ip_address, name, birthdate, email, contact, type) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    values: [
                        UUID,
                        ipAddress,
                        req.body.name,
                        req.body.birthdate,
                        req.body.email,
                        req.body.contact,
                        req.body.type,
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
