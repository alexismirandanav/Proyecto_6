require("dotenv").config();
const cors = require('cors');
const express = require("express");

const connectDB = require("./config/db");

const userRouter = require('./routes/user.routes');
const viniloRouter = require('./routes/vinilo.routes');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

const whiteList = [
    'http:localhost:5000',
    'https:www.render.com/miapp'
];

const corsOptions = {
    origin: function(origin, callback) {
        if (!origin) return callback(null, true);

        if(whiteList.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowd by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
};
// middleware
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'ok'});
});

app.use('/api/user', userRouter);
app.use('/api/product', viniloRouter);


app.listen(PORT, ()=> {
    console.log('Servidor corriendo en el puerto ' + PORT);
})
