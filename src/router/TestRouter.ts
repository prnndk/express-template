import express from "express"

import { getTestController, postTestController } from "../controller/TestController"

const testRouter = express.Router()

testRouter.get("/test", getTestController)
testRouter.post("/test", postTestController)

export default testRouter