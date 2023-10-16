import express from 'express';
import cors from 'cors';
// routes 
import home from '../routes/home';
import user from '../routes/user';

const app = express();

app.use(cors());

app.use('/', home);
app.use('/user', user);

app.listen(3000, function(){
    console.log('Server running...');
});