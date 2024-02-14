import { Modal } from '@mui/material';
import { useTheme } from '../../../../context/theme-context';
import styles from './style.module.css';

const ImageModal = ({isModalOpen, setIsModalOpen}) => {
    const { theme } = useTheme();
    
    const handleClose = () => {
        setIsModalOpen(false) 
    }
    
    return (
        <Modal
            open={false}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

        </Modal>
    );
}

export default ImageModal;
