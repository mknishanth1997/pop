import { createContext, useContext, useState } from 'react';
import { Toast } from '../Toast-Component/Toast';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  // Add Toast
  function addToast({ message, variant }) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
      onclose,
    };
    setToasts(prev => [...prev, newToast]);
  }

  // Remove Toast
  function removeToast(id) {
    setToasts(prev => prev.filter(t => t.id !== id));
  }

  return (
    <>
      <ToastContext.Provider value={{ addToast, removeToast }}>
        {children}
        <div
          className="toaster
        r"
        >
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              message={toast.message}
              variant={toast.variant}
              onClose={() => removeToast(toast.id)}
            >
              {toast.message}
            </Toast>
          ))}
        </div>
      </ToastContext.Provider>
    </>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a <ToastProvider>');
  return context;
}
