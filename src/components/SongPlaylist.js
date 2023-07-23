import { createRandomSong } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../store';

function SongPlayList() {
  const dispatch = useDispatch();

  const songPlayList = useSelector((state) => {
    return state.songs;
  });

  const handleSongAdd = (song) => {
    // const action = addSong(song);
    // dispatch(action);
    dispatch(addSong(song));
  };

  const handleSongRemove = (song) => {};

  const renderedSongs = songPlayList.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });
}
