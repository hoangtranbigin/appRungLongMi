import React, {Component} from 'react';
import {Text, View, Animated, Easing} from 'react-native';
import { Button, Overlay, Input, Tile, ButtonGroup, SocialIcon, Divider } from 'react-native-elements';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';

export default class User extends Component{
	render(){
		return(
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		        <FadeInView title={'haha'} icon={'ios-arrow-forward'}>
		        </FadeInView>
	      	</View>
		)
	}
}

class FadeInView extends Component {
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
	    	outputRange:[0,5]
	    })

	    return (
	    	<Button
	    		buttonStyle={{marginTop: 0}}
	    		title={this.props.title}
	    		containerStyle={{ width: '35%' }}
	    		iconRight
	    		onPress={() => this.props.update()}
	    		icon={
	    			<Animated.View style={{paddingLeft: 3, transform: [{ 
	    																// rotateZ: rotate,
	    																translateX: rotate
	    															  }]
    									}}>
					    <Icon
					      	style={{paddingTop: 3, marginLeft: 4}}
					      	name={this.props.icon}
					      	size={15}
					      	color="white"
					    />
				    </Animated.View>
	    		}
	    	>
		    </Button>
	    );
	}
}
