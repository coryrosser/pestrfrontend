export default (state = {}, action) => {
    switch (action.type) {
        
        case 'FETCH_GROUPS':
            return {
                ...state,
                groups: action.groups
            }
        case 'SET_ACTIVE':
            return {
                ...state,
                activeGroup: action.group
            }
        case 'CREATE_GROUP':
            return {
                ...state,
                isLoggedIn: true,
                groups: action.group
            }
        default:
            return state;
    }
}