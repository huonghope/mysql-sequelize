const sequelize = require('sequelize');

const db = new sequelize({
    database: 'mypass',
    username: 'root',
    password: 'huong',
    host:'localhost',
    port:3306,
    dialect:'mysql',
    dialectOption: {
        sll: false
    },
    define: {
        freezeTableName: true
    }
})

db.authenticate()
.then(() => {
    console.log("connection sucess")
})
.catch(err => {
    console.log(err)
})

//Create module
const user = db.define('user',{
    username: sequelize.STRING,
    password: sequelize.STRING
})

//Add module to db
db.sync()

//Insert data single object
// user.create({
//     username: "test2",
//     password: "testpwd"
// }).then(user  => {
//     // console.log(user.get({plain : true}))
// })

//Insert multiple object
//user.bulkCreate([{...}, {...}])

user.destroy({
    where : {
        id: 4 //destroy single
    }
})
.then(row => console.log(row))

//update object, condition
user.update({
    password: "11"
},{
    where : {
        id : 4
    }
})
.then(row => console.log(row))

//query - default first element
user.findOne({raw: true})
.then(user => console.log(user))

//find multiple
user.findAll({raw : true})
.then(arruser => arruser.forEach(user => {
    // console.log(user)   
}))

//find with condition
user.findByPk(3, {raw: true})
.then(user => console.log(user))