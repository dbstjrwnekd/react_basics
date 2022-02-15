import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { useParams } from 'react-router';

import "./collection.styles.scss";
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

function CollectionPage({reduxState}) {
    const { collectionId } = useParams();
    const { title, items } = selectCollection(collectionId)(reduxState);
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    reduxState: state
});

export default connect(mapStateToProps)(CollectionPage);