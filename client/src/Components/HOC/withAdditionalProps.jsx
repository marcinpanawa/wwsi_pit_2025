import React, { Component } from 'react';

const withAdditionalProps = (WrappedComponent) => {
    return class extends Component {
        render() {
            const timestamp = Date.now();

            // W komponentach klasowych dostęp do propsów 
            // uzyskujemy poprzez this.props
            return (
                <WrappedComponent
                    {...this.props}
                    timestamp={timestamp}
                />
            );
        }
    };
};

export default withAdditionalProps;