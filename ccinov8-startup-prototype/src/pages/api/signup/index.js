import executeQuery from '../../../lib/db';
import requestIp from 'request-ip';

export default async (req, res) => {
    try {
        console.log('Test', req.body);
        console.log(requestIp.getClientIp(req));
        const result = await executeQuery({
            query: 'SELECT * FROM registration',
            // query: 'INSERT INTO registration (user_id, ip_address, name, birthdate, email, contact, type) VALUES (?, ?, ?, ?, ?, ?, ?)',
            // values: [
            //     UUID,
            //     req.clientIp,
            //     req.body.name,
            //     req.body.birthdate,
            //     req.body.email,
            //     req.body.contact,
            //     'Parking Owner',
            // ],
        });
        return res.json(result);
    } catch (error) {
        console.log(error);
    }
};
