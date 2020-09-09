import React, { useState } from 'react';
import { useStyles } from './FreeDownloadForm';
import Button from '@material-ui/core/Button';

export default function Confirmation(props) {
    const classes = useStyles();
    const [disabled, setDisabled] = useState(false)

    function handleClick() {
        props.downloadHandler();
        // Button disabled for 7 seconds, to prevent to many download clicks
        setDisabled(true);
        setTimeout(() => setDisabled(false), 7000);
    }

    return (
        <div className="confirmation">
            <div className="confirmation-text">
                Thank you! Your download should start any second now.
                If it has not started within 15 seconds, click the button again
            </div>
            <div>
                <Button disabled={disabled}
                    className={classes.button}
                    onClick={handleClick}
                    variant="contained"
                    disableElevation>
                    Download
                </Button>
            </div>
        </div>
    );
}