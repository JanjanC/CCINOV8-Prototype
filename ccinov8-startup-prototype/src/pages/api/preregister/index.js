import executeQuery from '../../../lib/db';
import requestIp from 'request-ip';
import { randomUUID } from 'crypto';

export default async (req, res) => {
    try {
        const UUID = randomUUID();
        const ipAddress = requestIp.getClientIp(req);
        const user = JSON.parse(req.body);
        const result = await executeQuery({
            query: 'INSERT INTO registration (user_id, ip_address, name, birthdate, email, contact, type) VALUES (?, ?, ?, ?, ?, ?, ?)',
            values: [UUID, ipAddress, user.name, user.birthdate, user.email, user.contact, user.type],
        });
        res.status(201).json(result);
        return res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
