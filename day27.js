const express=require('express')
const app=express();
const jwt = require('jsonwebtoken');
const users = [
    { id: 1, username: 'admin', password: 'adminpassword', role: 'admin' },
    { id: 2, username: 'user', password: 'userpassword', role: 'user' }
];
app.use(express.json())
const secretKey = '123456';

function authenticateToken(req, res, next) {
	console.log(req.headers.authorization);
    const token =  req.headers['authorization']
    if (token == null) return res.status(401).send('token not provided');

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).send('something is wrong ');
        next();
    });
}

function authorizeRoles(role) {
	console.log(users[0].role);
    return (req, res, next) => {
        if (!users[0].role==role) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
}

app.get('/admin', authenticateToken, authorizeRoles('admin'), (req, res) => {
    res.json({ message: 'Welcome  admin!' });
});

app.get('/user', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome  user !' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.sendStatus(401);

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, secretKey);
    res.json({ token });
});
app.use((err,req,res)=>{
	res.send('error')
})
app.listen(3000);

