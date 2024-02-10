import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
	res.send('hello world');
});

app.listen(3333, () => {
	console.log('listening on port 3000');
});
