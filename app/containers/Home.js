
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeAction } from '../actions/HomeAction';
import { StyleSheet, Text, View,InteractionManager } from 'react-native';
 
export default class Home extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {     
        const {content, isLoading } = this.props;
        return (
            <View style={styles.container}>
                {
                    isLoading?<Text style={styles.title}>Loadind...</Text>:<Text style={styles.title}>{content}</Text>
                }
            </View>
        );
    }
    componentDidMount() {
        const {dispatch} = this.props;
        InteractionManager.runAfterInteractions(() => {
            dispatch(HomeAction());
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection:'column',
        alignItems: 'center',
    },
    title:{
        fontSize: px2dp(16),
        color: '#808080',
    }
});

export default connect(store => ({
        content: store.Home.content,
        isLoading: store.Home.isLoading,
}))(Home);
