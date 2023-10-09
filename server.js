/*
    ~ * ~ * ~ * 
    SERVER
    ~ * ~ * ~ * 
*/

//create server
let port = process.env.PORT || 8000;
// let express = require('express');
import express from 'express';
// const e = express;
let app = express();
import http from 'http';
let server = http.createServer(app).listen(port, function(){
  console.log('Server is listening at port: ', port);
});

//where we look for files
app.use(express.static('public'));

//
// SOCKET.IO
//

//create socket connection
import { Server } from 'socket.io';
let io = new Server(server);
// let io = require('socket.io')(server);



//clients
var inputs = io.of('/')
//listen for anyone connecting to default namespace
inputs.on('connection', (socket) => {
  console.log('new input client!: ' + socket.id);

  db.test.insert({socketID: socket.id}, function (err, newDoc){
    if (err) {
      console.log("client connect db err: " + err);
    } else {
      console.log("client connect insert: " + newDoc);
    }
  });

  //listen for this client to disconnect
  socket.on('disconnect', () => {
    console.log('input client disconnected: ' + socket.id);
  });

});

//
// NEDB
//

// const Datastore = require('nedb');
import Datastore from 'nedb';
let db = {};
db.test = new Datastore({filename: "public/db/test.db", autoload: true});

//
// SERVER EVENTS
//

init();

function init(){
  console.log("server init");
  db.test.find({}, function (err, docs) {
    if (err) {
      console.log("init find err: " + err);
    } else {
      console.log(docs);
    }
  });
}


//
// FUNCTIONS
//
