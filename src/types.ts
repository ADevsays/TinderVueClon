interface Message{
    messageId:string,
    author:string,
    content:string,
    timeStamp:Date
}
interface Chat{
    chatId:string,
    messages: Message[]
}
interface Match{
    id:string,
    img:string,
    name:string,
    chat: Chat
}
interface Profile{
    id:string,
    name:string,
    age:number,
    description:string,
    imgs:string[],
    likes:Profile[],
    super_like?:Profile[] | [],
    matches: Match[]
}

interface CardInfo{
    name: string,
    age: number,
    description: string
}
//crypto.randomUUID