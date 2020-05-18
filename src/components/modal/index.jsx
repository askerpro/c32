import React from "react";
import * as E from "./elements";
import PropTypes from "prop-types";
import CloseIcon from "./media/close-black-18dp.svg";

const Modal = ({ open, onClose, children }) => {
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <E.Wrapper open={open}>
      <E.BackDrop onClick={onClose} />
      <E.CloseButton onClick={onClose}>
        <CloseIcon />
      </E.CloseButton>
      <E.Container>{children}</E.Container>
    </E.Wrapper>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
