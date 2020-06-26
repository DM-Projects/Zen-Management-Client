import Navbar from './Navbar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { map } from 'lodash'

/**
 * @Author Diego Matheus
 * @Date 06/25/2020
 */

 const mapStateToProps = (state, props) => {
   return {
     isAuth: state.isAuth,
     user: state.user
   }
 }


/**
 * export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
 * 
 * @summary
 * 
 * Export the component after being wired up by redux.
 * 
 * The first function @param mapStateToProps is a function that binds the incoming state from redux 
 * and maps it to the props of the component
 * 
 * const mapDispatchToProps = (dispatch) => ({
 * register: bindActionCreators(register, dispatch)
 * })
 * 
 * const mapStateToProps = (state) => ({user: state.user})
 * 
 * export default connect(mapStateToProps, mapDispatchToProps)(Login);
 */
 export default connect(mapStateToProps, null)(Navbar);