import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {actionCreators} from '../../Redux/Actions/Button';
import store from "../../Redux/Store/store";
import Button from '@material-ui/core/Button';

const CustomButton = ({value, color})=>{

    const dispatchAction = () => {

        props.dispatchAlert();
    }

    useEffect(()=>{
        // console.log(`Props from <CustomButton//>: `, props);
    })

    return (
        <Button onClick={dispatchAction} variant={"contained"} color={color}>{value}</Button>
    )
}

// mapStateToProps

const mapStateToProps = (state, props) => {
    return {
        isClicked: state.isClicked,
        layoutMode: state.layoutMode
    }
}
/**
 *
 * @param dispatch
 * @param props
 * @returns {{dispatchAlert: dispatchAlert}}
 *
 * @note Maybe refactor this function into a bindActionCreators
 */
const mapDispatchToProps = (dispatch, props) => {
    return {
        dispatchAlert: ()=> {
            dispatch(actionCreators.alert());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);