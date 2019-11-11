import Typography from '@material-ui/core/Typography';
import { LayoutProps } from 'common';
import isString from 'lodash/isString';
import styled, { createGlobalStyle } from 'styled-components';
import { css } from 'utils';


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: any) => theme.global.home.page.bgColor};
  }
  
  .form-element{
    flex:1;
    position: relative;
    & .error{
      position: absolute;
    }
    
    
  }
  .image-gallery-slides {
    padding: 0rem 1rem 0px 1rem;
  }
  a.image-gallery-thumbnail {
    width: 60px;
  }
  .image-gallery-slide {
    border: solid 1px gainsboro;
    height: 200px;
}
  
  .pagination{
    display: flex;
    list-style: none;
    margin: 0;
    margin-bottom: 1rem;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
    
    li{
      cursor: pointer;
      padding: 0.5rem;
      color: #6c6c6c;
      border-radius: 5px;
      &.active{
        background: #F62F5E;
        color: white;
      }
    }
  }
`;

export const ContentRoot = styled.div.attrs({ className: 'app-main' })`
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;

const geCssValue = value => !value ? '' : isString(value) ? value : `${value}rem`;

export const MarginCss = css`
  && {
    margin: ${({ m }: LayoutProps) => geCssValue(m)};
    margin-bottom: ${({ mb }: LayoutProps) => geCssValue(mb)};
    margin-top: ${({ mt }: LayoutProps) => geCssValue(mt)};
    margin-left: ${({ ml }: LayoutProps) => geCssValue(ml)};
    margin-right: ${({ mr }: LayoutProps) => geCssValue(mr)};
  }
`;

export const PaddingCss = css`
 && {
   padding-bottom: ${({ pb }: LayoutProps) => geCssValue(pb)};
   padding-top: ${({ pt }: LayoutProps) => geCssValue(pt)};
   padding-left: ${({ pl }: LayoutProps) => geCssValue(pl)};
   padding-right: ${({ pr }: LayoutProps) => geCssValue(pr)};
   padding: ${({ p }: LayoutProps) => geCssValue(p)};
  }
`;

export const StyledText = styled(Typography)`
 &&{
   color : ${({ textcolor }: any) => textcolor && textcolor};
   font-size: ${({ size }: any) => size && size};
   font-weight: ${({ weight }: any) => weight && weight};
  }
`;

export const Margin = styled.div`
  ${MarginCss}
`;
