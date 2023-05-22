import { createSlice } from "@reduxjs/toolkit";



const initialPlacesState = {
    places: [],
    placeTypes: [],
}

export const placesSlice = createSlice({
    name: 'places',
    initialState: initialPlacesState,
    reducers: {
        setPlaces: (state, action) => {
            state.places = action.payload;
        },
        setPlaceTypes: (state, action) => {
            state.placeTypes = action.payload;
        },
    }
})


export const { setPlaces, setPlaceTypes } = placesSlice.actions;
export default placesSlice.reducer;