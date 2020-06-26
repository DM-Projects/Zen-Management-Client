import Login from "./Login";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from "../../Redux/Actions/Login/login";

const mapDispatchToProps = (dispatch) => ({
    register: bindActionCreators(register, dispatch)
})

const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, mapDispatchToProps)(Login);