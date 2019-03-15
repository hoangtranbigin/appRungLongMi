import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Step from './screens/Step';
import Estimate from './screens/Estimate';
import Notification from './screens/Notification';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const Screen = createStackNavigator(
	{	
	  	HomeScreen: {
	  		screen:	Home,
	  		navigationOptions:{
	  			title: "Home",
	  		}
	  	},
	  	StepScreen: {
	  		screen:	Step,
	  		navigationOptions:{
	  			title: "Step",
	  		}
	  	},
	  	EstimateScreen: {
	  		screen:	Estimate,
	  		navigationOptions:{
	  			title: "Lash shedding day",
	  			headerLeft: null
	  		}
	  	},
  	},
  	{
	    initialRouteName: "HomeScreen"
	}
);


const UserStack = createStackNavigator(
	{	
	  	UserScreen: {
	  		screen:	Profile,
	  		navigationOptions:{
	  			title: "Setting",
	  		}
	  	}
  	},
);

const NotiStack = createStackNavigator(
	{	
	  	NotiScreen: {
	  		screen:	Notification,
	  		navigationOptions:{
	  			title: "Notification",
	  		}
	  	}
  	},
  	{
		defaultNavigationOptions: {
			headerStyle: {
				// backgroundColor: '#448aff',
				// borderWidth:0
			},
			// headerTintColor: '#fff',
			// headerTitleStyle: {
			// 	fontWeight: 'bold',
			// },
		},
	}
);

const Tabbar = createBottomTabNavigator(
	{
		HomeTab:{
			screen:	Screen,
			navigationOptions:{
	  			tabBarLabel: 'Home',
	  			tabBarIcon: ({tintColor}) =>(
	  				<Icon name="ios-home" size={30} color={tintColor} />
	  			)
	  		}
		},
		NotiTab:{
			screen:	NotiStack,
			navigationOptions:{
	  			tabBarLabel: 'Noti',
	  			tabBarIcon: ({tintColor}) =>(
	  				<IconAntDesign name="notification" size={30} color={tintColor} />
	  			)
	  		}
		},
		UserTab:{
			screen:	UserStack,
			navigationOptions:{
	  			tabBarLabel: 'More',
	  			tabBarIcon: ({tintColor}) =>(
	  				<IconFoundation name="indent-more" size={30} color={tintColor} />
	  			)
	  		}
		}
	},
	{
		tabBarPosition: "bottom",
		tabBarOptions:{
			style:{
				paddingTop: 8
			}
		}
	}
)

export default createAppContainer(Tabbar);