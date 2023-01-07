import { Button, TextField, Typography } from "@suid/material";
import styled from "@suid/system/styled";


export const S = {
  boxContainer:styled('div')({
    display: 'flex',
    height: '100vh',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: "#232323"
  }),
  boxLogin: styled('div')({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1rem',
    padding: '4rem 2rem',
    backgroundColor: 'lightblue',
    "@media (min-width:640px)": {
      backgroundColor: '#f1f1f1',
   },
  }),
  title: styled(Typography)(() => ({

  })),
  boxForm: styled(TextField)((theme) => ({
    minWidth: '350px',
    '.MuiOutlinedInput-input': {
      color: '#232323',
    },
    ":hover": {
      cursor: 'pointer'
    },
  })),
  boxButton: styled('div')({
    padding: '1rem 0',
    display: 'flex'
  }),
  button: styled(Button)(()=>({
    width: '100%',
    paddingTop: '.7rem',
    paddingBottom: '.7rem'
  }))
}