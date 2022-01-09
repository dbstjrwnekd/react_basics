import React, {useState} from 'react';
import CollectionsPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

function ShopPage() {
    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div>
            <h1>Shop page</h1>
            {
                collections.map(({id, title, items}) => (
                    <CollectionsPreview key={id} title={title} items={items} />
                ))
            }
        </div>
    );
}

export default ShopPage;