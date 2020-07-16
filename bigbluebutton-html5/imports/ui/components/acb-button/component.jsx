import React, { PureComponent } from 'react';
import { styles } from './styles';
import cx from 'classnames';

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
		isNotice
	    } = this.props;

	    const acbtn = {};
		acbtn[styles.acbButton] = true;
		acbtn[styles.active] = isActive;
		acbtn[styles.btnWithNotificationDot] = isNotice;

	   return(
	   		<button
	        className={cx(acbtn)} 
	        disabled={disabled}
	        onClick={onClick}
	        data-after={dataAfter}
      		>
	        	<i className={'icon-bbb-' + icon} />
	        	<span>{label}</span>
	      	</button>
	   	)
	}
}

export default ButtonAcb;