import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home/index';

/**
* Defining stack navigator
*/
const AppNavigator = createStackNavigator({
	Home: {screen: Home}
},{
	initialRouteName: "Home"
});

const navigator = createAppContainer(AppNavigator);

export default navigator;