import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from "moment";
import IconAwe from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
	index: 0,
	actions: [
	    NavigationActions.navigate({ routeName: 'StepScreen' }),
	],
});
export default class Estimate extends Component{
	constructor(props) {
        super(props);

        this.state = {
            selectedStartDate: null,
        }

        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

	render(){
		let today = moment();
		// let day = today.clone().startOf('month');
		let date = moment().add(31, 'day')
		let date2= moment().subtract(14, 'day')
		let customDatesStyles=[
			{
				date: moment().add(2, 'day'),
				style: {backgroundColor: '#d12377'},
				textStyle: {color: '#fff'},
				containerStyle: [],
			},
			{
				date: moment().add(3, 'day'),
				style: {backgroundColor: '#d12377'},
				textStyle: {color: '#fff'},
				containerStyle: [],
			},
			{
				date: moment().add(4, 'day'),
				style: {backgroundColor: '#0b5123'},
				textStyle: {color: '#fff'},
				containerStyle: [],
			},
			{
				date: moment().add(5, 'day'),
				style: {backgroundColor: '#0b5123'},
				textStyle: {color: '#fff'},
				containerStyle: [],
			},
		]

		// while(day.add(1, 'day').isSame(today, 'month')) {
		//   	customDatesStyles.push({
		// 	    date: day.clone(),
		// 	    // Random colors
		// 	    style: {backgroundColor: '#'+('#00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)},
		// 	    textStyle: {color: '#fff'}, // sets the font color
		// 	    containerStyle: [], // extra styling for day container
		//   });
		// }

		return(
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
                <CalendarPicker
                	selectedDayColor= '#2089dc'
                    selectedDayTextColor= '#fff'
			      	todayTextStyle={{fontWeight: 'bold',fontSize: 16, fontStyle: 'italic' }}
			      	todayBackgroundColor={'transparent'}
			      	customDatesStyles={customDatesStyles}
			     	minDate={date2}
			     	maxDate={date}
			    />
			    <View style={{ 	shadowOpacity: 0.8,
						        shadowRadius: 16,
						        shadowColor: '#2089dc',
						        shadowOffset: { height: 0, width: 0},
						        elevation: 24,
						        // borderWidth: 1,
						        // borderColor: 'black',
						        borderRadius: 150,
						        width: 270,
						        height: 270,
						        backgroundColor: '#00A1E0',
						        opacity: 0.7
						    }}>
					<View style={{margin:48}}>
						<View style={{justifyContent: 'center', alignItems: 'center' }}>
							<Text style={{color: '#fff', fontStyle: 'italic' }}>Thursday, March 15, 2019</Text>
							<Text style={{color: '#fff', fontSize: 21, paddingTop: 30}}>Left eyelash loss in</Text>
							<Text style={{color: '#fff', fontSize: 30, paddingTop: 10, fontWeight: 'bold' }}>2 more days</Text>
							<TouchableOpacity style={{position: 'absolute', left: 15, top: 160 }} onPress={() => this.props.navigation.navigate('StepScreen')}>
								<IconAwe
							      	name='edit'
							      	size={20}
							      	color='#fff'
							    />
						    </TouchableOpacity>
							<TouchableOpacity style={{position: 'absolute', left: 38, top:160}} onPress={() => this.props.navigation.dispatch(resetAction)}>
						    	<Text style={{color:'#fff' }}>Edit Lash Shedding</Text>
						    </TouchableOpacity>
						</View>
					</View>
			    </View>
			</View>
		)
	}
}