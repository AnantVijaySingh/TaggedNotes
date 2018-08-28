import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback, FlatList, TouchableOpacity, Platform } from 'react-native';
import {green, grey2, white} from "../helpers/colors";
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

        const {notes} = this.props;

        // console.log(notes);

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Notes</Text>
                <FlatList
                    data = {Object.values(notes)}
                    style={styles.list}
                    keyExtractor={(item) => item.Timestamp}
                    renderItem = {(item) =>
                        <TouchableOpacity
                            style={styles.note}
                            onPress={() => {} }
                        >
                            <Text>{item['item']['heading']}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: grey2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    list: {
        alignSelf: 'stretch',
    },
    note: {
        backgroundColor: white,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginTop: 10
    },
});

function mapStateToProps(state) {
    return {
        notes: state['notes']
    }
}

export default connect(mapStateToProps)(List);