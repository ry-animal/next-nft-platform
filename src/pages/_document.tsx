import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          {/* EditorJS stuff */}
          <NextScript />
          <script src="https://cdn.withpersona.com/dist/persona-v4.7.1.js"></script>
        </body>
      </Html>
    );
  }
}
