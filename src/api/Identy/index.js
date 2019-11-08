import express from "express"
import identyControler from "./controler"

const authorRouter = new express.Router();

authorRouter.post("/register", identyControler.register);
authorRouter.get("/identyfy", identyControler.identyfy);
authorRouter.post("/login", identyControler.login);

export default authorRouter;