import { css } from '@emotion/react'
import { colors, fonts } from 'utils/constants'

export const styles = css`
  @font-face {
    font-family: ${fonts.roboto};
    src: local(""),
      url("/assets/fonts/RobotoSlab-VariableFont_wght.ttf") format("truetype");
  }

  * {
    box-sizing: border-box;
    // border: 1px solid red;
  }

  html,
  body {
    height: 100%;
    font-family: ${fonts.openSans};
    color: ${colors.white};
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.roboto};
    margin: 0;
  }

  a {
    text-decoration: none;
  }

`;