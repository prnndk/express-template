import { Request, Response } from "express";
import env from "../config/LoadEnv";
import db from "../config/ConnectDb";
import { testService } from "../service/TestService";

export const getTestController = async (req: Request, res: Response) => {
    res.send("GET OK");
}

export const postTestController = async (req: Request, res: Response) => {
    const data = req.body.data

    try{
        res.send(await testService(data))
    } catch (err) {
        res.send("POST ERROR")
        console.log(err)
    }
}
