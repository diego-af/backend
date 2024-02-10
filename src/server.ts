import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.get('/users', (req: Request, res: Response) => {
	res.json({
		message: 'ola'
	});
});

app.listen(3333, () => {
	console.log('listening on port 3000');
});
