import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: "rgb(12 11 11 / 77%)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};

export default function ImageModal({ isOpen, onRequestClose, image }) {
    return(  <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Modal"
      >
        <img src={image.urls.regular} alt={image.alt_description} />
      </Modal>
    </div>)
}