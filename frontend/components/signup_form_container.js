import { connect } from 'react-redux';
import sessionForm from './session_form';
import { signup } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  // debugger 
  return {
    errors: state.errors,
    formType: 'signup'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(sessionForm));
