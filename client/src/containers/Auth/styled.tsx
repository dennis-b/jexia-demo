import { SpText } from 'common';
import styled from 'styled-components';


export const StAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(128,128,128,0.46);
  height: 100%;
`;


export const AuthModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  background-color: white;
  width: 40%;
  padding: 2rem;
`;


export const AuthRedirectLink = styled(SpText)`
  cursor: pointer;
  color: #4290ff;
  text-decoration: underline;

`
