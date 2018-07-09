import { connect } from 'react-redux';
import sessionForm from './session_form';
import { login } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
