import styles from './Button.module.css';

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

//const Button = ({ children, onClick }: Props) => {
//  return (
//    <button className="btn btn-primary" onClick={onClick}>
//      {children}
//    </button>
//  );
//};

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button
      className={[styles.button, styles['button-' + color]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
