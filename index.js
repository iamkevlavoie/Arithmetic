const express = require('express');
const res = require('express/lib/response');
const app = express();
const arithmetic = require('./arithmeticFunctions');

const numbers = [
    {value_1:101, value_2:100, total: 'add'},
    {value_1:102, value_2:100, total: 'sub'},
    {value_1:108, value_2:100, total: 'mul'},
    {value_1:121, value_2:100, total: 'div'},
];



app.use(express.urlencoded({extended: false}));

app.get('/numbers', (req,res)=>{
    res.send(numbers)
});



app.post('/numbers/operation', (req, res)=>{
    const number = {
                value_1: req.body.value_1,
                value_2: req.body.value_2,
                operation: req.body.operation
                
            };

            let value1 = parseInt(req.body.value_1)
            let value2 = parseInt(req.body.value_2)
            let operation = number.operation

            if(operation === "add"){
                // return arithmetic.add(value1,value2 );
                let totaladd = arithmetic.add(value1,value2 );
                console.log(totaladd)
            }
            else if(operation === "sub"){
                let totalsub = arithmetic.sub(value1,value2 );
                console.log(totalsub)
            }
            else if(operation === "mul"){
                let totalmul = arithmetic.mul(value1,value2)
                console.log(totalmul)
            }
            else if(operation === "div"){
                let totaldiv = arithmetic.div(value1,value2)
                console.log(totaldiv)
            }
            else{
                console.log("Use the proper operation")
            }

            
            numbers.push(number);
            res.status(200).send(number);
            
        });

        app.listen(3000, function(){
            console.log('Server is On!')
        });
//complete