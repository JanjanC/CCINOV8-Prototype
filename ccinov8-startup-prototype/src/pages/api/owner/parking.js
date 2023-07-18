import multer from 'multer';
import fs from 'fs';
import executeQuery from '../../../lib/db';

const upload = multer({ dest: 'uploads/' });

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
            console.log(req);
            upload.single('image')(req, res, async (err) => {
                if (err) {
                    console.error('Error uploading image:', err);
                    return res.status(500).json({ error: 'Failed to upload image' });
                }
                console.log(req);
                const { path } = req.image;
                const image = fs.readFileSync(path);
                const imageData = Buffer.from(image).toString('base64');

                // Save the image data to the MySQL database
                try {
                    const result = await executeQuery({
                        query: 'INSERT INTO parking (image)',
                        values: [imageData],
                    });
                    console.log(result);

                    console.log('Image saved to the database');
                    res.status(200).json({ success: true });
                } catch (error) {
                    console.error('Error saving image to the database:', error);
                    res.status(500).json({ error: 'Failed to save image' });
                }

                // Delete the temporary file from the server after saving to the database
                // fs.unlinkSync(path);
            });
            break;
    }
};
