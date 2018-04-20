import React from 'react'
import Loader from 'react-loaders'
import 'loaders.css/loaders.css'

const LoaderCustom = () => (
    <div className="text-center">
        <Loader type="line-scale" active color="#343a40"/>
    </div>
);

export default LoaderCustom;