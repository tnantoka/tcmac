import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Dashboard from '../components/Dashboard';

function mapStateToProps({ user }) {
  return {
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    moveToRoot: () => dispatch(push('/')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
