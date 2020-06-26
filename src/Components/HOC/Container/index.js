import { CustomContainer } from './Container'
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  return {
    layoutMode: state.layoutMode,
    auth: state.isAuth,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: null
  } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(CustomContainer);

// const mapStateToProps = (state, props) => {
//   return {
//       isClicked: state.isClicked,
//       layoutMode: state.layoutMode
//   }
// }
// /**
// *
// * @param dispatch
// * @param props
// * @returns {{dispatchAlert: dispatchAlert}}
// *
// * @note Maybe refactor this function into a bindActionCreators
// */
// const mapDispatchToProps = (dispatch, props) => {
//   return {
//       dispatchAlert: ()=> {
//           dispatch(actionCreators.alert());
//       }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);