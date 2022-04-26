const express = require('express');
//const connectDB = require('./DB/Connection');
const app = express();


//connectDB();
//app.use(express.json({extended:false}));
//app.use('/api/userModel',require('./Api/User'));
const Port = process.env.Port || 3000;

/*
app.get('/', (req, res) => {
    res.send('Hola mundo!!!')
})
*/
app.use('/',require('./routes'));

app.listen(Port, () => console.log(`Server started en el puerto ${Port}`));