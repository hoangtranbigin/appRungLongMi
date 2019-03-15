import React, {Component} from 'react';
import AnimateButton from './AnimateButton';

export default class ButtonNext extends Component {
	render(){
		return(
		    <AnimateButton title={'Next'} icon={'ios-arrow-forward'} onPress={() => this.props.update()} sizeIcon={15} />
		)
	}
}