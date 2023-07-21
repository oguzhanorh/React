import { useReducer, useRef } from 'react';
import { formReducer, INITIAL_STATE } from './FormReducer';
import { FormActionTypes } from './FormActionTypes';

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const tagRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: FormActionTypes.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const increment = () => {
    dispatch({
      type: FormActionTypes.INCREASE,
    });
  };
  const decrement = () => {
    dispatch({
      type: FormActionTypes.DECREASE,
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split('');
    tags.foreach((tag) => {
      dispatch({ type: 'ADD_TAG', payload: tag });
    });
  };

  console.log(state);

  return (
    <div>
      <form>
        <input type="text" placeholder="Title" onChange={handleChange} />

        <input type="text" placeholder="Desc" onChange={handleChange} />
        <input type="number" placeholder="Price" onChange={handleChange} />
        <p>Category</p>
        <select name="category">
          <option value="sneakers">Sneakers</option>
          <option value="t-shirts">T-Shirt</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea ref={tagRef} placeholder="Seperate tags with commas..." />
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small key={tag}>{tag}</small>
          ))}
        </div>
        <div className="quantity">
          <button onClick={increment} type="button">
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button onClick={decrement} type="button">
            +
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
