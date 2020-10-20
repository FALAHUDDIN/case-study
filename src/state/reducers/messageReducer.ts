import { IMessageState } from "../../types/IMessageState";
import { actionIds, BaseAction } from "../common";

const defaultState: IMessageState = {
  messages: [],
  messagesFilter: [],
  activeMessage: undefined,
};

const messageReducer = (
  state: IMessageState = defaultState,
  action: BaseAction
): IMessageState => {
  switch (action.type) {
    case actionIds.MESSAGES_LOADED:
      return {
        ...state,
        messages: action.payload,
      };
    case actionIds.MESSAGE_SELECTED:
      return {
        ...state,
        activeMessage: state.messages.find(
          (message) => message.id === action.payload.id
        ),
      };
    case actionIds.MESSAGE_MARK_READ:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.payload.id) {
            message.isRead = true;
          }

          return message;
        }),
      };
    case actionIds.MESSAGE_MARK_UNREAD:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.payload.id) {
            message.isRead = false;
          }

          return message;
        }),
      };
    case actionIds.MESSAGE_ARCHIVE:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.payload.id) {
            message.isArchived = true;
          }

          return message;
        }),
      };
    case actionIds.MESSAGE_FILTER:
      return {
        ...state,
        messagesFilter: action.payload.data,
      };
    default:
      return state;
  }
};

export default messageReducer;
