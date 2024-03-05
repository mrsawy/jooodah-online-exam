/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
// import { faker } from '@faker-js/faker';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import CircularProgress from '@mui/material/CircularProgress';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { getMain, setMain, setIsSet, setMainThunk } from './../../../store/main/mainSlice';

// ----------------------------------------------------------------------

export default function AppView() {
  const dispatch = useDispatch();
  const { main, msgIsSet, isLoading, isError, message } = useSelector((s) => s.main);
  useEffect(() => {
    dispatch(getMain());
  }, [dispatch]);
  useEffect(() => {
    if (msgIsSet) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Massage Is Set  👍',
      }).then(() => {
        dispatch(setIsSet(false));
      });
    }

    if (isError) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: message,
      });
    }
  }, [isError, message, dispatch, msgIsSet]);

  const [lang, setLang] = useState(`ar`);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi Dreams Boat, Welcome back 👋
      </Typography>

      <Box width="100%" padding={3} display="flex" justifyContent="center">
        <ToggleButtonGroup
          color="primary"
          value={lang}
          exclusive
          onChange={(e) => {
            setLang(e.target.value);
          }}
          aria-label="Platform"
        >
          <ToggleButton value="ar">Arabic</ToggleButton>
          <ToggleButton value="en">English</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <TextField
        id="outlined-multiline-flexible"
        label="Here Goes The Main Massage That Wil Be Sent To The Audience ."
        multiline
        rows={17}
        fullWidth
        variant="outlined"
        value={main}
        onChange={(newValue) => {
          dispatch(setMain(newValue.target.value));
        }}
        style={{ direction: lang === `ar` ? `rtl` : `ltr` }}
      />
      <Box width="100%" padding={3} display="flex" justifyContent="center">
        <Button
          onClick={() => {
            dispatch(setMainThunk(main));
          }}
          variant="contained"
          endIcon={!isLoading ? <SendIcon /> : null}
        >
          {!isLoading ? `Submit` : <CircularProgress />}
        </Button>
      </Box>
    </Container>
  );
}
