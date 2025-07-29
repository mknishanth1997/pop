import './App.css';
import { ToastProvider } from './Components/Context-Api/Toast-Context';
import { ToastPage } from './Components/Toast-Tester-page-comp/Toast-Testing-Page';

function App() {
  return (
    <div>
      <ToastProvider>
        {' '}
        <ToastPage></ToastPage>
      </ToastProvider>
    </div>
  );
}

export default App;
