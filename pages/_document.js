import {Html, Head, Main, NextScript} from "next/document";
import {Navbar} from "@/components/nav";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Mazin Mazinani</title>
            </Head>
            <body >
            <Navbar/>
            <div className="flex flex-col content">
                <Main />
            </div>
            <NextScript/>
            </body>
        </Html>
    );
}
