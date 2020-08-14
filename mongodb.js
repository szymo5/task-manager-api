// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName ='task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);
//console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
       return console.log('Unable to connect ro database!')
    }

    const db = client.db(databaseName);

    // CREATE

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to inser user');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jan',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks');
    //     }

    //     console.log(result.ops);
    // })

    // RAED

    // db.collection('users').findOne({ _id: new ObjectID('5f11bdff4d6f9726143f1033') }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count);
    // });

    // db.collection('tasks').findOne({ _id: new ObjectID('5f119799f037fc21d8aa9bf6') }, (error, task) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // })

    // UPDATE

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5f11949685de7c15a0163115')
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5f11949685de7c15a0163115')
    // }, {
    //     $inc: {
    //          age: 1
    //     }
    // })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // })
    //     .then((result) => {
    //         console.log(result.modifiedCount);
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    // DELETE

    // db.collection('users').deleteMany({
    //     age: 27
    // })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })

})