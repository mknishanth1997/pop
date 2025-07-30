import { useState } from 'react';
import './Form.css';
import { useToast } from '../Context-Api/ToastProvider';
const VARIANT = ['notice', 'warning', 'success', 'error'];
export function PopForm() {
  const { addToast } = useToast(); // this must work
  const [comment, setComment] = useState('');
  const [variantSelected, setVariantSelected] = useState(VARIANT[0]);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addToast({
          id: crypto.randomUUID(),
          variant: variantSelected,
          message: comment,
        });
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
                }}
              />
              {option}
            </label>
          );
        })}
      </div>
      <div className="buttons">
        <button>Pop</button>
      </div>
    </form>
  );
}
