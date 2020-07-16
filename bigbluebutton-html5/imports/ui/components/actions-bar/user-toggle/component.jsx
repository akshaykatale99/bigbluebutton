import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';
import cx from 'classnames';
import { withModalMounter } from '/imports/ui/components/modal/service';
import withShortcutHelper from '/imports/ui/components/shortcut-help/service';
import { defineMessages, injectIntl } from 'react-intl';
import { styles } from './styles';
import Button from '../../button/component';
import ButtonLabel from '../../button-label/component';
import ButtonAcb from '/imports/ui/components/acb-button/component';

const intlMessages = defineMessages({
  toggleUserListLabel: {
    id: 'app.navBar.userListToggleBtnLabel',
    description: 'Toggle button label',
  },
  toggleUserListAria: {
    id: 'app.navBar.toggleUserList.ariaLabel',
    description: 'description of the lists inside the userlist',
  },
  newMessages: {
    id: 'app.navBar.toggleUserList.newMessages',
    description: 'label for toggleUserList btn when showing red notification',
  },
});

const propTypes = {
  hasUnreadMessages: PropTypes.bool,
};

const defaultProps = {
  hasUnreadMessages: false,
};

class UserToggle extends PureComponent {
	static handleToggleUserList() {
    Session.set(
      'openPanel',
      Session.get('openPanel') !== ''
        ? ''
        : 'userlist',
    );
    Session.set('idChatOpen', '');
  }

  componentDidMount() {
    const {
      processOutsideToggleRecording,
      connectRecordingObserver,
    } = this.props;

    // if (Meteor.settings.public.allowOutsideCommands.toggleRecording
    //   || getFromUserSettings('bbb_outside_toggle_recording', false)) {
    //   connectRecordingObserver();
    //   window.addEventListener('message', processOutsideToggleRecording);
    // }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
  	const {
      hasUnreadMessages,
      isExpanded,
      intl,
      hasUnreadcount
    } = this.props;

    const toggleBtnClasses = {};
    toggleBtnClasses[styles.button] = true;
    toggleBtnClasses[styles.btn] = !isExpanded;
    toggleBtnClasses[styles.btnWithNotificationDot] = hasUnreadMessages;

    let ariaLabel = intl.formatMessage(intlMessages.toggleUserListAria);
    ariaLabel += hasUnreadMessages ? (` ${intl.formatMessage(intlMessages.newMessages)}`) : '';

    return(
      <div className={cx(styles.textCenter)} style={{width: "14%"}}>
    		{/*<Button
              data-test="userListToggleButton"
              onClick={UserToggle.handleToggleUserList}
              ghost={!isExpanded}
              color={isExpanded ? 'primary' : 'default'}
              hideLabel
              data-test={hasUnreadMessages ? 'hasUnreadMessages' : null}
              label={intl.formatMessage(intlMessages.toggleUserListLabel)}
              aria-label={ariaLabel}
              icon="chat"
              size="sm"
              className={cx(toggleBtnClasses)}
              aria-expanded={isExpanded}
              data-after={hasUnreadMessages ? hasUnreadcount : ""}
            />
        <ButtonLabel label="Chat" />*/}

        <ButtonAcb 
          label="Chat"
          icon="chat"
          isActive={isExpanded}
          onClick={UserToggle.handleToggleUserList}
          dataAfter={hasUnreadMessages ? hasUnreadcount : ""}
          isNotice={hasUnreadMessages}
        />
      </div>    
	);
  }
}

UserToggle.propTypes = propTypes;
UserToggle.defaultProps = defaultProps;
export default withShortcutHelper(withModalMounter(injectIntl(UserToggle)), 'toggleUserList');