import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import {green, grey1, white} from "../helpers/colors";
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";

class List extends React.Component {

    componentDidMount() {
        console.log('List Component Mounted');
        this.props.dispatch(handleInitialData());
    }

    state={
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Notes</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});

export default connect()(List);