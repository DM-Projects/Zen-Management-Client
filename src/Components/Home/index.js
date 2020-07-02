import Home from './Home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state, props)=>{
  return {
    isAuth: state.isAuth,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);