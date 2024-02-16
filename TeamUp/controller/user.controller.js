import User from "../model/user.model.js";
import { validationResult } from "express-validator";

export const signUp = (request, response, next) => {
    let error = validationResult(request);
    if (!error.isEmpty())
        return response.status(401).json({ Error: error.array() });

    User.create({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        password: request.body.password,
        age: request.body.age,
        height: request.body.height,
        address: request.body.address,
        gender: request.body.gender,
        no_of_matches: request.body.no_of_matches,
        image: request.body.image,
        description: request.body.description,
        is_active: request.body.is_active,
        category_id: request.body.category_id
    })
        .then(result => {
            return response.status(200).json({ data: result.dataValues, message: "SignUp Success" });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ err: "Internal server error" });
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
        return response.status(401).json({ error: "Unauthorized " });
    }
    else {
        return response.status(401).json({ error: "ram" });
    }
}

export const viewAllUser = (request, response, next) => {

    User.findAll({ raw: true })
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "User List", data: ({ result }) })
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" });
        })
}

export const UpdateUser = (request, response) => {

    User.update(request.body,
        { where: { user_id: request.body.user_id } })
        .then((result) => {
            console.log(result);
            return response.status(200).json({ Message: "User Update Success...", Data: result[0] })
        })
        .catch((err) => {
            console.log(err);
            return response.status(500).json({ Error: "Internal Server Error..." })
        })
}

export const removeUser = (request, response, next) => {
    let user_id = request.body.user_id;

    User.destroy({ where: { user_id }, raw: true })
        .then(result => {
            return response.status(200).json({ message: "User Remove success" })
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error" });
        })
}