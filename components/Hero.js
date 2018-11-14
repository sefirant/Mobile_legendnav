import React from 'react';
import {Thumbnail, Text, Body, List, ListItem, Container} from 'native-base';


export default Hero = (props) => (
    <ListItem>
      <Thumbnail
      square
      size={80}
      source={{uri: props.hero.imageUri}}/>
      <Body>
        <Text>{props.hero.name}</Text>
        <Text>{props.hero.title}</Text>
      </Body>
    </ListItem>
)
