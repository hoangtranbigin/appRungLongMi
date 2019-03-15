import React, {Component} from 'react';
import { View, Text, Image, ImageBackground, Animated, Easing } from 'react-native';
import { Button, Overlay, Input, Tile, ButtonGroup, SocialIcon, Divider } from 'react-native-elements';
// Icon
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
// Component
import ButtonStart from '../components/ButtonStart';
import ButtonNext from '../components/ButtonNext';
import ButtonLogin from '../components/ButtonLogin';
import ButtonSignUp from '../components/ButtonSignUp';


export default class Home extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      	isVisible1: true,
	      	isVisible2: false,
	      	isVisible3: false,
	      	selectedIndex: 0,
	    }
	    this.updateIndex = this.updateIndex.bind(this)
	    this.updateIsVisible1 = this.updateIsVisible1.bind(this)
	    this.updateIsVisible2 = this.updateIsVisible2.bind(this)
	    this.updateIsVisible3 = this.updateIsVisible3.bind(this)
	    this.clickLogIn = this.clickLogIn.bind(this)
	}

	updateIsVisible1 () {
	  	this.setState({isVisible1: !this.state.isVisible1})
	  	this.setState({isVisible2: !this.state.isVisible2})
	}

	updateIsVisible2 () {
	  	this.setState({isVisible2: !this.state.isVisible2})
	  	this.setState({isVisible3: !this.state.isVisible3})
	}

	updateIsVisible3 () {
	  	this.setState({isVisible3: !this.state.isVisible3})
	}

	clickLogIn () {
	  	this.props.navigation.navigate('StepScreen', {thamso:'hello'})
	}

	updateIndex (selectedIndex) {
	  	this.setState({selectedIndex})
	}

	render(){
		const buttons = ['Sign In', 'Sign Up']
  		const { selectedIndex } = this.state

		return(
			<View>
				<Overlay
					overlayStyle={{flexDirection: "column"}}
				  	isVisible={this.state.isVisible1}
				  	onBackdropPress={() => this.setState({ isVisible1: false })}
				  	windowBackgroundColor='rgba(0, 0, 0, 0.8)'
				>
					<Image source={require('../assets/img/lovelyeye.jpg')} style={{flex:1, width: 295, height: 295, marginLeft: -10, marginTop: -10,borderRadius: 0 }}></Image>
					<View style={{flex:1, justifyContent: 'center', alignItems: 'center', width: 295, marginLeft: -10 }}>
						<Text style={{fontSize: 50, color: '#2089dc', fontFamily: 'Bernaillo'}}>Suite</Text>
						<Text style={{fontSize: 50, color: '#2089dc', fontFamily: 'Bernaillo', marginTop: -20}}>Lovely</Text>
						<Text style={{color: '#2089dc', marginTop: 20, fontSize: 17}}>Welcome to Lash Shedding</Text>
						{/* <Text style={{color: '#2089dc'}}>Are you Lash Shedding?</Text> */}
					</View>

					<View style={{justifyContent: 'center', alignItems: 'center' }}>
						<ButtonNext update={this.updateIsVisible1}></ButtonNext>
						{/* <Button */}
						{/* 	icon={ */}
						{/* 	    <Icon */}
						{/* 	    	style={{paddingTop: 5, marginLeft: 5}} */}
						{/* 	      	name="ios-arrow-forward" */}
						{/* 	      	size={15} */}
						{/* 	      	color="white" */}
						{/* 	    /> */}
						{/* 	} */}
						{/* 	iconRight */}
						{/* 	onPress={() => this.setState({ isVisible1: false, isVisible2: true })} */}
						{/* 	buttonStyle={{marginTop: 0}} */}
						{/*   	title="Next" */}
						{/*   	containerStyle={{ width: '35%' }} */}
						{/* /> */}
					</View>
				</Overlay>

				<Overlay
					overlayStyle={{flexDirection: "column"}}
				  	isVisible={this.state.isVisible2}
				  	onBackdropPress={() => this.setState({ isVisible2: false })}
				  	windowBackgroundColor='rgba(0, 0, 0, 0.8)'
				>
					<Image source={require('../assets/img/longmi1.jpg')} style={{flex:1, width: 295, marginLeft: -10, marginTop: -10, borderRadius: 0 }}></Image>
					<View style={{flex:1, justifyContent: 'center', alignItems: 'center', width: 295, marginLeft: -10 }}>
						<Text style={{ marginTop: -30, paddingTop: -30, fontSize: 18 }}>Is Lash Shedding Normal?</Text>
						<Text style={{marginTop: 15, marginLeft: 20, marginRight: 20, textAlign: 'justify', lineHeight: 21 }}>The shedding cycle is a healthy part of the lash growth process and should not be cause for alarm. Even if you regularly get lash extensions, the cycle still continues. It’s important to know the key phases in the lash shedding cycle, why shedding happens, and how it affects natural</Text>
					</View>

					<View style={{justifyContent: 'center', alignItems: 'center', marginTop: -30 }}>
						<ButtonNext update={this.updateIsVisible2}></ButtonNext>
						{/* <Button */}
						{/* 	icon={ */}
						{/* 	    <Icon */}
						{/* 	    	style={{paddingTop: 5, marginLeft: 5}} */}
						{/* 	      	name="ios-arrow-forward" */}
						{/* 	      	size={15} */}
						{/* 	      	color="white" */}
						{/* 	    /> */}
						{/* 	} */}
						{/* 	iconRight */}
						{/* 	onPress={() => this.setState({ isVisible2: false, isVisible3: true })} */}
						{/* 	buttonStyle={{marginTop: 0}} */}
						{/*   	title="Next" */}
						{/* 	containerStyle={{ width: '35%' }} */}
						{/* /> */}
					</View>
				</Overlay>

				<Overlay
					overlayStyle={{flexDirection: "column"}}
				  	isVisible={this.state.isVisible3}
				  	onBackdropPress={() => this.setState({ isVisible3: false })}
				  	windowBackgroundColor='rgba(0, 0, 0, 0.8)'
				>
					<Image source={require('../assets/img/longmi3.jpg')} style={{flex:1, marginLeft: -10, width: 295, height: 295, marginTop: -10, borderRadius: 0 }}></Image>
					<View style={{flex:1, justifyContent: 'center', alignItems: 'center', width: 295, marginLeft: -10 }}>
						<Text style={{ marginTop: -30, paddingTop: -30, fontSize: 18 }}>Lash Shedding Cycle</Text>
						<Text style={{marginTop: 15, marginLeft: 20, marginRight: 20, textAlign: 'justify', lineHeight: 21 }}>The shedding cycle is a healthy part of the lash growth process and should not be cause for alarm. Even if you regularly get lash extensions, the cycle still continues. It’s important to know the key phases in the lash shedding cycle, why shedding happens, and how it affects natural</Text>
					</View>

					<View style={{justifyContent: 'center', alignItems: 'center', marginTop: -30 }}>
						<ButtonStart update={this.updateIsVisible3}></ButtonStart>
						{/* <Button */}
						{/* 	icon={ */}
						{/* 	    <IconAnt */}
						{/* 	    	style={{paddingTop: 5, marginLeft: 5}} */}
						{/* 	      	name="enter" */}
						{/* 	      	size={15} */}
						{/* 	      	color="white" */}
						{/* 	    /> */}
						{/* 	} */}
						{/* 	iconRight */}
						{/* 	onPress={() => this.setState({ isVisible3: false })} */}
						{/* 	buttonStyle={{marginTop: 0}} */}
						{/*   	title="Start" */}
						{/* 	containerStyle={{ width: '35%' }} */}
						{/* /> */}
					</View>
				</Overlay>

				<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
					<Tile
						titleStyle={{marginTop: 150,fontFamily: 'Bernaillo'}}
						captionStyle={{fontSize: 17}}
					  	imageSrc={require('../assets/img/mat-xanh.jpg')}
					  	title="With Suite Lovely"
					  	featured
					  	caption="Eyelash loss is no longer a fear"
					/>

					<ButtonGroup
				      	onPress={this.updateIndex}
				     	selectedIndex={selectedIndex}
				      	buttons={buttons}
				      	containerStyle={{width: '100%',marginTop: -4}}
				    />
					
					{/* Tab Sign In */}
					<Input
						inputContainerStyle={{borderWidth: 1, borderColor: '#e2e6e7', borderRadius: 3, marginBottom: 10 , marginTop: 4, display: this.state.selectedIndex == 0 ? 'flex' : 'none' }}
					  	placeholder='Enter your user name'
					  	inputStyle={{marginLeft: 10, fontSize: 15}}
					  	leftIcon={
						    <IconAwe
						      	name='user-circle-o'
						      	size={20}
						      	color='#495057'
						    />
					  	}
					/>
					
					<Input
						inputContainerStyle={{borderWidth: 1, borderColor: '#e2e6e7', borderRadius: 3, display: this.state.selectedIndex == 0 ? 'flex' : 'none'}}
					  	placeholder='Enter your password'
					  	inputStyle={{marginLeft: 14, fontSize: 15}}
					  	leftIcon={
						    <IconAwe
						    	style={{marginLeft: 3}}
						      	name='unlock-alt'
						      	size={20}
						      	color='#495057'
						    />
					  	}
					/>

					<ButtonLogin selectedIndex={this.state.selectedIndex} update={this.clickLogIn}></ButtonLogin>
					{/* <Button */}
					{/* 	onPress={() => this.props.navigation.navigate('StepScreen', {thamso:'hello'})} */}
					{/* 	buttonStyle={{marginTop:10, marginBottom: 6, width: '123%', marginLeft: -27, display: this.state.selectedIndex == 0 ? 'flex' : 'none'}} */}
					{/*   	title="Login" */}
					{/*   	icon={ */}
					{/* 	    <IconEntypo */}
					{/* 	      	name="login" */}
					{/* 	      	size={15} */}
					{/* 	      	color="white" */}
					{/* 	      	style={{marginLeft: 3, marginTop: 4}} */}
					{/* 	    /> */}
					{/* 	} */}
					{/* 	iconRight */}
					{/* /> */}
					
					<View>
						<Text style={{color: '#cccece', display: this.state.selectedIndex == 0 ? 'flex' : 'none'}}>─────────── or ───────────</Text>
					</View>

					<SocialIcon
					  	title='Sign In With Facebook'
					  	button
					  	type='facebook'
					  	style={{width: '80%', marginTop: 3, display: this.state.selectedIndex == 0 ? 'flex' : 'none'}}
					/>

					<SocialIcon
					  	title='Sign In With Instagram'
					  	button
					  	type='instagram'
					  	style={{width: '80%', marginTop: 3, display: this.state.selectedIndex == 0 ? 'flex' : 'none'}}
					/>

					{/* Tab Sign Up */}
					<Input
						inputContainerStyle={{borderWidth: 1, borderColor: '#e2e6e7', borderRadius: 3, marginBottom: 10 , marginTop: 4, display: this.state.selectedIndex == 1 ? 'flex' : 'none' }}
					  	placeholder='Email'
					  	inputStyle={{marginLeft: 10, fontSize: 15}}
					  	leftIcon={
						    <IconAwe
						      	name='user-circle-o'
						      	size={20}
						      	color='#495057'
						    />
					  	}
					/>

					<Input
						inputContainerStyle={{borderWidth: 1, borderColor: '#e2e6e7', borderRadius: 3, marginBottom: 10, display: this.state.selectedIndex == 1 ? 'flex' : 'none'}}
					  	placeholder='Password'
					  	inputStyle={{marginLeft: 14, fontSize: 15}}
					  	leftIcon={
						    <IconAwe
						    	style={{marginLeft: 3}}
						      	name='lock'
						      	size={20}
						      	color='#495057'
						    />
					  	}
					/>

					<Input
						inputContainerStyle={{borderWidth: 1, borderColor: '#e2e6e7', borderRadius: 3, display: this.state.selectedIndex == 1 ? 'flex' : 'none'}}
					  	placeholder='Re-enter the password'
					  	inputStyle={{marginLeft: 14, fontSize: 15}}
					  	leftIcon={
						    <IconAwe
						    	style={{marginLeft: 3}}
						      	name='lock'
						      	size={20}
						      	color='#495057'
						    />
					  	}
					/>
					
					<ButtonSignUp selectedIndex={this.state.selectedIndex} update={this.clickLogIn}></ButtonSignUp>
					{/* <Button */}
					{/* 	onPress={() => this.props.navigation.navigate('StepScreen', {thamso:'hello'})} */}
					{/* 	buttonStyle={{marginTop:10, marginBottom: 6, width: '123%', marginLeft: -27, display: this.state.selectedIndex == 1 ? 'flex' : 'none'}} */}
					{/*   	title="Sign Up" */}
					{/*   	icon={ */}
					{/* 	    <IconEntypo */}
					{/* 	      	name="login" */}
					{/* 	      	size={15} */}
					{/* 	      	color="white" */}
					{/* 	      	style={{marginRight: 4, marginTop: 4}} */}
					{/* 	    /> */}
					{/* 	} */}
					{/* /> */}
					
					<View>
						<Text style={{lineHeight: 20, color: '#a3a3a3', paddingLeft: 12, paddingRight: 10, paddingTop: 5, textAlign: 'justify', display: this.state.selectedIndex == 1 ? 'flex' : 'none'}}>When you click "Sign Up", you agree to the <Text style={{fontWeight: 'bold', color: '#4c4b4b' }}>Privacy Policy & Policy</Text>, including the use of our <Text style={{fontWeight: 'bold', color: '#4c4b4b' }}>Cookies</Text> and agree to receive email notifications about your account.</Text>
					</View>
				</View>
			</View>
		)
	}
}