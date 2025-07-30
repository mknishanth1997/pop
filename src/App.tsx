import './App.css';
import { ToastProvider } from './Context-Api/ToastProvider';
import { Pop_Page } from './Form/Pop-page/Pop-page';

function App() {
  return (
    <ToastProvider>
      <Pop_Page></Pop_Page>
    </ToastProvider>
  );
}

export default App;
