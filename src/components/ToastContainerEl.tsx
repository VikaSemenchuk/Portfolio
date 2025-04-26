import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainerEl = () => {
  return (
    <ToastContainer position="top-right" autoClose={4000} theme="colored" />
  );
};
export default ToastContainerEl;