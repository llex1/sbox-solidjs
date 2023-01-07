import { TextField } from "@suid/material";
import { Component } from "solid-js";

import { S } from './Auth.styled'

const Auth: Component = () => {
  return (
    <S.boxContainer>
      <S.boxLogin>
        <S.boxForm label="login" sx={{mb: '1rem'}}/>
        <S.boxForm label="Password"/>
      </S.boxLogin>
    </S.boxContainer>
  )
}

export default Auth