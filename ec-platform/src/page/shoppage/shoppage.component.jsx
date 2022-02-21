import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync, updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ isCollectionFetching, fetchCollectionsStartAsync }) {
    
    useEffect(() => {
        fetchCollectionsStartAsync();
    }, []);

    return (
        <div className="shop-page">
            <Routes>
                <Route path={":collectionId"} element={<CollectionPageWithSpinner isLoading={isCollectionFetching} />} />
                <Route path={""} element={<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />} />
            </Routes>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);