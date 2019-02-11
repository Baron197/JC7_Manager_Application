import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { getEmployeeList } from '../actions';

class EmployeeList extends Component {
    static navigationOptions = {
        drawerLabel: 'Employee List',
    };

    componentDidMount() {
        this.props.getEmployeeList();
    }

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

export default connect(null, { getEmployeeList })(EmployeeList);
