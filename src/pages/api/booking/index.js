import multer from 'multer';
import fs from 'fs';
import executeQuery from '../../../lib/db';

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const result = await executeQuery({
                    query: 'SELECT * FROM booking',
                });
                console.log(result);
                return res.status(200).json(result);
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
            break;
    }
};
