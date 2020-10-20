import {actionIds, BaseAction} from "../common";

const messageFilter: (data: object) =>
    BaseAction = (data) => ({
    type: actionIds.MESSAGE_FILTER,
    payload: {
        data
    },
});

export default messageFilter;