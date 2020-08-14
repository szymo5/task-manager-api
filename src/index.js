const express = require('express');
require('./db/mongoose');
const userRouter = require ('./routers/user');
const taskRouter = require ('./routers/task');

const app = express();
const port = process.env.PORT;

// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         // if(!file.originalname.endsWith('.pdf')){
//         //     return cb(new Error('Please upload a PDF'));
//         // }

//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document'));
//         }

//         cb(undefined, true);

//         // cb(new Error('File must be a PDF'));
//         // cb(undefined, true);
//         // cb(undefined, false);
//     }
// });

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
// });

// app.use((req, res, next) => {
//    if (req.method === 'GET'){
//         res.send('GET request are disable');
//    } else {
//        next();
//    }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!');
// })



app.use(express.json());

app.use(userRouter);
app.use(taskRouter);




app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})

// const bcrypt = require('bcryptjs');

// const myFunction = async () => {
//     const password = 'Red1234';
//     const hashedPassword = await bcrypt.hash(password, 8);

//     console.log(password);
//     console.log(hashedPassword);

//     const isMatch = await bcrypt.compare('Reed1234', hashedPassword);

//     console.log(isMatch);
// }

//myFunction();


// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days'});
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse');
//     console.log(data);
// }

// myFunction();

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     return {};
// }

// console.log(JSON.stringify(pet));

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5f2874b00ea9b1256ce7d3d5');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById('5f2872d9101b3c1a342dd2db');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);

// }

// main();

