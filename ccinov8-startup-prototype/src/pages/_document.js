import Navbar from '@/components/Navbar';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/images/logo.png" type="image/x-icon" />
            </Head>
            <body>
                <Navbar />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
