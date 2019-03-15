import React, {Component} from 'react';
import {Text, View, Animated, Easing} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Button, Overlay, Input, Tile, ButtonGroup, SocialIcon, Divider } from 'react-native-elements';

export default class ButtonSignUp extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
		    rotate: new Animated.Value(0),
		    selectedIndex: this.props.selectedIndex
		}
	}

	componentWillReceiveProps(nextProp){
		let selectedIndex = nextProp.selectedIndex;
		this.setState({selectedIndex});
	}

	componentDidMount() {
	    const ani1 = Animated.timing(                 
	      	this.state.rotate,            
	      	{
	        	toValue: 1,                   
	        	duration: 500,
	        	// easing: Easing.bounce
	      	}
	    );
	    const ani2 = Animated.timing(                 
	      	this.state.rotate,            
	      	{
	        	toValue: 0,                   
	        	duration: 500,
	        	// easing: Easing.bounce
	      	}
	    );
	    const ani3 = Animated.sequence([ani1,ani2]);
	    Animated.loop(ani3).start();           
	}

	render() {
	    const rotate = this.state.rotate.interpolate({
	    	inputRange:[0,1],
	    	outputRange:[-5,0]
	    })

	    return (
	    	<Button
	    		onPress={() => this.props.update()}
	    		buttonStyle={{marginTop:10, marginBottom: 6, width: '123%', marginLeft: -27, display: this.state.selectedIndex == 1 ? 'flex' : 'none'}}
	    		title="Sign Up"
	    		icon={
	    			<Animated.View style={{paddingLeft: 3, transform: [{ 
	    																// rotateZ: rotate,
	    																translateX: rotate
	    															  }]
    									}}>
					    <IconEntypo
					      	name="login"
					      	size={15}
					      	color="white"
					      	style={{marginRight: 4, marginTop: 4}}
					    />
				    </Animated.View>
	    		}
	    	>
		    </Button>
	    );
	}
}