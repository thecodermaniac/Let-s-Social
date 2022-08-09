import jwt from 'jsonwebtoken'

const secret = 'Ari69';

const authmiddelware = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(req.headers.authorization);
    if (!token) {
        res.status(401).send({ error: "Please give right token" })
    }
    try {
        const data = jwt.verify(token, secret)
        console.log(req.user)
        req.userId = data.user.id

        console.log(data.user.id)
        next()
    } catch (error) {
        res.send(401).send({ error: "Please give right token" })
    }
}

export default authmiddelware