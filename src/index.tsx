import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./app/store";
import express from 'express';


// const express = require('express')
const nodemailer = require('nodemailer')

const app = express();


let transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: 'v.paskanov@gmail.com', // generated ethereal user
        pass: '', // generated ethereal password
    },
});

// app.get('/', (req, res)=> {
//     res.send('hello world')
// })

app.get('/sendMessage', async (req: any,res: any)=> {
    let info = await transporter.sendMail({
        from: "Pask Message",
        to: "v.paskanov@gmail.com",
        subject: 'Testing gmail',
        //text: "Hello, bro!",
        html: 'Hello, bro!'
    })
    res.send('yoyoyo')
})

app.listen(3010,()=> {
    console.log('3010 port')
})




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
