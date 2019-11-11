import styled from 'styled-components';
import { Grid } from "@material-ui/core";

export const StTodoContainer = styled.div`
   width: 100%;
   height: 100%;
   background-color: white;
`;

export const StLoaderContainer = styled(Grid)`
   background-color: rgba(128,128,128,0.34);
   height: 100%;
   justify-content: center;
   align-items: center;
`;


export const StTitle = styled.h1`
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
  margin: 0;
`;

export const StTodoContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: auto;
  padding: 0;
`;

export const StBox = styled.div`
  padding-left: calc(15px + 40px);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  display: flex;
  min-height: 3.5rem;
`;
export const StInput = styled.input`
  text-decoration: ${({ done }) => done ? 'line-through' : 'none'};
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  display: block;
  transition: color 0.4s;
  border: 0;
  border: none;
  border-bottom: 1px solid #ededed;
  background: rgba(0, 0, 0, 0.003);
  position: relative;
  margin: 0;
  width: calc(100% - 175px);
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  outline: none;
  color: inherit;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
`;

export const StInputLabel = styled.label`
      cursor: pointer;
    background: #d6d6d6;
    font-weight: bold;
    text-align: center;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StActions = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.3rem;
   
`;
