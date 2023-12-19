import { useEffect } from 'react';
import styles from './modal.module.css';
import styled from 'styled-components';

interface ModalProps {
    isOpen: boolean,
    title?: string,
    options?: React.CSSProperties,
    children?: React.ReactNode,
    onClose: () => void,
    backdrop?: boolean,
}

export default function Modal(props: ModalProps) {

    if (props.isOpen) {
        return (
            <div className={props.backdrop === undefined || props.backdrop ? styles.modal_wrap_backdrop : styles.modal_wrap} style={{ ...props.options }} >
                <div onClick={props.onClose} className={styles.backdrop} style={props.backdrop || props.backdrop === undefined ? { display: "flex", justifyContent: "center", alignItems: "center" } : { display: "flex", justifyContent: "center", alignItems: "center", opacity: 0, animation: 'none' }}></div>
                <ModalInner {...props} />
            </div>
        );
    }
    else {
        return <></>;
    }
}

const ModalWrapper = styled.div`
    animation: fadeinmodal 0.2s;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text.main};
    height: 100%;
    width: 100%;
`

const ModalInner = ({ onClose, children, options }: ModalProps) => {

    const handleKeyPress = (e: KeyboardEvent): any => {
        if (e.key == "Escape") {
            onClose();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    if (options === undefined) {
        return (
            <div className={styles.modal_border}>
                <ModalWrapper>
                    {children}
                </ModalWrapper>
            </div>
        );
    } else {
        return <div className={styles.modal_border_no_margin} style={options}>{children}</div>
    }
}
