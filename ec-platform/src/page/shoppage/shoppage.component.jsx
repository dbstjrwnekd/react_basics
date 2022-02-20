import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { getCollectionDatas } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

function ShopPage({ updateCollections }) {
    const unsubscribeFromSnapshot = null;

    useEffect(() => {
        async function getShopData() {
            const shopData = await getCollectionDatas('collections');
            updateCollections(shopData);
        }
        getShopData();
    }, []);

    return (
        <div className="shop-page">
            <Routes>
                <Route path={":collectionId"} element={<CollectionPage />} />
                <Route path={""} element={<CollectionsOverview />} />
            </Routes>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);