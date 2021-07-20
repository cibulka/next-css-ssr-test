// import { styled } from "@compiled/react";
import { css as cssed } from "cssed/macro";
import { styled as styledStyletron } from "styletron-react";
import styledComponents from "styled-components";

import nextCss from "./CssTest.module.css";
import nextScss from "./CssTest.module.css";

// import CompiledReactStrong from "../components/CompiledReactStrong";

const Styletron = styledStyletron("a", {
  color: "red"
});

const cssedStyles = cssed`
  .red {
    color: red;
  }
`;

const StyledTitle = styledComponents.a`
    color: red;
`;

export default function CssTest() {
  return (
    <>
      <style jsx>{`
        .styled-red {
          color: red;
        }
      `}</style>
      <div className="max-w-md ml-auto mr-auto mb-12">
        <p className="mb-4">
          Are those names <strong className="text-red-500">red</strong> both in
          client *and* server?
        </p>
        <p className="mb-4">
          Next.js names SSR as its first feature.
          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            Examples
          </a>{" "}
          do not specify that some solutions work in client only.
        </p>
        <p>
          Because of that I have no idea if following is expected behaviour or
          bad implementation.
        </p>
      </div>
      <ul className="text-sm md:grid grid-cols-2 gap-x-4 m-auto text-left">
        <li className="border-b pb-4 mb-4">
          ❌{" "}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss"
            className="text-red-500"
          >
            with TailwindCSS
          </a>
        </li>
        <li className="border-b pb-4 mb-4">
          ❌{" "}
          <a
            href="https://github.com/vercel/next.js/blob/canary/examples/with-next-css/"
            className={nextCss.red}
          >
            with Next CSS
          </a>
        </li>
        <li className="border-b pb-4 mb-4">
          ❌{" "}
          <a
            href="https://github.com/vercel/next.js/blob/canary/examples/with-next-sass"
            className={nextScss.red}
          >
            with Next SASS
          </a>
        </li>
        <li className="border-b pb-4 mb-4">
          ✅{" "}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/with-emotion"
            className="emotion-red"
          >
            with Emotion
          </a>
        </li>
        <li className="border-b pb-4 mb-4">
          🤷{" "}
          <Styletron
            color="red"
            href="https://github.com/vercel/next.js/blob/canary/examples/with-styletron/pages/index.js"
          >
            with Styletron
          </Styletron>{" "}
          - does not work
        </li>
        <li className="border-b pb-4 mb-4">
          ✅{" "}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/with-react-jss"
            className="jss-red"
          >
            with React-JSS
          </a>
        </li>
        <li className="border-b pb-4 mb-4">
          ✅{" "}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/with-styled-jsx"
            className="styled-red"
          >
            with builtin Styled
          </a>
        </li>
        <li className="border-b pb-4 mb-4">
          ✅{" "}
          <StyledTitle href="https://github.com/vercel/next.js/blob/canary/examples/with-styled-components">
            with Styled components
          </StyledTitle>
        </li>
        <li className="border-b pb-4 mb-4">
          ❌{" "}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/with-cssed"
            className={cssedStyles.red}
          >
            with cssed
          </a>
        </li>
        <li className="border-b pb-4 mb-4">
          ❌{" "}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples/with-next-css"
            className="stylecss-red"
          >
            with style.css from _app
          </a>
        </li>
      </ul>
    </>
  );
}
