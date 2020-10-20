import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './MessageSearch.scss';
import {Box} from "@material-ui/core";
import IRootState from "../../types/IRootState";
import {IMessage} from "../../types/IMessage";
import messageFilter from "../../state/actions/messageFilter";


interface IStateProps {
    messages: IMessage[],
}

interface IActionProps {
  filterMessage: Function;
}

export interface Props extends IStateProps, IActionProps {}

export const MessageSearch: React.FC<Props> = (props: Props) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (filter) {
      const found = props.messages.filter( x => {
        return x.subject.toLowerCase().includes(filter.toLowerCase()) || x.message.toLowerCase().includes(filter.toLowerCase())
      })
      props.filterMessage(found)
      } else props.filterMessage('')
  })

  return (
    <Box className="MessageSearch" p={1}>
      <input placeholder="Search" className="IptSearch" value={filter} onChange={e => setFilter(e.target.value)}/>
    </Box>
  );
};

const mapStateToProps = (state: IRootState): IStateProps => {
  return {
      messages: state.messages.messages,
  };
};

const mapDispatchToProps = (dispatch: any): IActionProps => ({
  filterMessage: (message: object) => dispatch(messageFilter(message)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MessageSearch);
