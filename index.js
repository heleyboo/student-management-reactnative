/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
// import StudentApp from './app/StudentApp';
import {name as appName} from './app.json';
import StudentManagementApp from './app/app';


AppRegistry.registerComponent(appName, () => StudentManagementApp);
// AppRegistry.registerComponent(appName, () => StudentApp);
