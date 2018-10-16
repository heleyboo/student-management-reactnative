import React, { Component } from 'react';
import {
    createStackNavigator
} from 'react-navigation';

import * as Screens from './screens';
import StudentManagementStack from './routes';



export default class StudentManagementApp extends Component {
    renderApp = () => (
        <StudentManagementStack/>
    );

    render = () => (this.renderApp());
}