import {IMessage} from "../types/IMessage";

export const MockMessage: IMessage = {
    id: 1,
    isRead: false,
    avatar: "person1.svg",
    sender: "Falah",
    message: "testmessage",
    received: "01/01/2020",
    subject: "testsubject",
    isArchived: false
}
export const MockMessageRead: IMessage = {
    ...MockMessage,
    isRead: true
}
export const MockMessageArchived: IMessage = {
    ...MockMessage,
    isArchived: true
}