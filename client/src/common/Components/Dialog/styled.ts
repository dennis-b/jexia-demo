import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const ModalCloseButton = styled.div`
  cursor: pointer;
  margin: 2rem;
  margin-left: auto;
  margin-bottom: 0;
`
export const ModalCloseIcon = styled(CloseIcon)`
 position: absolute;
 right: 0;
 border: solid 1px;
 border-radius: 50%;
 margin-right: 2rem;
 color :  ${({ theme }) => theme.global.text.pink};};
`

export const DialogLoaderMask: any = styled.div`
    background-color: #80808070;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

