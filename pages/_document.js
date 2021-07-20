import Document from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";
import { ServerStyleSheet } from "styled-components";

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    // react-jss
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();

    // styled components
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <>
            {/* react-jss + styled components */}
            <JssProvider registry={registry} generateId={generateId}>
              {sheet.collectStyles(<App {...props} />)}
            </JssProvider>
            {/* only react-jss */}
            {/*
            <JssProvider registry={registry} generateId={generateId}>
              {sheet.collectStyles(<App {...props} />)}
            </JssProvider>
            */}
          </>
        )
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
          {sheet.getStyleElement()}
        </>
      )
    };
  }
}
