import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsOverViewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

function ShopPage({ fetchCollectionsStart }) {
    
    useEffect(() => {
        fetchCollectionsStart();
    }, []);

    return (
        <div className="shop-page">
            <Routes>
                <Route path={":collectionId"} element={<CollectionPageContainer />} />
                <Route path={""} element={<CollectionsOverViewContainer />} />
            </Routes>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);