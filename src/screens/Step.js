import React, { Component } from 'react';
import { View, Text, DatePickerIOS, StyleSheet, Button } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import DatepickerRange from 'react-native-range-datepicker';
import {SingleDatepicker} from 'react-native-range-datepicker';
import { CheckBox } from 'react-native-elements';
import Slider from "react-native-slider";
import CalendarPicker from 'react-native-calendar-picker';

class Step extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenDate: new Date(),
            valueKepMi: 0,
            valueMiGia: 0,
            valueDuiMat: 0,
            valueUongNuoc: 0,
            selectedStartDate: null,
            checkedStep1: false,
            checkedStep2: false
        }

        this.setDate = this.setDate.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate});
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    onNextStep = () => {
        // console.log('called next step');
    };

    onPaymentStepComplete = () => {
        // alert('Payment step completed!');
    };

    onPrevStep = () => {
        // console.log('called previous step');
    };

    onSubmitSteps = () => {
        // console.log('called on submit step.');
    };

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={{ flex: 1, marginTop: -20 }}>

                <ProgressSteps
                    borderWidth={6}
                    activeStepIconBorderColor='#2089dc'
                    completedProgressBarColor='#2089dc'
                    activeLabelColor='#2089dc'
                    completedStepIconColor='#2089dc'
                >
                    <ProgressStep
                        label="Step 1"
                        onNext={this.onPaymentStepComplete}
                        onPrevious={this.onPrevStep}
                        onSubmit={this.onSubmitSteps}
                        nextBtnTextStyle={{ color: '#2089dc' }}
                        previousBtnTextStyle={{ color: '#2089dc' }}
                        centerContainer
                    >
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Text style={{fontSize: 16, paddingBottom: 20}}>When did your last lash shedding of left eye?</Text>
                            {/* <DatepickerRange */}
                            {/*     buttonColor= '#2089dc' */}
                            {/*     buttonContainerStyle= {{display: 'none'}} */}
                            {/*     showReset= {false} */}
                            {/*     showClose= {false} */}
                            {/*     selectedBackgroundColor= '#2089dc' */}
                            {/*     todayColor= '#2089dc' */}
                            {/* /> */}
                            <View style={{display: this.state.checkedStep1 ? 'none' : 'flex' }}>
                                <CalendarPicker
                                    onDateChange={this.onDateChange}
                                    selectedDayColor= '#2089dc'
                                    selectedDayTextColor= '#fff'
                                />
                            </View>
                            <View style={{display: this.state.checkedStep1 ? 'flex' : 'none' }}>
                                <Text style={{ paddingBottom: 20,  alignItems: 'center', justifyContent: 'center', paddingLeft: 40, paddingRight: 40}}>You can mark the date of lash reduction later, or you just need to mark the new Eyelash loss date</Text>
                            </View>
                            <CheckBox
                                center
                                containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                                title="I don't remember"
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checkedStep1}
                                onPress={() => this.setState({ checkedStep1: !this.state.checkedStep1 })}
                                textStyle={{fontStyle: 'normal', fontWeight: 'normal', marginLeft: 0, color: this.state.checkedStep1 ? '#2089dc' : '#141823' }}
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Step 2"
                        onNext={this.onNextStep}
                        onPrevious={this.onPrevStep}
                        onSubmit={this.onSubmitSteps}
                        nextBtnTextStyle={{ color: '#2089dc' }}
                        previousBtnTextStyle={{ color: '#2089dc' }}
                        centerContainer
                    >
                        <View style={{ alignItems: 'center', marginTop: 10  }}>
                            <Text style={{fontSize: 16, paddingBottom: 20}}>When did your last lash shedding of right eye?</Text>
                            <View style={{display: this.state.checkedStep2 ? 'none' : 'flex' }}>
                                <CalendarPicker
                                    onDateChange={this.onDateChange}
                                    selectedDayColor= '#2089dc'
                                    selectedDayTextColor= '#fff'
                                />
                            </View>
                            <View style={{display: this.state.checkedStep2 ? 'flex' : 'none' }}>
                                <Text style={{ paddingBottom: 20,  alignItems: 'center', justifyContent: 'center', paddingLeft: 40, paddingRight: 40}}>You can mark the date of lash reduction later, or you just need to mark the new Eyelash loss date</Text>
                            </View>
                            <CheckBox
                                center
                                containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
                                title="I don't remember"
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checkedStep2}
                                onPress={() => this.setState({ checkedStep2: !this.state.checkedStep2 })}
                                textStyle={{fontStyle: 'normal', fontWeight: 'normal', marginLeft: 0, color: this.state.checkedStep2 ? '#2089dc' : '#141823' }}
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Step 3"
                        onNext={this.onNextStep}
                        onPrevious={this.onPrevStep}
                        onSubmit={this.onSubmitSteps}
                        nextBtnTextStyle={{ color: '#2089dc' }}
                        previousBtnTextStyle={{ color: '#2089dc' }}
                        centerContainer
                    >
                        <Text style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 110, paddingTop: 100, fontSize: 17 }}>What is your birthday?</Text>
                        <View style={styles.container}>
                            <DatePickerIOS
                                date={this.state.chosenDate}
                                onDateChange={this.setDate}
                                mode={'date'}
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep
                        label="Step 4"
                        onNext={this.onNextStep}
                        onPrevious={this.onPrevStep}
                        onSubmit={this.onSubmitSteps}
                        nextBtnTextStyle={{ color: '#2089dc' }}
                        previousBtnTextStyle={{ color: '#2089dc' }}
                        centerContainer
                        onSubmit={() => this.props.navigation.navigate('EstimateScreen', {thamso:'hello'})}
                    >
                        <View style={styles.slider}>
                            <Text style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 30, marginBottom: 20, marginTop: -20, fontSize: 17}}>Let us know some of your habits</Text>

                            <View style={{marginBottom: 35}}>
                                <Text>Use eyelash clip</Text>
                                <Slider
                                    value={this.state.valueKepMi}
                                    onValueChange={valueKepMi => this.setState({ valueKepMi })}
                                    minimumValue = {0}
                                    maximumValue = {5}
                                    step = {1}
                                    minimumTrackTintColor='#2089dc'
                                    thumbTintColor='#2089dc'
                                />

                                <Text style={{marginLeft: '39%', color:'#2089dc', display: this.state.valueKepMi > 0 ? 'flex' : 'none'}}>
                                    Intensity: {this.state.valueKepMi}
                                </Text>
                            </View>

                            <View style={{marginBottom: 35}}>
                                <Text>Use fake eyelashes</Text>
                                <Slider
                                    value={this.state.valueMiGia}
                                    onValueChange={valueMiGia => this.setState({ valueMiGia })}
                                    minimumValue = {0}
                                    maximumValue = {5}
                                    step = {1}
                                    minimumTrackTintColor='#2089dc'
                                    thumbTintColor='#2089dc'
                                />
                                <Text style={{ marginLeft: '39%', color:'#2089dc', display: this.state.valueMiGia > 0 ? 'flex' : 'none'}}>
                                    Intensity: {this.state.valueMiGia}
                                </Text>
                            </View>
                            
                            <View style={{marginBottom: 35}}>
                                <Text>Touch the eyelashes</Text>
                                <Slider
                                    value={this.state.valueDuiMat}
                                    onValueChange={valueDuiMat => this.setState({ valueDuiMat })}
                                    minimumValue = {0}
                                    maximumValue = {5}
                                    step = {1}
                                    minimumTrackTintColor='#2089dc'
                                    thumbTintColor='#2089dc'
                                />
                                <Text style={{ marginLeft: '39%', color:'#2089dc', display: this.state.valueDuiMat > 0 ? 'flex' : 'none'}}>
                                    Intensity: {this.state.valueDuiMat}
                                </Text>
                            </View>

                            <View>
                                <Text>How much water do you drink?</Text>
                                <Slider
                                    value={this.state.valueUongNuoc}
                                    onValueChange={valueUongNuoc => this.setState({ valueUongNuoc })}
                                    minimumValue = {0}
                                    maximumValue = {3}
                                    step = {0.5}
                                    minimumTrackTintColor='#2089dc'
                                    thumbTintColor='#2089dc'
                                />
                                <Text style={{ marginLeft: '42%', color:'#2089dc', display: this.state.valueUongNuoc > 0 ? 'flex' : 'none'}}>
                                    {this.state.valueUongNuoc}l/day
                                </Text>
                            </View>
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        );
    }
}

export default Step;

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       marginTop: -100,
    },
    slider:{
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        alignItems: "stretch",
        justifyContent: "center"
    },
});

// import React, {Component} from 'react';
// import {Text, View, Button} from 'react-native';
// 
// export default class Step1 extends Component{
// 	render(){
// 		return(
// 			<View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
// 				<Text>
// 					Chi tiết
// 				</Text>
// 				<Button
// 				  	title="Go back"
// 				  	onPress={() => this.props.navigation.goBack()}
// 				/>
// 				<Text>{this.props.navigation.state.params.thamso}</Text>
// 			</View>
// 		)
// 	}
// }