import React, {Component} from 'react';
import {Container, Content, Text, List, ListItem, Thumbnail, Body} from 'native-base';
import Hero from '../components/Hero';

export default class Heroes extends Component {

	heroes = [
		{
			name : "Kimmy",
			title : "Chemist Instinct",
			imageUri: "https://metaco.gg/wp-content/uploads/2018/11/Kimmy.jpg"
		},
		{
			name : "Harith",
			title : "Synchro Fission",
			imageUri: "https://metaco.gg/wp-content/uploads/2018/11/Harith.jpg"
		},
		{
			name : "Lunox",
			title : "Dreamland Twist",
			imageUri:"https://metaco.gg/wp-content/uploads/2018/09/Lunox-Main.jpg"
		}
	]

	render(){
		return(
			<Container>
				<Content>
					<List>
						{this.heroes.map((hero, key)=> <Hero key={key} hero={hero}/>)}
					</List>
				</Content>
			</Container>
		)
	}
}
