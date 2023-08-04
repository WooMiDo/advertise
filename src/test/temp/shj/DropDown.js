import React, { useState } from "react";
import { Dropdown, Space, Button } from "antd";
import { HiMiniCog6Tooth } from "react-icons/hi2";
import Swal from "sweetalert2";
import ClientEnrollModal from "./ClientEnrollModal";

// const items = [
//   {
//     // label: <a style={{ textDecoration: "none" }}>수정</a>,
//     label: "수정",
//     key: "0",
//   },
//   {
//     // label: <a style={{ textDecoration: "none" }}>삭제</a>,
//     label: "삭제",
//     key: "1",

//     onClick: () => {
//       Swal.fire({
//         icon: "warning",
//         title: "정말 삭제하시겠습니까?",
//         text: "삭제 버튼을 클릭하면 영구적으로 삭제됩니다.",
//         confirmButtonText: "삭제",
//         confirmButtonColor: "rgb(221, 107, 85)",
//         showCancelButton: true,
//         cancelButtonText: "취소",
//       });
//     },
//   },
// ];

const DropDown = ({ dataSeq, teams, selectedItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      // label: <a style={{ textDecoration: "none" }}>수정</a>,
      label: "수정",
      key: "0",

      onClick: () => {
        showModal();
      },
    },
    {
      // label: <a style={{ textDecoration: "none" }}>삭제</a>,
      label: "삭제",
      key: "1",

      onClick: () => {
        Swal.fire({
          icon: "warning",
          title: "정말 삭제하시겠습니까?",
          text: "삭제 버튼을 클릭하면 영구적으로 삭제됩니다.",
          confirmButtonText: "삭제",
          confirmButtonColor: "rgb(221, 107, 85)",
          showCancelButton: true,
          cancelButtonText: "취소",
        });
      },
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Button size="small" style={{ fontSize: "12px" }}>
              <HiMiniCog6Tooth />
            </Button>
          </Space>
        </a>
      </Dropdown>
      <ClientEnrollModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        teams={teams}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default DropDown;
