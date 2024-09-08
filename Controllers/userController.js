import bcrypt from 'bcrypt'
import { userModel } from '../Models/model.js'
import jwt from 'jsonwebtoken'


const createUser = (req, res) => {
    try {
        const { username, email, password } = req.body
        const hashedPass = bcrypt.hashSync(password, 10, (err, next) => {
            if (err) {
                console.log(err)
            } else {
                next()
            }
        })

        userModel.create({
            username,
            email,
            password: hashedPass,
            role
        })

        res.status(201).redirect('/api/auth/login')

    } catch (error) {
        res.status(401).send("there is the problem")
        console.log(error)
    }

}



const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })
        const admin = await userModel.find({email:"admin@gmail.com"})

        if(admin){
            req.user.role = "admin"
        }

        if (user) {
            const pass = await bcrypt.compare(password, user.password)
            if (pass) {
                const token = jwt.sign({user},'nodejs-task')
                res.redirect(`/api/user/${user._id}/${token}`)
            } else {
                res.send("password is not true")
            }
        } else {
            res.send('email is not defined')
        }

    } catch (error) {
        res.status(400).send("there is the problem")
        console.log(error)
    }

}



export { createUser, loginUser }