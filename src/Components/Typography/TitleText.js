import React from 'react';
import Container from '@material-ui/core/Container';

const Text = ({type = "title",
                  children,
                  _padding = {top: 0, botton: 0, left: 0, right: 0},
                  _margin = {top: 0, botton: 0, left: 0, right: 0}, _styles = {}})=>{
    
    return (
        <React.Fragment>
            <Container maxwith={"sm"}
                       style={
                           _styles != null ? {margin: _margin, padding: _padding} : _styles}
            >
                {type == "title" ? <h1>{children}</h1> : <h3>{children}</h3>}
            </Container>
        </React.Fragment>
    )
}

export {Text};