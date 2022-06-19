const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
const users = [
    { id: 1, name: "Raian", job: "Student" },
    { id: 2, name: "Orpi", job: "Scientist" },
    { id: 3, name: "Twin", job: "CEO" },
    { id: 4, name: "Musab", job: "Footballer" },
    { id: 5, name: "Adrita", job: "Doctor" }
]
app.get('/', (req, res) => {
    res.send('Look man!')
});
app.get('/users', (req, res) => {
    //console.log('query', req.query)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

});
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(users[id])
});
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log("listen to port", port)
})