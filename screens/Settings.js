import React, {Component} from 'react';
import {Container, Content, H3} from 'native-base';
import {View, Text} from 'react-native';

export default Settings = () => (
	<Container>
		<Content>
			<H3 style={nbStyles.subtitle}>Settings</H3>
		</Content>
	</Container>
)

const nbStyles = {
	subtitle:{
		textAlign:'center',
		marginTop: 20
	}
}
