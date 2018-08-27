import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {Constants} from 'expo';
import {createStore} from 'redux'
import {Provider} from 'react-redux';

//components
import reducers from './reducers';
import middleware from './middleware';
import NewNote from './components/NewNote';
import Search from './components/Search';
import List from './components/List';
import {black, grey2} from "./helpers/colors";

const store = createStore(reducers, middleware);


function TaggedNotesStatusBar({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

const TabsAndroid = createMaterialBottomTabNavigator({
    NewNote: {
        screen:NewNote,
        navigationOptions: {
            tabBarLabel: 'New',
            tabBarIcon: ({tintColor}) => <FontAwesome name='sticky-note' size={20} color={black}/>
        }
    },
    List: {
        screen:List,
        navigationOptions: {
            tabBarLabel: 'Notes',
            tabBarIcon: ({tintColor}) => <FontAwesome name='list' size={20} color={black}/>
        }
    },
    Search: {
        screen:Search,
        navigationOptions: {
            tabBarLabel: 'Tags',
            tabBarIcon: ({tintColor}) => <FontAwesome name='tags' size={20} color={black}/>
        }
    },
    },{
    barStyle: {backgroundColor: grey2},
    navigationOptions: {header:null}
    }
    );


// const TabsiOS = createBottomTabNavigator({
//     NewNote: {
//         screen: NewNote,
//         navigationOptions: {
//             tabBarLabel: 'New',
//             tabBarIcon: ({tintColor}) => <FontAwesome name='sticky-note' size={20} color={black}/>
//         }
//     },
//     List: {
//         screen: List,
//         navigationOptions: {
//             tabBarLabel: 'Notes',
//             tabBarIcon: ({tintColor}) => <FontAwesome name='list' size={20} color={black}/>
//         }
//     },
//     Search: {
//         screen: Search,
//         navigationOptions: {
//             tabBarLabel: 'Notes',
//             tabBarIcon: ({tintColor}) => <FontAwesome name='tags' size={20} color={black}/>
//         }
//     }
//     },
// );

export default class App extends React.Component {

    componentDidMount() {
        console.log('Main App Component Mounted')
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TaggedNotesStatusBar backgroundColor={grey2} barStyle='light-content'/>
                    <TabsAndroid/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: grey2,
  },
});
