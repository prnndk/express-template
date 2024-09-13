import db from "../config/ConnectDb";
import { getTestRepository } from "../repository/TestRepository";

export const testService = async (data: any) => {
    return getTestRepository(data)
}