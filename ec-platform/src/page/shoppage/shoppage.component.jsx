import React from 'react';
import CollectionsPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ShopPage({ collections }) {
return (
        <div>
            {
                collections.map(({id, title, items}) => (
                    <CollectionsPreview key={id} title={title} items={items} />
                ))
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);