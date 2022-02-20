import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { getCollectionDatas } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ updateCollections }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getShopData() {
            const shopData = await getCollectionDatas('collections');
            updateCollections(shopData);
            setLoading(false);
        }
        getShopData();
    }, []);

    return (
        <div className="shop-page">
            <Routes>
                <Route path={":collectionId"} element={<CollectionPageWithSpinner isLoading={loading} />} />
                <Route path={""} element={<CollectionsOverviewWithSpinner isLoading={loading} />} />
            </Routes>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);