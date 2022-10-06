import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/PPEditorialNew-Regular.woff"
            rel="preload"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/static/fonts/PPEditorialNew-Regular.woff2"
            rel="preload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
