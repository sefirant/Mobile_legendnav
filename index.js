import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'tab.Home', // this is a registered name for a screen
      title: 'Home',
      icon: require('./home.png'),
      navigatorStyle:{
        navBarHidden: true
      }
    },
    {
      label: 'Heroes',
      screen: 'tab.Heroes',
      title: 'Heroes',
      icon: require('./home.png')
    },
    {
    label: 'Settings',
    screen: 'tab.Settings',
    title: 'Settings',
    icon: require('./home.png')
  }
  ]
});
