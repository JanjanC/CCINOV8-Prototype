import executeQuery from '../../../lib/db';

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const { id } = req.query;
                const result = await executeQuery({
                    query: 'SELECT * FROM parking WHERE parking_id = ?',
                    values: [id],
                });
                return res.status(200).json(result);
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
            break;
    }
};
