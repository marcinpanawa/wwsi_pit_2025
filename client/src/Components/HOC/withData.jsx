import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

const withData = (WrappedComponent) => {
    return function (props) {
        const [fact, setFact] = useState(null);
        const data = "data";

        useEffect(() => {
            fetch('https://catfact.ninja/fact')
                .then(response => response.json())
                .then(data => setFact(data.fact));
        }, []);

        if (fact) return <WrappedComponent {...props} data={data} fact={fact} />
        else return <LoadingSpinner isFullScreen={true} />
    }
}

export default withData;