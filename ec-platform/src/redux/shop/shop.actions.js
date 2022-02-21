import { getCollectionDatas } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return async dispatch => {
        dispatch(fetchCollectionsStart());
        try{
        const shopData = await getCollectionDatas('collections');
        dispatch(fetchCollectionsSuccess(shopData));
        } catch (error) {
            dispatch(fetchCollectionsFailure(error.message));
        }
    }
}
