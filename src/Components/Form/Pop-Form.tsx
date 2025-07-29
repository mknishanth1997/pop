import { useState } from 'react';
import { Button } from '../Button-Component/Button';
import './Pop-Form.css';
const VARIANT = ['notice', 'warning', 'success', 'error'];
export function PopForm({
  setPopFormDetails,
  setsLiveToastOn,
  isLiveToastOn,
  setToasts,
  handleClick,
}) {
  function onclick() {
    setsLiveToastOn(!isLiveToastOn);
    console.log('clicked');
  }

  const [comment, setComment] = useState('');
  const [variantSelected, setVariantSelected] = useState(VARIANT[0]);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setToasts(prev => [
          ...prev,
          {
            id: crypto.randomUUID(), // or use uuid()
            variant: variantSelected,
            message: comment,
          },
        ]);
        setComment('');
      }}
    >
      <div className="message-area">
        <label htmlFor="message">Message</label>
        <textarea
          name="txt"
          id="message"
          value={comment}
          onChange={e => {
            setComment(e.target.value);
            const newArray = e.target.value;
            setPopFormDetails(prev => [newArray, prev[1]]);
          }}
        ></textarea>
      </div>
      <div className="form-checkbox">
        <h6>Variant:</h6>
        {VARIANT.map(option => {
          return (
            <label key={option}>
              <input
                type="radio"
                name="variant-selector"
                id={option}
                value={option}
                checked={option === variantSelected}
                onChange={event => {
                  setVariantSelected(event.target.value);
                  const newArray = event.target.value;
                  setPopFormDetails(prev => [prev[0], newArray]);
                }}
              />
              {option}
            </label>
          );
        })}
      </div>
      <div className="buttons">
        <Button>Pop</Button>
        <Button onclick={handleClick}>Live Toggle</Button>
      </div>
    </form>
  );
}
