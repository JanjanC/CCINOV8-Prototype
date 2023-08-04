import executeQuery from '../../../lib/db';

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const result = await executeQuery({
                    query: 'SELECT address, description, time_start, time_end, rate FROM parking',
                });
                return res.status(200).json(result);
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
            break;

        case 'POST':
            const result = await executeQuery({
                query: 'INSERT INTO parking (address, description, image, time_start, time_end, rate) VALUES (?, ?, ?, ?, ?, ?)',
                values: [
                    req.body.location,
                    req.body.description,
                    req.body.image,
                    req.body.start,
                    req.body.end,
                    req.body.rate,
                ],
            });

            if (result.affectedRows) {
                res.status(201).json({ message: 'Insert Successful' });
            } else {
                throw Error('Insert Failed');
            }
    }
};
