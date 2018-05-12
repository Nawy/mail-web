import React from 'react';
import ContentLoader from "react-content-loader";

export const AddressLoader = props => (
    <ContentLoader
        height={164}
        width={323}
        speed={1}
        primaryColor="#f8f9fa"
        secondaryColor="#F7F5F3"
        {...props}>

        <rect x="8" y="8" rx="5" ry="5" width="307" height="31"/>
        <rect x="8" y="47" rx="5" ry="5" width="307" height="31"/>
        <rect x="8" y="86" rx="5" ry="5" width="307" height="31"/>
        <rect x="8" y="125" rx="5" ry="5" width="307" height="31"/>
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