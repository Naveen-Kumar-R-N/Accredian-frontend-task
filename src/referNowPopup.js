// src/ReferEarn.js
import React, { useState } from 'react';
import { Button, Modal, Box, TextField, Typography, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const ReferEarn = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        referrerName: '',
        referrerEmail: '',
        referrerPhone: '',
        refereeName: '',
        refereeEmail: '',
        refereePhone: '',
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        // Submit form data to backend API
        console.log(formData);
        axios.post('https://accredian-backend-task-sc30.onrender.com/api/referral', formData).then((res) => {
            alert('Referral submitted successfully');
            handleClose();
        }).catch((err) => {
            if (err.response.data === "Refered Successfully. Error sending email") handleClose();
            alert(err.response.data);
            console.log(err.response.data);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>Refer Now</Button>
            <Modal open={open} onClose={handleClose} BackdropProps={{ onClick: (e) => e.stopPropagation() }}>
                <Box sx={{ ...modalStyle, width: 400, backgroundColor: "rgb(255, 255, 255)",  border: "1px solid rgb(245, 158, 11)", borderRadius: "8px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 4px 40px" }}>
                    <Typography variant="h6" component="h2">Refer Now !!</Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'primary.main',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="referrerName"
                            label="Your Name"
                            fullWidth
                            required
                            margin="normal"
                            onChange={handleChange}
                        />

                        <TextField
                            name="referrerPhone"
                            label="Your Phone No."
                            type="number"
                            fullWidth
                            required
                            margin="normal"
                            onChange={handleChange}
                        />

                        <TextField
                            name="referrerEmail"
                            label="Your Email"
                            type="email"
                            fullWidth
                            required
                            margin="normal"
                            onChange={handleChange}
                        />
                        <TextField
                            name="refereeName"
                            label="Friend's Name"
                            fullWidth
                            required
                            margin="normal"
                            onChange={handleChange}
                        />


                        <TextField
                            name="refereePhone"
                            label="Friend's  Phone No."
                            type="number"
                            fullWidth
                            required
                            margin="normal"
                            onChange={handleChange}
                        />

                        <TextField
                            name="refereeEmail"
                            label="Friend's Email"
                            type="email"
                            fullWidth
                            required
                            margin="normal"
                            onChange={handleChange}
                        />
                        <Button type="submit" disabled={loading} variant="contained" sx={{marginTop: "12px"}} color="primary">
                            {loading ? <CircularProgress size={24}  /> : 'Submit'}
                        </Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default ReferEarn;
