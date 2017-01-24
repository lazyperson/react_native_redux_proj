import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import {App} from './containers/Home';
import SplashPage from './containers/SplashPage';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowSplash: true,
            store: configureStore()
        };
    }


    render() {
        if (this.state.isShowSplash) {
            return <SplashPage onAnimEnd={() => this.setState({ isShowSplash: false })} />;
        }
        else {
            return (
                <Provider store={this.state.store} >
                    <App />
                </Provider>
            )
        }
    }
}
