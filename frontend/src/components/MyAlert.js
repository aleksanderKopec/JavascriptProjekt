import React from 'react';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function MyAlert(props)
{
    return(
        <Alert severity={props.severity}>
            <AlertTitle>{props.title}</AlertTitle>
            {props.value}
        </Alert>
    )
}

export default MyAlert