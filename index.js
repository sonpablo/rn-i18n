/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import i18n from './src/intl/i18n';

AppRegistry.registerComponent(appName, () => App);