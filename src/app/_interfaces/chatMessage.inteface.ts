// export interface ChatMessage{
//     name: String,
//     imageSrc: String,
//     content: String
// }
export interface ChatRequest{
    _id: string,
    message: string
}

export interface ChatList{
    role: string,
    message: string,
}

export interface ThreadList  {
    _id: string,
    name_thread: string
}