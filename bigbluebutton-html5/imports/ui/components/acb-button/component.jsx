import React, { PureComponent } from 'react';
import cx from 'classnames';
import { styles } from './styles';

class ButtonAcb extends PureComponent {
  render() {
	  	const {
      label,
      className,
      icon,
      disabled,
      isActive,
      onClick,
      dataAfter,
      isNotice,
	    } = this.props;

	    const acbtn = {};
    acbtn[styles.acbButton] = true;
    acbtn[styles.active] = isActive;
    acbtn[styles.btnWithNotificationDot] = isNotice;

	   return (
  <button
    className={cx(acbtn)}
    disabled={disabled}
    onClick={onClick}
    data-after={dataAfter}
  >
    <i className={`icon-bbb-${icon}`} />
    <span>{label}</span>
  </button>
	   	);
  }
}

export default ButtonAcb;
