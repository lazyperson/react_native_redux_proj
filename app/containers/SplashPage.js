import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions, Text, Animated } from 'react-native';


class SplashPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fadeAnimContainer: new Animated.Value(1),
            bounceValue: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this._inAnim(() => {
            setTimeout(() => {
                this._outAnim(() => this.props.onAnimEnd && this.props.onAnimEnd());
            }, 1000);
        });
    }

    render() {
        
        const bgimg = { src: require('../images/index1.jpg') };
        return (
            <Animated.View style={[styles.container, this.props.style, {
                flex: 1,
                opacity: this.state.fadeAnimContainer,
                transform: [
                    { scale: this.state.bounceValue },
                ]
            }]}>
                <Animated.Image style={styles.image} source={bgimg.src} >
                    <Animated.View>
                        <Text style={styles.text1}>WELCOME YOU.</Text>
                    </Animated.View>                   
                </Animated.Image>
            </Animated.View>
        );
    }



    _inAnim(callback) {
        Animated.sequence([
            Animated.spring(
                this.state.bounceValue,
                {
                    toValue: 1,
                    friction: 10,
                }
            ),
        ]).start(() => callback && callback());
    }

    _outAnim(callback) {
        Animated.sequence([
            Animated.timing(
                this.state.fadeAnimContainer,
                {
                    toValue: 0,
                    duration: 1000,
                }
            ),
        ]).start(() => callback && callback());
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        resizeMode: 'cover',
        opacity: 1,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 30,
    },
    text2: {
        color: '#FFFFFF',
        margin: 30,
        fontSize: 15,
    },
    text3: {
        color: '#FFFFFF',
        fontSize: 15,
        marginBottom: 30,
    }
});


export default SplashPage;