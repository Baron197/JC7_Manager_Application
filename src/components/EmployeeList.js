import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

class EmployeeList extends Component {
    render() {
        return (
            <View>
                <Header
                        placement="left"
                        leftComponent={{ 
                            icon: 'menu', 
                            color: '#fff', 
                            onPress: () => this.props.navigation.toggleDrawer() 
                        }}
                        centerComponent={{ text: 'List Employee', style: { color: '#fff' }}}
                />
                <Text>Ini Employee List</Text>
            </View>
        );
    }
}

export default EmployeeList;
