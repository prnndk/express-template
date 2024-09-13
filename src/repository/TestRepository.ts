import db from "../config/ConnectDb";

export const getUserById = async (userId: string) => {
    return db.user.findUnique({
        where: {
            id: userId
        }
    })
}

export const getTestRepository = async (data: any) => {
    return data
}