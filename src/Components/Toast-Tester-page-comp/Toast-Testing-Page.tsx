import { useState } from 'react';
import { PopForm } from '../Form/Pop-Form';
import { Toast } from '../Toast-Component/Toast';
import './Toast-Testing-page.css';

export function ToastPage() {
  const [isLiveToastOn, setsLiveToastOn] = useState(false);
  const [popFormDetails, setPopFormDetails] = useState(['', '']);

  console.log(popFormDetails);

  return (
    <>
      <div className="pop-form">
        <div>
          {isLiveToastOn && <Toast variant={popFormDetails[1]} message={popFormDetails[0]}></Toast>}
          <PopForm
            setPopFormDetails={setPopFormDetails}
            setsLiveToastOn={setsLiveToastOn}
            isLiveToastOn={isLiveToastOn}
          ></PopForm>
        </div>
      </div>
    </>
  );
}
