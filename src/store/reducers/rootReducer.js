import assignmentReducer from './assignmentReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';


const rootReducer = combineReducers({
  authentication: authReducer,
  assignment: assignmentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer