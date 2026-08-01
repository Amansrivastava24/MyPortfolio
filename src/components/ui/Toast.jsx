import { Toaster } from 'react-hot-toast';

const Toast = () => (
  <Toaster
    position="bottom-right"
    toastOptions={{
      style: {
        background: 'rgba(17, 17, 20, 0.9)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        borderRadius: '12px',
      },
      success: { iconTheme: { primary: '#22C55E', secondary: '#fff' } },
      error: { iconTheme: { primary: '#EF4444', secondary: '#fff' } },
    }}
  />
);

export default Toast;
