import express from "express";
import bodyParser from "body-parser";
import AdminRouter from "./routes/admin.route.js";
import UserRouter from "./routes/user.route.js";
import EventRouter from "./routes/event.route.js";
import OrganizerRouter from "./routes/organizer.route.js";

const team = express();
team.use(bodyParser.urlencoded({ extended: true }))
team.use(bodyParser.json());

team.use("/admin", AdminRouter);
team.use("/user", UserRouter);
team.use("/event", EventRouter);
team.use("/organizer", OrganizerRouter);

team.listen(3000, () => {
    console.log("Server Started");
})