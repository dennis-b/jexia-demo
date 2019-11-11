import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';


export interface ThemeInterface {
    primaryColor: string;
    primaryColorInverted: string;
}

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };

export function truncate(width) {
    return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export let windowWidth = document.documentElement.clientWidth;

window.addEventListener('resize', () => windowWidth = document.documentElement.clientWidth);
