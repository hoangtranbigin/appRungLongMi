import React, {Component} from 'react';
import {Text, View, Animated, Easing} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { Button, Overlay, Input, Tile, ButtonGroup, SocialIcon, Divider } from 'react-native-elements';

export default class ButtonStart extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
		    rotate: new Animated.Value(0),
		}
	}
	componentDidMount() {
	    const ani1 = Animated.timing(                 
	      	this.state.rotate,            
	      	{
	        	toValue: 1,                   
	        	duration: 1000,
	        	// easing: Easing.bounce
	      	}
	    );
	    const ani2 = Animated.timing(                 
	      	this.state.rotate,            
	      	{
	        	toValue: 0,                   
	        	duration: 1000,
	        	// easing: Easing.bounce
	      	}
	    );
	    const ani3 = Animated.sequence([ani1,ani2]);
	    Animated.loop(ani3).start();               
	}

	render() {
	    const rotate = this.state.rotate.interpolate({
	    	inputRange:[0,1],
	    	outputRange:['0deg','180deg']
	    })

	    return (
	    	<Button
	    		buttonStyle={{marginTop: 0}}
	    		title="Start"
	    		containerStyle={{ width: '35%' }}
	    		iconRight
	    		onPress={() => this.props.update()}
	    		icon={
	    			<Animated.View style={{paddingLeft: 3, transform: [{ 
	    																rotateZ: rotate,
	    																// translateX: 20
	    															  }]
    									}}>
					    <IconAnt
					      	style={{paddingTop: 3, marginLeft: 5}}
					      	name="enter"
					      	size={13}
					      	color="white"
					    />
				    </Animated.View>
	    		}
	    	>
		    </Button>
	    );
	}
}