import Document, { Html, Head, Main, NextScript } from 'next/document'
import { fireUIJS } from 'src/constants'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument