interface AuthState {
    uid: string;
    name: string;
}

export type AuthReducerType =
    | { type: '[auth] login'; payload: { uid: string; name: string } }
    | { type: '[auth] logout' };

export const authReducer = (
    state: AuthState = {} as AuthState,
    action: AuthReducerType
): AuthState => {
    switch (action.type) {
        case '[auth] login':
            return {
                uid: action.payload.uid,
                name: action.payload.name,
            };
        case '[auth] logout':
            return {
                uid: '',
                name: '',
            };
        default:
            return state;
    }
};
