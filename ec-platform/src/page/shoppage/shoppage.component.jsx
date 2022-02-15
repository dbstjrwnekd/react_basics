import React from 'react';
import { Route, Routes } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

function ShopPage() {
    return (
        <div className="shop-page">
            <Routes>
                <Route path={":collectionId"} element={<CollectionPage />} />
                <Route path={""} element={<CollectionsOverview />} />
            </Routes>
        </div>
    );
}

export default ShopPage;