import React from 'react'
import 'loaders.css/loaders.css'
import ContentLoader from "react-content-loader";

export const ChatLoader = props => (
    <ContentLoader
        height={296}
        width={325}
        speed={1}
        primaryColor="#f8f9fa"
        secondaryColor="#F7F5F3"
        {...props}>
        <rect x="8" y="8" rx="5" ry="5" width="320" height="40"/>
        <rect x="8" y="56" rx="5" ry="5" width="320" height="40"/>
        <rect x="8" y="104" rx="5" ry="5" width="320" height="40"/>
        <rect x="8" y="152" rx="5" ry="5" width="320" height="40"/>
        <rect x="8" y="200" rx="5" ry="5" width="320" height="40"/>
        <rect x="8" y="248" rx="5" ry="5" width="320" height="40"/>
    </ContentLoader>
);

export const MessageLoader = props => (
    <ContentLoader
        height={700}
        width={665}
        speed={1}
        primaryColor="#fff"
        secondaryColor="#F7F5F3"
        {...props}>

        <rect x="8" y="8" rx="5" ry="5" width="656" height="100"/>
        <rect x="8" y="116" rx="5" ry="5" width="656" height="200"/>
        <rect x="8" y="324" rx="5" ry="5" width="656" height="50"/>
        <rect x="8" y="382" rx="5" ry="5" width="656" height="300"/>
    </ContentLoader>
);