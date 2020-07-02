import React from 'react';
import Container from '@material-ui/core/Container';

const Text = ({type = "title", children, padding = 0, margin = 0, _styles = {}})=>{
    
    return (
        <React.Fragment>
            <Container maxwith={"sm"} style={
                {
                    padding: `${padding}rem`,
                    margin: `${margin}rem`
                }
            }>
                {type == "title" ? <h1>{children}</h1> : <h3>{children}</h3>}
            </Container>
        </React.Fragment>
    )
}

export {Text};