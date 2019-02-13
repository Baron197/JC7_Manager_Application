import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    NOT_LOGIN_YET
} from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null, 
    error: '',
    loading: false,
    checkedAuth: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED :
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED :
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS :
            return { ...INITIAL_STATE, user: action.payload, checkedAuth: true };
        case LOGIN_USER_FAIL :
            return { ...state, error: 'Authentication Failed.', loading: false };
        case LOGIN_USER : 
            return { ...state, loading: true, error: '' };
        case LOGOUT_USER:
            return { ...INITIAL_STATE, checkedAuth: true };
        case NOT_LOGIN_YET:
            return { ...INITIAL_STATE, checkedAuth: true };
        default :
            return state;
    }
};
