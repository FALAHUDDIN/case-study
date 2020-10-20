export interface IMessage {
    id: number;
    subject: string;
    avatar: string;
    sender: string;
    message: string;
    received: string;
    isRead: boolean;
    isArchived: boolean;
}