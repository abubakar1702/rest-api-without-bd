const {v4: uuidv4} = require("uuid")

const users=[
    {
        id: uuidv4(),
        username: "John Smith",
        email: "johnsmith23@gmail.com"
    },
    {
        id:uuidv4(),
        username: "Will Smith",
        email:"willsmith@gmail.com"
    },
    {
        id:uuidv4(),
        username: "Michael Jordan",
        email:"michaeljordan@gmail.com"
    }
]

module.exports = users