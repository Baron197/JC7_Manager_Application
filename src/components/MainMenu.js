import { DrawerNavigator } from 'react-navigation';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import Profile from './Profile';

export default DrawerNavigator(
    {
        EmployeeList: {
            screen: EmployeeList
        },
        AddNewEmployee: {
            screen: EmployeeCreate
        },
        EditEmployee: {
            screen: EmployeeEdit
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'EmployeeList',
        headerMode: 'none'
    }
);
