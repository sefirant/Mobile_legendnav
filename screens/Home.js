import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {View, Text} from 'react-native';

export default Home = (props) => (
	<Container style={{justifyContent:"center",alignItems:"center"}}>
		<Content>
			<Thumbnail large source={{uri:'https://i.pinimg.com/originals/ab/a1/fd/aba1fd8d914fd3455b0c24437645ff95.png'}}
			style={{alignItems:'center', width:310, height:200, marginTop:50}}/>

			<Text style={nbStyles.subtitle}>
          Welcome to Mobile Legend
          </Text>
			<Text style={nbStyles.subtitle}>
            Heroes Dictionary
          </Text>
          <Text style={nbStyles.subtitle}>
            Start Exploring/Creating
          </Text>
          <Text style={nbStyles.subtitle}>
            Your Favorite Heroes
          </Text>

					<Button block style={nbStyles.btn}
						onPress={()=> props.navigator.switchToTab({tabIndex:1})}>
						<Text style={{color:'#fff'}}>Start</Text>
					</Button>
		</Content>
	</Container>
)
const nbStyles = {
    subtitle: {
				textAlign:'center',
				color:'#ACD2FA',
				fontSize: 18
			},
		btn:{
			marginTop:20,
		}
}
