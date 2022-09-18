// express module 호출
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('../src/db/config');

// http:localhost:3000/ 으로 접속 시 응답메세지 출력
app.get('/', (req, res) => {
    //res.send('Server Response Success');
    db.query('SELECT * FROM USER', (err, data) => {
        if(!err){
            res.send(data);
        }else{
            res.send(err);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`);
})