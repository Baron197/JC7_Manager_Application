import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_GETLIST_SUCCESS } from './types';

export const employeeUpdate = (prop, value) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = (name, phone, shift) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
        });
    };
};

export const getEmployeeList = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_GETLIST_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const employeeSave = (name, phone, shift, uid) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
            });
    };
};

export const employeeDelete = (uid) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });
        });
    };
};
