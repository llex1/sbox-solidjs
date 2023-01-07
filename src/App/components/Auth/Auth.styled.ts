import { TextField } from "@suid/material";
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
    ":hover": {
      // backgroundColor: 'orange',
      cursor: 'pointer'
    },
    ":first-child": {
      // border: '1px solid green'
    },
    '.MuiOutlinedInput-input': {
      color: 'red !important',
    }
  }),
  boxForm: styled(TextField)((theme) => ({
    minWidth: '350px',
  })) 
}