import express from 'express';

// routes 
import home from '../routes/home';
import cadastrar from '../routes/cadastrar';

const app = express();

app.use('/', home);
app.use('/', cadastrar);

app.listen(3000, function(){
    console.log('Server running...');
});