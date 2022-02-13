import { useCallback } from "react";
import { toggleBodyOverflow } from "../../Utils/helpers";
import styles from "./Modal.module.css";

interface IModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({
  title,
  isOpen,
  setIsOpen,
  children,
}) => {
  const onCloseModal = useCallback(() => {
    setIsOpen(false);
    toggleBodyOverflow(false);
  }, []);

  return (
    <section className={isOpen ? styles.modalWrapper : styles.modalClose}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        {isOpen && <div className={styles.childrenWrapper}>{children}</div>}
        <button onClick={onCloseModal} className={styles.modalCloseBtn}>
          отмена
        </button>
      </div>
    </section>
  );
};

export default Modal;
