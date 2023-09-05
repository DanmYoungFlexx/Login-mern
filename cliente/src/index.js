import app from './app.js';
import {connectDB} from './db.js';

connectDB();

app.listen(5002, () => console.log(`Server on PORT 5002`));