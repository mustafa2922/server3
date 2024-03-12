import express from 'express';
import cors from 'cors';

const PORT = 8000;
const validKey = '1q2w3e4r5t';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    const { key } = req.body;
    
    if (!key) {
        return res.status(400).send({ error: 'Key is required' });
    }

    if (key === validKey) {
        return res.status(200).send({ link: 'https://winbuzz.in/signup?tag=DIGITAL' });
    } else {
        return res.status(401).send({ error: 'Invalid key' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});