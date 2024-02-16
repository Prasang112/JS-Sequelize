import Organizer from "../model/organizer.model.js";
import { validationResult } from "express-validator";

export const signUp = (request, response, next) => {
    let error = validationResult(request);
    if (!error.isEmpty())
        return response.status(401).json({ Error: error.array() });

    Organizer.create({
        Organizer_name: request.body.Organizer_name,
        email: request.body.email,
        password: request.body.password,
        mobile: request.body.mobile,
        isActive: request.body.isActive
    })
        .then(result => {
            console.log(result);
            return response.status(200).json({ message: "SignUp success" });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}

export const signIn = (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    Organizer.findOne({ where: { email }, raw: true })
        .then(result => {
            if (Organizer.checkPassword(password, Organizer.password));
            console.log(result);
            return response.status(200).json({ message: "SignIn success" });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        });
}