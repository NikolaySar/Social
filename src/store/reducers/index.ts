import { combineReducers } from 'redux';
import { userReducer } from './user';
import { emailReducer } from './email';
import { passwordReducer } from './password';
import { postReducer } from './post';
import { companyReducer } from './company';

const rootReducer = combineReducers({
  user: userReducer,
  email: emailReducer,
  password: passwordReducer,
  post: postReducer,
  company: companyReducer,
});

export default rootReducer;
