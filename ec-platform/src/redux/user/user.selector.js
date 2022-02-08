import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCurrentUSer = createSelector(
    [selectUser],
    (user) => user.currentUser
);
