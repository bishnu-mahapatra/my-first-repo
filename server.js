import express from 'express';
import bodyParser from 'body-parser'

//module to import database users
import userRoutes from './routes/users.js'
const app = express();

const PORT = 5000

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})
//make all users available at the route path
app.use('/users',userRoutes);

app.listen(PORT, () =>{
     console.log(`Server running on port: http://localhost:${PORT}`)
    });