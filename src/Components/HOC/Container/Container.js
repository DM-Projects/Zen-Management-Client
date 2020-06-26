import {Fragment, useEffect} from 'react';
import React from "react";
import Container from '@material-ui/core/Container'

const CustomContainer = (props)=>{
    
    
    useEffect(()=>{
        
        console.log("Props from CustomContainer: ", props);
    })
    return (
        <Fragment>
            <Container maxWidth={"md"} style={{marginTop: "5rem", backgroundColor: "rgba(120, 100, 150)", padding: "3rem 5rem"}}>
                {props.children}
            </Container>
        </Fragment>
    )
}

/**
 * @TODO Conectar Redux antes de exportar cualquier componente
 */

export { CustomContainer }