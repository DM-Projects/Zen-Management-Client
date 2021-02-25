import {Fragment, useEffect} from 'react';
import React from "react";
import Container from '@material-ui/core/Container'

const styles = {marginTop: "5rem", backgroundColor: "rgba(120, 100, 150)", padding: "3rem 5rem"}

const CustomContainer = (props)=>{
    

    return (
        <Fragment>
            <Container maxWidth={"md"} style={styles}>
                {props.children}
            </Container>
        </Fragment>
    )
}

/**
 * @TODO Conectar Redux antes de exportar cualquier componente
 */

export { CustomContainer }