import React from 'react';

import ProductCard from './ProductCard/ProductCard.js';
import ProductGallery from './ProductGallery/ProductGallery.js';

class Overview extends React.Component {
    render() {
        return (
            <div className="overview-container">
                <ProductGallery />
                <ProductCard />
            </div>
        )
    }
}

export default Overview;