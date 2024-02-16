import { validationResult } from "express-validator";
import User from "../model/user.model.js";

export const signUp = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ Error: errors.array() });

    User.create({
        id: request.body.user_id,
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    }).then(result => {
        return response.status(200).json({ data: result.dataValues, message: "User Created" });
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    })
}

export const signIn = async (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    let user = await User.findOne({ where: { email }, raw: true });
    console.log(user);

    if (user) {
        if (User.checkPassword(password, user.password))
            return response.status(200).json({ message: "SignIn Success" });
        return response.status(401).json({ error: "Unauthorizes user" });
    }
    else {
        return response.status(401).json({ error: "Unauthorized user" })
    }
}

export const userList = (request, response, next) => {
    User.findAll({ raw: true })
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
}

export const getUserByEmail = (request, response, next) => {

    User.findOne({ where: { email: request.body.email }, raw: true })
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
}

export const ByPk = (request, response, next) => {

    User.findByPk(request.body.id, { raw: true })
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
}