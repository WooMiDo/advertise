import {
  Modal,
  Radio,
  Input,
  Checkbox,
  ConfigProvider,
  Select,
  Space,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import ProfileRow from "./ProfileRow";
import SubAccountRow from "./SubAccountRow";

const ClientEnrollModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  teams,
  selectedItem,
}) => {
  const [radioValue, setRadioValue] = useState("new");
  const [clientNm, setClientNm] = useState("");
  const initialProfileData = [
    {
      id: 1,
      profileName: "",
      profileUrl: "",
    },
  ];
  const initialSubAccountData = [
    {
      id: 1,
      subId: "",
      subPw: "",
    },
  ];
  const [profileData, setProfileData] = useState(initialProfileData);
  const initialAppOptions = ["TAM", "CXM", "AIR"];
  const [selectedAppOptions, setSelectedAppOptions] =
    useState(initialAppOptions);
  const [subAccountData, setSubAccountData] = useState(initialSubAccountData);

  const [searchValue, setSearchValue] = useState("");
  const items = teams.map((item) => {
    return {
      path: item.path,
      seq: item.seq,
    };
  });
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const inputRef = useRef();

  const onChange = (e) => setRadioValue(e.target.value);

  const handleClientNmChange = (e) => setClientNm(e.target.value);

  const handleProfileChange = (id, field, value) => {
    setProfileData((prevData) =>
      prevData.map((profile) =>
        profile.id === id ? { ...profile, [field]: value } : profile
      )
    );
  };

  const handleAddProfileRow = () => {
    setProfileData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        profileName: "",
        profileUrl: "",
      },
    ]);
  };

  const handleDeleteProfileRow = (id) => {
    if (id === 1) {
      setProfileData((prevData) => [
        {
          id: 1,
          profileName: "",
          profileUrl: "",
        },
        ...prevData.slice(1),
      ]);
    } else {
      setProfileData((prevData) =>
        prevData
          .filter((profile) => profile.id !== id)
          .map((profile, index) => ({
            ...profile,
            id: index + 1,
          }))
      );
    }
  };

  const handleSubAccountChange = (id, field, value) => {
    setSubAccountData((prevData) =>
      prevData.map((subAccount) =>
        subAccount.id === id ? { ...subAccount, [field]: value } : subAccount
      )
    );
  };

  const handleAddSubAccountRow = () => {
    setSubAccountData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        subId: "",
        subPw: "",
      },
    ]);
  };

  const handleDeleteSubAccountRow = (id) => {
    if (id === 1) {
      setSubAccountData((prevData) => [
        {
          id: 1,
          subId: "",
          subPw: "",
        },
        ...prevData.slice(1),
      ]);
    } else {
      setSubAccountData((prevData) =>
        prevData
          .filter((subAccount) => subAccount.id !== id)
          .map((subAccount, index) => ({
            ...subAccount,
            id: index + 1,
          }))
      );
    }
  };

  const handleDropdownVisibleChange = (visible) => {
    setDropdownVisible(visible);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    const filtered = items.filter((item) =>
      item.path.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    if (dropdownVisible) {
      setFilteredItems(items.sort((a, b) => a.path.localeCompare(b.path)));
      setTimeout(() => {
        inputRef.current.focus();
      }, 10);
    }
  }, [dropdownVisible]);

  useEffect(() => {
    if (selectedItem) {
      const defaultOption = items.find((item) => item.seq === selectedItem);
      const selected = { label: defaultOption.path, value: defaultOption.seq };
      setSelectedOption(selected);
    }
  }, [selectedItem]);

  const handleSelectChange = (value, option) => {
    setSelectedOption([option]);
  };

  const handleAfterClose = () => {
    setRadioValue("new");
    setClientNm("");
    setProfileData(initialProfileData);
    setSelectedAppOptions(initialAppOptions);
    setSubAccountData(initialSubAccountData);
    setSearchValue("");
  };

  return (
    <Modal
      title="광고주 등록"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      afterClose={handleAfterClose}
      okText="저장"
      cancelText="취소"
      width={900}
    >
      <div>
        <span className="ico_red"></span>
        GP에 연결할 광고주 정보를 입력하세요.
      </div>
      <table className="layer_pop_table font12">
        <colgroup>
          <col width="30%"></col>
          <col width="70%"></col>
        </colgroup>
        <tbody>
          <tr>
            <th>
              광고주 등록 선택
              <span className="t-red pl5">*</span>
            </th>
            <td>
              <div className="radio radio-info">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#41b3f9",
                    },
                  }}
                >
                  <Radio.Group onChange={onChange} value={radioValue}>
                    <Radio value="new">광고주 신규 등록</Radio>
                    <Radio value="old">기존 등록된 광고주</Radio>
                  </Radio.Group>
                </ConfigProvider>
              </div>
            </td>
          </tr>

          <tr>
            <th>
              광고주명
              <span className="t-red pl5">*</span>
            </th>
            <td>
              <p className="font12">
                여러개의 도메인을 생성하여 서비스를 조회할 수 있습니다.
              </p>
              <div>
                <Input
                  placeholder="광고주명을 입력하세요."
                  id="new_client_nm"
                  value={clientNm}
                  onChange={handleClientNmChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>
              사이트명 / 도메인
              <span className="t-red pl5">*</span>
            </th>
            <td id="profile_reg_div2">
              {profileData.map((profile, index) => (
                <ProfileRow
                  key={profile.id}
                  profile={profile}
                  onProfileChange={handleProfileChange}
                  onAddProfile={
                    index === profileData.length - 1
                      ? handleAddProfileRow
                      : undefined
                  }
                  onDeleteProfileRow={handleDeleteProfileRow}
                />
              ))}
            </td>
          </tr>
          <tr>
            <th>
              앱 접근 권한
              <span className="t-red pl5">*</span>
            </th>
            <td>
              <Checkbox.Group
                options={initialAppOptions}
                value={selectedAppOptions}
                onChange={(checkedValues) =>
                  setSelectedAppOptions(checkedValues)
                }
              />
            </td>
          </tr>
          <tr>
            <th>부계정 아이디/비밀번호</th>
            <td className="sub-account">
              <p className="font12">
                여러개의 부계정 ID를 생성하여 서비스를 조회할 수 있습니다.
              </p>
              {subAccountData.map((subAccount, index) => (
                <SubAccountRow
                  key={subAccount.id}
                  subAccount={subAccount}
                  onSubAccountChange={handleSubAccountChange}
                  onAddSubAccount={
                    index === subAccountData.length - 1
                      ? handleAddSubAccountRow
                      : undefined
                  }
                  onDeleteSubAccount={handleDeleteSubAccountRow}
                />
              ))}
            </td>
          </tr>
          <tr>
            <th>광고주 이동</th>
            <td>
              <p className="font12">광고주가 이동할 팀을 선택하세요.</p>
              <div className="form-group mb10">
                <Select
                  style={{
                    width: "100%",
                  }}
                  dropdownRender={(menu) => (
                    <>
                      <Space
                        style={{
                          padding: "4px 8px",
                          width: "100%",
                        }}
                      >
                        <Input
                          ref={inputRef}
                          value={searchValue}
                          onChange={(e) => handleSearch(e.target.value)}
                        />
                      </Space>
                      {menu}
                    </>
                  )}
                  onDropdownVisibleChange={handleDropdownVisibleChange}
                  options={filteredItems.map((item) => ({
                    label: item.path,
                    value: item.seq,
                  }))}
                  value={selectedOption}
                  onChange={handleSelectChange}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Modal>
  );
};

export default ClientEnrollModal;
