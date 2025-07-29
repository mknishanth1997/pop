// ToastContext.jsx
import { createContext, useContext, useState } from 'react';
import { Toast } from '../Toast-Component/Toast';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast({ message, variant }) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    setToasts(prev => [...prev, newToast]);
  }

  function removeToast(id) {
    setToasts(prev => prev.filter(t => t.id !== id));
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <div className="toaster">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            variant={toast.variant}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a <ToastProvider>');
  return context;
}
