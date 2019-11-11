import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import styled from 'styled-components';
import { MarginCss, PaddingCss } from './Components/Layot';

// import { truncate } from 'utils';

export const Form = styled.form`
  width: 500px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  padding: 2rem;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const InputLabel = styled.label`
 color: white;
`;

export const InputError = styled.div`
 color: red;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.2rem;
`;

export const FormRow: any = styled(Grid).attrs({ container: true })`
//@ts-ignore
  margin-bottom: ${({ mb }) => mb ? `${mb}rem` : '1rem'};
`;

export const FormCol: any = styled(Grid).attrs({ item: true })`
`;


export const SpLink: any = styled.a.attrs(() => ({ href: 'javascript:;' }))`
 text-decoration: none;
 color: #0d609d;

 &:hover {
    text-decoration: underline;
 }
`;


export const SpLinkButton: any = styled.button.attrs(() => ({ type: 'button' }))`
    background: transparent;
    border: none;
    text-decoration: underline;
    color: ${({ disabled }) => disabled ? 'gray' : '-webkit-link'};
    cursor: ${({ disabled }) => disabled ? 'text' : 'pointer'};
    outline: none;
    font-size: ${({ size }: any) => size ? size : '1rem'};
    margin: 0;
    padding: 0;
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SpText: any = styled(Typography)`
  ${PaddingCss};
  ${MarginCss};
  &&{
   color : ${({ textcolor }: any) => textcolor && textcolor};
   font-size: ${({ size }: any) => size && size};
   font-weight: ${({ weight }: any) => weight && weight};
  }
`;

export const SpCardTitle: any = styled.h1`
    margin: 0 0 20px;
    font-size: 24px;
    color: #212121;
    font-weight: bold;
`;

export const FloatingCard: any = styled(Paper)`
    margin: auto;
    display: flex;

    body & {
        background-color: transparent;
    }
`;

export const AppLogo: any = styled.div`
    width: 100%;
    height: 35%;
    background: url("${({ theme }: any) => theme.global.images.logo}") no-repeat ;
    background-size: contain;
    margin-left: 1rem;
`;



