import React from "react";
import { Modal as ShardsModal } from "shards-react";

const Modal = ({ open, toggle, children }) => {
  return (
    <ShardsModal toggle={toggle} open={open}>
      {children}
    </ShardsModal>
  );
};

export default Modal;
