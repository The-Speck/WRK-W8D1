import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './sessions_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
