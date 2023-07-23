import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      state.pop(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

export { store };

// console.log(songsSlice.actions.addSong('some song')); //slice + actions + type

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong('Some Song!'));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));

// store.dispatch({
//   type: 'song/removeSong',
// });

// const removeState = store.getState();
// console.log(JSON.stringify(removeState));
