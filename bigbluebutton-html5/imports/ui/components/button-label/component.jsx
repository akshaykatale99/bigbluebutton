import React, { PureComponent } from 'react';
import { styles } from './styles';

class ButtonLabel extends PureComponent {
	render() {
	  	const {
		label
	    } = this.props;

	   return(
	   	<h4>{label}</h4>
	   	)
	}
}

export default ButtonLabel;