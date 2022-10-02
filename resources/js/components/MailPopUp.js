import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    LinearProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import PropTypes from 'prop-types';

function MailPopUp({ show, onClose, onSubmit, defaultContent }) {
    const emitClose = () => {
        onClose();
    };

    return (
        <Dialog open={show} onClose={emitClose}>
            <DialogTitle>Send Email</DialogTitle>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    content: ''
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        onSubmit(values);
                        emitClose();
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting }) => (
                    <Form>
                        <DialogContent>
                            <DialogContentText>
                                Please enter your email address here. We will send updates
                                occasionally.
                            </DialogContentText>
                            <Field
                                component={TextField}
                                name="name"
                                type="text"
                                label="Name"
                                autoFocus
                                required
                                margin="dense"
                                fullWidth
                                variant="standard"
                            />
                            <Field
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                                required
                                margin="dense"
                                fullWidth
                                variant="standard"
                                sx={{marginTop: 3}}
                            />
                            <Field
                                component={TextField}
                                type="tel"
                                label="Phone Number"
                                name="phone"
                                margin="dense"
                                fullWidth
                                variant="standard"
                                sx={{marginTop: 3}}
                            />
                            <Field
                                component={TextField}
                                type="text"
                                label="Content"
                                name="content"
                                margin="dense"
                                multiline
                                rows={4}
                                fullWidth
                                value={defaultContent}
                                variant="outlined"
                                sx={{marginTop: 3}}
                            />
                            {isSubmitting && <LinearProgress />}
                        </DialogContent>
                        <DialogActions>
                            <Button color="error" onClick={emitClose}>
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                endIcon={<SendIcon />}
                            >
                                Send
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
}

MailPopUp.propTypes = {
    defaultContent: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func
};

// Specifies the default values for props:
MailPopUp.defaultProps = {
    defaultContent: '',
    show: false,
    onClose: () => {},
    onSubmit: () => {}
};

export default MailPopUp;
