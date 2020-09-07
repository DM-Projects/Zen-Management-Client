import CustomEditor from './Editor';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { map } from 'lodash';

const mapStateToProps = (state, props)=>{
  return {
    isAuth: state.isAuth,
    user: state.user,
    theme: state.layoutMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomEditor);