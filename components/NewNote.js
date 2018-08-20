import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableNativeFeedback } from 'react-native';
import {green, grey1, white} from "../helpers/colors";

class NewNote extends React.Component {

    state={
        headingText: '',
        descText:'',
        tags:[],
    };

    handleDescText = () => {

    };

    handleCreateBtn = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={styles.heading}>New Note</Text>*/}
                <TextInput
                    placeholder={'Heading...'}
                    value={this.state.headingText}
                    style={styles.textField}
                    onChangeText={this.handleDescText}
                    underlineColorAndroid={'transparent'}
                    selectTextOnFocus={true}
                />
                <TextInput
                    // value={this.state.descText}
                    placeholder={'Note...'}
                    style={[styles.textField, {textAlignVertical: 'top'}]}
                    onChangeText={this.handleDescText}
                    underlineColorAndroid={'transparent'}
                    selectTextOnFocus={true}
                    multiline={true}
                    numberOfLines={15}

                />
                <TextInput
                    placeholder={'Enter tags separated by spaces'}
                    value={this.state.headingText}
                    style={styles.textField}
                    onChangeText={this.handleDescText}
                    underlineColorAndroid={'transparent'}
                    selectTextOnFocus={true}
                />
                <TouchableNativeFeedback
                    onPress={this.handleCreateBtn}
                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>SUBMIT</Text>
                    </View>
                </TouchableNativeFeedback>
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
    textField: {
        alignSelf: 'stretch',
        padding: 10,
        margin: 10,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: grey1,
    },
    btn: {
        borderRadius: 2,
        backgroundColor: green,
        height: 40,
        width: 150,
        padding: 10,
        margin: 5,
        elevation: 5
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});


export default NewNote;