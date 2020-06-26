import {Fragment} from 'react';
import React from "react";
import Container from '@material-ui/core/Container'

const CustomContainer = (props)=>{
    return (
        <Fragment>
            <Container maxWidth={"md"} style={{marginTop: "5rem"}}>
                {props.children}
            </Container>
        </Fragment>
    )
}

/**
 * @TODO Conectar Redux antes de exportar cualquier componente
 */

export {CustomContainer}