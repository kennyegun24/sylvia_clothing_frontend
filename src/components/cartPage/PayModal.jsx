import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./styles.css";
import { redirect } from "react-router-dom";
const PayModal = ({ isModalOpen, setIsModalOpen }) => {
  const handleOk = () => {
    setIsModalOpen(false);
    redirect("/payment/success");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        centered
        title="Make Payment"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex column gap05rem payment_modal_div">
          <p>
            Momo number: <strong>+233 247 725623</strong> and{" "}
            <strong>+233206522222</strong>
            <br />
            Acc. Name: <strong>Sylvia Lovia Boafo.</strong>
            <br />
            Bank payment option
            <br />
            Bank Name: <strong> Barclays Bank</strong>
            <br />
            Acc. Num: <strong>1441 0009 61270</strong>
            <br />
            Branch Tema
            <br />
          </p>
          <h3>Click on OK after you complete making your payment.</h3>
          <p>Contact the seller on whatsapp using this number</p>
        </div>
      </Modal>
    </>
  );
};
export default PayModal;
