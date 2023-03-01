import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useTheme} from "next-themes";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

export default function Container(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    const router = useRouter();
    const meta = {
        title: "Santosh Bhulun – Full Stack Javascript Developer",
        description: `React developer, JavaScript enthusiast, and freelancer.`,
        image: "https://www.santoshbhulun.com.np/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.8ae777fe.jpeg&w=640&q=75",
        type: "website",
    };

    const [mounted, setMounted] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();
    const darkTheme = resolvedTheme === "dark";
    useEffect(() => setMounted(true), []);

    const changeTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta
                    property="og:url"
                    content={`https://santoshbhulun.com.np${router.asPath}`}
                />
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="Santosh Bhulun"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                <meta property="og:image:alt" content={meta.title}/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                <meta name="twitter:image" content={meta.image}/>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/images/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            </Head>
            {
                mounted && (
                    <><Header/>
                        <div>{props.children}</div>
                        <Footer/></>
                )
            }
        </>
    )

}