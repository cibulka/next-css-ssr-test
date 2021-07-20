import { Global, css } from "@emotion/react";
import "tailwindcss/tailwind.css";

import "../styles/global.css";
import { globalEmotionStyles } from "../styles/emotion";
import useJssStyles from "../styles/jss";

function MyApp({ Component, pageProps }) {
  useJssStyles();
  return (
    <>
      <Global
        styles={css`
          .emotion-red {
            color: red !important;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
