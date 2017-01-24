import { AppRegistry } from 'react-native';
import App from './App';

if (!__DEV__) {
    global.console = {
        info: () => { },
        log: () => { },
        warn: () => { },
        error: () => { },
    };
}
console.disableYellowBox = true;
AppRegistry.registerComponent('react_native_redux_proj', () => App);
