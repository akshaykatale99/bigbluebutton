import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';
import Meetings from '/imports/api/meetings';
import Users from '/imports/api/users';
import Auth from '/imports/ui/services/auth';
import getFromUserSettings from '/imports/ui/services/users-settings';
import userListService from '../../user-list/service';
import NoteService from '/imports/ui/components/note/service';
import UserToggle from './component';

const PUBLIC_CONFIG = Meteor.settings.public;
const ROLE_MODERATOR = PUBLIC_CONFIG.user.role_moderator;
const UserToggleContainer = ({ children, ...props }) => (
  <UserToggle {...props}>
    {children}
  </UserToggle>
);


export default withTracker(() => {
  const checkUnreadMessages = () => {
    const activeChats = userListService.getActiveChats();
    const hasUnreadMessages = activeChats
      .filter(chat => chat.userId !== Session.get('idChatOpen'))
      .some(chat => chat.unreadCounter > 0);
    return hasUnreadMessages;
  };

  	const checkUnReadCount = () => {
  		const activeChatsc = userListService.getActiveChats();
	    const hasUnreadcount = activeChatsc
	      .filter(chat => chat.userId !== Session.get('idChatOpen'));
	    let count = 0;
	    hasUnreadcount.forEach((ch) => {
	    	count += ch.unreadCounter;
	    });
	    return count;
  	};

  const openPanel = Session.get('openPanel');
  const isExpanded = openPanel !== '';
  const hasUnreadMessages = checkUnreadMessages();
  const hasUnreadcount = checkUnReadCount();

  return {
    isExpanded,
    hasUnreadMessages,
    hasUnreadcount,
  };
})(UserToggleContainer);
