import React from "react";
import "./MessageDetails.scss";
import { Box, Button, Avatar } from "@material-ui/core";
import IRootState from "../../types/IRootState";
import { connect } from "react-redux";
import { IMessage } from "../../types/IMessage";
import messageMarkRead from "../../state/actions/messageMarkRead";
import messageMarkUnread from "../../state/actions/messageMarkUnread";
import messageArchive from "../../state/actions/messageArchive";
import exampleAvatar from "../../storage/images/person1.png";

interface IStateProps {
  message: IMessage | undefined;
}

interface IActionProps {
  markRead: Function;
  markUnread: Function;
  archiveMessage: Function;
}

export interface Props extends IStateProps, IActionProps {}

export const MessageDetails: React.FC<Props> = (props: Props) => {
  const { message } = props;
  React.useEffect(() => {
    if (message && !message.isRead) {
      props.markRead(message);
    }
  });

  const markAsUnread = () => {
    props.markUnread(message);
  };

  const archiveMessage = () => {
    props.archiveMessage(message);
  };

  if (!message) {
    return (
      <Box
        bgcolor="warning.main"
        p={2}
        className="MessageDetails__noMessageSelected"
      >
        <i>Please select a message</i>
      </Box>
    );
  }

  return (
    <Box className="MessageDetails" p={2}>
      {props.message && (
        <>
          <Box display="flex" alignItems="center">
            <Box mr={1}>
              <Avatar alt={message.sender} src={exampleAvatar}/>
            </Box>
            <strong>{message.sender}</strong>
          </Box>
          <Box p={1}>
            <strong className="MessageDetails__subject">
              {message.subject}
            </strong>{" "}
            <span className="MessageDetails__received">
              ({message.received})
            </span>
          </Box>
          <Box p={1} className="MessageDetails__message">
            {message.message}
          </Box>
          <Box p={1}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={markAsUnread}
              className="MessageDetails__unreadButton"
            >
              Mark as unread
            </Button>{" "}
            &nbsp;
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={archiveMessage}
              className="MessageDetails__archiveButton"
            >
              Archive
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
    message: state.messages.activeMessage,
  };
};

const mapDispatchToProps = (dispatch: any): IActionProps => ({
  markRead: (message: IMessage) => dispatch(messageMarkRead(message.id)),
  markUnread: (message: IMessage) => dispatch(messageMarkUnread(message.id)),
  archiveMessage: (message: IMessage) => dispatch(messageArchive(message.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageDetails);
