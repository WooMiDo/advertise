import React, { useState } from "react";
import { Input, Button } from "antd";
import { FaTimes, FaPlus, FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const SubAccountRow = ({
  subAccount,
  onSubAccountChange,
  onAddSubAccount,
  onDeleteSubAccount,
}) => {
  const { id, subId, subPw } = subAccount;

  const handleSubIdChange = (e) => {
    onSubAccountChange(id, "subId", e.target.value);
  };

  const handleSubPwChange = (e) => {
    onSubAccountChange(id, "subPw", e.target.value);
  };

  const [checkStatus, setCheckStatus] = useState(null);
  const isValidEmail = /^\S+@\S+\.\S+$/.test(subId);
  const handleCheckDuplicate = async () => {
    if (!isValidEmail) {
      Swal.fire({
        icon: "warning",
        title: "부계정은 이메일 형식으로 입력해주세요.",
        confirmButtonColor: "#3085d6",
      });
    }
    try {
      const apiResponse = await // 함수
      setCheckStatus(apiResponse.status);
      if (checkStatus === "success") {
        Swal.fire({
          icon: "success",
          title: "사용 가능한 계정입니다.",
        });
      }
    } catch (error) {
      console.log("Error checking duplicates: ", error);
    }
  };

  const handleDeleteRow = () => {
    if (subAccount.id === 1) {
      onSubAccountChange(subAccount.id, "subId", "");
      onSubAccountChange(subAccount.id, "subPw", "");
    } else {
      onDeleteSubAccount(subAccount.id);
    }
  };

  const isButtonDisabled = !(
    subId &&
    checkStatus === "success" &&
    subPw &&
    /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/.test(subPw)
  );

  return (
    <div name="sub_account_row">
      <div className="col-lg-4 pr0 mb5">
        <Input
          name="sub_id"
          placeholder="아이디를 입력하세요."
          value={subId}
          onChange={handleSubIdChange}
        />
      </div>
      <div className="col-lg-2 pr0 mb5" style={{ textAlign: "center" }}>
        <Button
          style={{
            width: "70px",
            padding: "5px 10px",
            fontSize: "12px",
            height: "28px",
          }}
          onClick={handleCheckDuplicate}
        >
          {checkStatus === "success" ? (
            <FaCheckCircle style={{ color: "green", fontSize: "14px" }} />
          ) : (
            "중복 체크"
          )}
        </Button>
      </div>
      <div className="col-lg-4 pr0 pl0 mb5">
        <Input.Password
          name="sub_pw"
          placeholder="비밀번호를 입력하세요."
          value={subPw}
          onChange={handleSubPwChange}
        />
      </div>
      <div className="col-lg-1" style={{ paddingLeft: "15px" }}>
        <Button
          style={{ padding: "5px 10px", height: "28px" }}
          onClick={handleDeleteRow}
        >
          <FaTimes style={{ color: "red" }} />
        </Button>
      </div>
      <div className="col-lg-1 pd0" style={{ paddingLeft: "5px" }}>
        <Button
          className="sub-plus-btn"
          style={{
            padding: "5px 10px",
            height: "28px",
            display: "none",
          }}
          onClick={onAddSubAccount}
          disabled={isButtonDisabled}
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default SubAccountRow;
