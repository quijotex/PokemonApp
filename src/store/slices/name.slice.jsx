import { createSlice } from '@reduxjs/toolkit';

const initialState = ""
export const nameSlice = createSlice({
		name: 'name',
        initialState: initialState,
        reducers: {
            setName: (state, action) => { 
                 state = initialState
                 action.payload
        }
    }
})

export const { setName  } = nameSlice.actions;

export default nameSlice.reducer;