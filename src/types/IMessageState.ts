import {IMessage} from "./IMessage";

export interface IMessageState {
    messages: IMessage[];
    messagesFilter: IMessage[];
    activeMessage: IMessage | undefined;
}
