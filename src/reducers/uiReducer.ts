interface UIState {
    loading: boolean;
    errMessage: string | null;
}

export type UIReducerAction =
    | { type: '[ui] set error'; payload: string }
    | { type: '[ui] clear error' }
    | { type: '[ui] loading' }
    | { type: '[ui] no loading' };

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
        default:
            return state;
    }
};
