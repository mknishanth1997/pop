import error from '../../assets/error.png';
import notice from '../../assets/notice.png';
import warning from '../../assets/warning_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.png';
import success from '../../assets/success.png';
import './Toast.css';
const VARIANT_CONFIG = {
  error: {
    icon: error,
    textColor: '#991b1b',
    bgColor: '#fef2f2',
  },
  notice: {
    icon: notice,
    textColor: '#1d4ed8',
    bgColor: '#eff6ff',
  },
  warning: {
    icon: warning,
    textColor: '#92400e',
    bgColor: '#fff7ed',
  },
  success: {
    icon: success,
    textColor: '#065f46',
    bgColor: '#ecfdf5',
  },
};

export function Toast({ variant = 'notice', message = 'default', onClose }) {
  const { icon, textColor, bgColor } = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG['notice'];

  return (
    <div
      className="toast"
      style={{
        '--toast-bg': bgColor,
        '--toast-text': textColor,
      }}
    >
      <img className="toast-icon" src={icon} alt="icon" />
      <div className="toast-msg">{message}</div>
      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
}
