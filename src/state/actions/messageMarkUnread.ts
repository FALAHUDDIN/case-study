import {actionIds, BaseAction} from "../common";

const messageMarkUnread: (id: number) =>
BaseAction = (id) => ({
    type: actionIds.MESSAGE_MARK_UNREAD,
    payload: {
        id
    },
});

export default messageMarkUnread;