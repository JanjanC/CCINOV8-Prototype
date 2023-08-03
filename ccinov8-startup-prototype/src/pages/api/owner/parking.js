import multer from 'multer';
import fs from 'fs';
import executeQuery from '../../../lib/db';

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            try {
                const result = await executeQuery({
                    query: 'SELECT * FROM parking',
                });
                return res.status(200).json(result);
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
            break;

        case 'POST':
            console.log(req.body);
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

        // const upload = multer({ dest: '/path/to/your/uploaded/files' }).single('image');

        // upload(req, res, async function (err) {
        //     const { location, description, rate } = req.body;
        //     const image = req.file ? req.file.path : null;
        //     console.log(location, description, rate, image);
        // });

        // console.log(req);
        // upload.single('file')(req, res, async (err) => {
        //     if (err) {
        //         console.error('Error uploading image:', err);
        //         return res.status(500).json({ error: 'Failed to upload image' });
        //     }
        //     console.log(req);
        //     const file = req.file;
        //     const imageData = Buffer.from(file.buffer).toString('base64');

        //     // Save the image data to the MySQL database
        //     try {
        //         const result = await executeQuery({
        //             query: 'INSERT INTO parking (image)',
        //             values: [imageData],
        //         });
        //         console.log(result);

        //         console.log('Image saved to the database');
        //         res.status(200).json({ success: true });
        //     } catch (error) {
        //         console.error('Error saving image to the database:', error);
        //         res.status(500).json({ error: 'Failed to save image' });
        //     }

        //     // Delete the temporary file from the server after saving to the database
        //     // fs.unlinkSync(path);
        // });
        // break;
    }
};
