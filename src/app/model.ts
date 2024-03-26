
export interface ITask {
    id?: string,
    executor: string,
    title: string,
    text: string,
    didline: string,
    priority: string,
    status: string,
}

export interface User {
    name: string,
    id: string,
    password: string,
    email: string,
    isRole: string
}



