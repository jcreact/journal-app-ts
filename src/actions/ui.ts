import { UIReducerAction } from '../reducers/uiReducer';

export const setErrorAction = (err: string): UIReducerAction => ({
    type: '[ui] set error',
    payload: err,
});

export const clearErrorAction = (): UIReducerAction => ({ type: '[ui] clear error' });

export const startLoading = (): UIReducerAction => ({ type: '[ui] start loading' });
export const finishLoading = (): UIReducerAction => ({ type: '[ui] finish loading' });
