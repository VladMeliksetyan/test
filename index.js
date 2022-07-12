import {create_UUID} from '/home/vladimir/Desktop/CRUD/script.js';
import express from 'express';
import {users} from '/home/vladimir/Desktop/CRUD/users.js';
const app = express();
const PORT = 5001;


app.use(express.json());


app.listen(PORT,() => console.log(`App is running on http//:localhost:${PORT}`));


app.get('/users',(req,res) => {
    res.status(200);
    res.send(users)
});


app.get( '/users/get/:id',(req,res) => {
    let user = users.find(element => req.params.id == element.id);
    if(user){
        res.status(200);
        res.send(user);
    }else{
        res.status(404);
        res.send('user not found!');
    }
});


app.post('/users/post',(req,res) => {
   res.status(200);
   let userId = create_UUID();
   res.send("created user");
     req.body.id = userId;
    users.push(req.body);
    
});


app.delete('/users/delete/:id',(req,res) => {
    let user = users.findIndex(element => req.params.id == element.id);
    if(user){   
        users.splice(user, 1);
        res.send("user deleted!")  
    }else {
      res.status(404)
      res.send('user not found!')
    }
});