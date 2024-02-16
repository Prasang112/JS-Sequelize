import Admin from "../model/admin.model.js";
import { validationResult } from "express-validator";
import User from "../model/user.model.js";


export const signUp = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ Error: errors.array() });

    Admin.create({
        email: request.body.email,
        password: request.body.password
    }).then(result => {
        return response.status(200).json({ data: result.dataValues, message: "SignUp success" });
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: "Internal Server error" });
    })
}

export const signIn = async (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;

    let admin = await Admin.findOne({ where: { email }, raw: true });
    console.log(admin);

    if (admin) {
        if (Admin.checkPassword(password, admin.password))
            return response.status(200).json({ message: "SignIn success" });
        return response.status(401).json({ error: "Unauthorized admin" });
    }
    else {
        return response.status(401).json({ error: "Unauthorized Admin" })
    }

}

