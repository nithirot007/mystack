/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Button,
    TextInput,
    Text,
    View,
    Picker,
    Alert
} from 'react-native';

export default class AwesomeProject extends Component {
    constructor() {
        super()
        var Ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.arr = [];
        this.state = {
            object: '',
            dataSource: Ds.cloneWithRows(this.arr),
        }
    }


    _pop() {
        Alert.alert('Alert', 'Are you want to pop?', [
            { text: 'Yes', onPress:()=> this._confirmPop('Yes'), style: 'positive' },
            { text: 'No', onPress:()=> this._confirmPop('No'), style: 'negative' }
        ])

    }
    _confirmPop(text) {
        if (text == 'Yes') {
            this.arr.pop();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.arr)
            })
        }
    }
    _push(rowData) {
        this.arr.push(rowData);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.arr)
        })

    }
    render() {
        return (
            <View>

                <TextInput style={styles.container}

                    placeholder="Type Something here !"
                    value={this.state.object}
                    onChangeText={(text) => this.setState({ object: text })}
                />
                
                <Button  color="green" onPress={() => this._push(this.state.object)} title="Push"></Button>
                <View style={styles.buttoncontainer}>
                <Button color="red" onPress={() => this._pop()} title="Pop"></Button></View>
                <ListView style={styles.table}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        )
        

        }
    }
const styles = StyleSheet.create({
   

    buttoncontaner:{
      marginTop : 2
    }, 
   
    table:{ 
    borderWidth : 2,
    backgroundColor :'yellow'
       

    }
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);