interface UIState {
    loading: boolean;
    errMessage: string | null;
}

export type UIReducerAction =
    | { type: '[ui] set error'; payload: string }
    | { type: '[ui] clear error' }
    | { type: '[ui] start loading' }
    | { type: '[ui] finish loading' };

export const uiReducer = (state: UIState = {} as UIState, action: UIReducerAction): UIState => {
    switch (action.type) {
        case '[ui] set error':
            return {
                ...state,
                errMessage: action.payload,
            };
        case '[ui] clear error':
            return {
                ...state,
                errMessage: null,
            };
        case '[ui] start loading':
            return {
                ...state,
                loading: true,
            };
        case '[ui] finish loading':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
