import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/logo.jpg" />
                </Head>
                <body data-theme="light">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument