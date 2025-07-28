import { useState } from 'react';
import { Button } from '../Button-Component/Button';
import './Pop-Form.css';
export function PopForm() {
  const [comment, setComment] = useState('');
  const [variantSelected, setVariantSelected] = useState(VARIANT[0]);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <div className="message-area">
        <label htmlFor="message">Message</label>
        <textarea
          name="txt"
          id="message"
          value={comment}
          onChange={e => setComment(e.target.value)}
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
                onChange={event => setVariantSelected(event.target.value)}
              />
              {option}
            </label>
          );
        })}
      </div>
      <div className="buttons">
        <Button>Pop</Button>
        <Button>Live</Button>
      </div>
    </form>
  );
}

const VARIANT = ['notice', 'warning', 'success', 'error'];
