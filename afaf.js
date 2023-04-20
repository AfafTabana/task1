
import express from 'express'

const app = express();

const students =[
    {
        id: 1,
        name: "afaf",
        city: "shibeen" ,
    },

    {
        id: 2 ,
        name: "nora",
        city: "tanta"
    },
    {
        id: 3 ,
        name: "fatma",
        city: "tanta",
    },
    {
        id: 4 ,
        name: "soaad",
        city: "shibeen",
    },
];
const studentsfunction = (request , response) =>{
     
    let output = '<u1>' ;

     for(let i = 0 ; i < students.length ; i++){
        const student = students[i] ;

        output += '<li>' + student.name + '</li>' ;
     }


    output += '</u1>'
    response.send(output)

};


app.get('/students' , studentsfunction )


app.listen(5000) ;

