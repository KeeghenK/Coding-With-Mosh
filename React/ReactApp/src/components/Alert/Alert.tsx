import { ReactNode } from 'react';
import styles from './Alert.module.css';
import { RxCross1 } from 'react-icons/rx';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

//const Alert = ({ children, onClose }: Props) => {
//  return (
//    <div className="alert alert-primary alert-dismissible ">
//      {children}
//      <button
//        type="button"
//        className="btn-close"
//        onClick={onClose}
//        data-bs-dismiss="alert"
//        aria-label="Close"
//      ></button>
//    </div>
//  );
//};

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className={styles.alert}>
      {children}
      <button type="button" className={styles.button} onClick={onClose}>
        <RxCross1 />
      </button>
    </div>
  );
};

export default Alert;
