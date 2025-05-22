import * as UserActionCreators from './user';
import * as EmailActionCreators from './email';
import * as PasswordActionCreators from './password';
import * as PostActionCreators from './post';
import * as CompanyActionCreators from './company';

export default {
  ...UserActionCreators,
  ...EmailActionCreators,
  ...PasswordActionCreators,
  ...PostActionCreators,
  ...CompanyActionCreators,
};
