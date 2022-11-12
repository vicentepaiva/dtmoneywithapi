import 'styled-components';
import {defaultTheme} from '../styles/themes/defalut';

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}