import * as React from 'react';
import { 
	Text, 
	View, 
	StyleSheet, 
	Image,
	Switch,
	Badge,
	FlatList,
	ScrollView
} from 'react-native';
import { Divider, Avatar, ListItem, List, Input, Icon } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';

export default class Notification extends React.Component {
	// renderRow ({ item }) {
	// 	return (
	// 		<ListItem
	// 			roundAvatar
	// 			title={item.name}
	// 			subtitle={item.subtitle}
	// 			avatar={{uri:item.avatar_url}}
	// 			containerStyle={{borderBottomColor: '#ddd', borderBottomWidth:1 ,}}
	// 			/>
	// 			)
	// }
	renderRight() {
		return (
			<View style={[styles.flexRow,styles.spaceBetween] }>          
				<Icon
					name= {'create'}
					color="#495057"
					size={18}
					style={{ backgroundColor: '#fff' }}
				/>
				<Icon
					name= {'delete'}
					color="#495057"
					size={18}
					containerStyle={{ marginLeft: 5}}
				/>         
			</View>
		)
	}

	renderSubTitle(icon, text) {
		return (
			<View style={[styles.flexRow,{marginTop: 5,}]}>
				<IconFeather
					name= {icon}
					size={14}
					color='#2089dc'
				/>    
				<Text style={{color:'#2089dc', marginLeft: 5}}>{text}</Text>     
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{display:'flex',
					alignItems: 'center',
					justifyContent:'center', flexDirection:'row',
					backgroundColor: '#2089dc', marginBottom:0,
					shadowColor: '#000',
					shadowOffset: { width: 0, height: 0 },
					shadowOpacity: .5,
					shadowRadius: 10,   
				}}>
					<Input
						placeholder='Search'
						leftIcon={{ type: 'font-awesome', name: 'search', color:'#2089dc', size:15 }}
						leftIconContainerStyle={{marginRight: 8, marginLeft: 5}}
						inputContainerStyle={{borderBottomWidth:0}} 
						containerStyle={{borderRadius:20, borderWidth:1, borderColor:'#ddd', marginVertical:10,
						marginRight: 20, width:'70%', backgroundColor: '#fff'}}
					/>
					<FontAwesome
						name= 'sort-alpha-asc'
						size={24}
						color="#fff"
					/>
				</View>

				<ScrollView>
					{
					list.map((item,i) => (
						<ListItem
							key={i}
							leftAvatar={{ source: item.avatar_url }}
							title={item.name}
							titleStyle={{color:'#495057'}}
							subtitle={this.renderSubTitle('calendar',item.subtitle)}
							rightElement={this.renderRight}
							containerStyle={[{borderTopWidth:0.5, borderTopColor:'#cccece'}, (i === list.length - 2) ? {borderBottomWidth:0.5, borderBottomColor:'#cccece'} : {}]}
							/>
						))
					}
				</ScrollView>
			</View>
		);
	}
}

const list = [
	{
		name: 'Amy Farha',
		avatar_url: require('../assets/img/ava2.jpg'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava3.png'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava4.jpg'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava5.jpg'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava2.jpg'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava1.jpg'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava3.png'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava4.jpg'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava5.jpg'),
		subtitle: 'View Cycle'
	},
	{
		name: 'Chris Jackson',
		avatar_url: require('../assets/img/ava1.jpg'),
		subtitle: 'View Cycle'
	},
]

const styles = StyleSheet.create({
	flexRow: {
		alignItems: 'center',
		flexDirection: 'row',
	},

	container:{
		flex:1,
	},

	containerFlexRow: {
		flexDirection: 'row',
		alignItems: 'center',
		display:'flex',
		width:'100%',
	},

	spaceBetween:{
		justifyContent:"space-between",
	},
});