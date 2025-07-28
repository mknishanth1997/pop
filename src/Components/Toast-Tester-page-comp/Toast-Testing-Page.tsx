import { useState } from 'react';
import { PopForm } from '../Form/Pop-Form';
import { Toast } from '../Toast-Component/Toast';
import './Toast-Testing-page.css';

export function ToastPage() {
  const [isLiveToastOn, setsLiveToastOn] = useState(false);
  const [popFormDetails, setPopFormDetails] = useState(['', '']);
  const [toasts, setToasts] = useState([]);
  console.log({ toasts });
  function removeToast(toastId) {
    setToasts(prev => prev.filter(t => t.id !== toastId));
  }

  function popClose() {
    setsLiveToastOn(!isLiveToastOn);
  }
  console.log(popFormDetails);

  return (
    <>
      <div className="pop-form">
        <div>
          {isLiveToastOn && (
            <Toast
              onClose={popClose}
              variant={popFormDetails[1]}
              message={popFormDetails[0]}
            ></Toast>
          )}
          <PopForm
            setPopFormDetails={setPopFormDetails}
            setsLiveToastOn={setsLiveToastOn}
            isLiveToastOn={isLiveToastOn}
            setToasts={setToasts}
          ></PopForm>
        </div>
        <div className="toaster">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              message={toast.message}
              variant={toast.variant}
              onClose={() => removeToast(toast.id)}
            ></Toast>
          ))}
        </div>
      </div>
    </>
  );
}
