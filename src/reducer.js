export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
    //REMOVE TOKEN AFTER FINISHING DEVELOPING
    //token: "BQBxDak8q42v1-LOGhFQz_NkCE5IMNLMNz2pqsJ2sHSPUEx3GnsTuYGR4cWuhvhxCTGoL-IXynoLZSwwFnFu6_N-13OPibHLSJ8ZAKxRJpUFSz0BmXO8afGVX-upm4f-CrUYcXR7_cz_2Wj6ydoJuD7RdymcHZY8SaBPUTz-JxZ--pdE4UnVuceV6Y9w4riS9QXsyfwIQGovEgPcfw",
};

const reducer = (state, action) => {
    console.log(action);
    //Action ->     TYPE, {PAYLOAD}
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;

    }
}

export default reducer;