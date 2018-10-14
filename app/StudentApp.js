import {
    createStackNavigator,
  } from 'react-navigation';
  
import HomeScreen from './HomeScreen';

  const StudentApp = createStackNavigator({
    //   Home:HomeScreen,
    Home: { screen: HomeScreen },
    // Profile: { screen: ProfileScreen },
  });
  
  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }
//   export default StudentApp;