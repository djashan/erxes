import { connect } from 'react-redux';
import { changeRoute, changeConversation } from '../actions/messenger';
import { Conversation } from '../components';


const mapDisptachToProps = dispatch => ({
  goToConversationList(e) {
    e.preventDefault();

    // reset current conversation
    dispatch(changeConversation(''));

    dispatch(changeRoute('conversationList'));
  },
});

export default connect(null, mapDisptachToProps)(Conversation) ;
