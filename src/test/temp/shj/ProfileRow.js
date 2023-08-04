import React from "react";
import { Input, Button } from "antd";
import { FaTimes, FaPlus } from "react-icons/fa";

const ProfileRow = ({
  profile,
  onProfileChange,
  onAddProfile,
  onDeleteProfileRow,
}) => {
  const { id, profileName, profileUrl } = profile;

  const handleProfileNameChange = (e) => {
    onProfileChange(id, "profileName", e.target.value);
  };

  const handleProfileUrlChange = (e) => {
    onProfileChange(id, "profileUrl", e.target.value);
  };

  const handleDeleteRow = () => {
    if (profile.id === 1) {
      onProfileChange(profile.id, "profileName", "");
      onProfileChange(profile.id, "profileUrl", "");
    } else {
      onDeleteProfileRow(profile.id);
    }
  };

  const isButtonDisabled = !(
    profileName &&
    profileUrl &&
    !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(profileUrl)
  );

  return (
    <div name="profile-row">
      <div className="col-md-4 pr0 mb5">
        <Input
          id="profile_nm"
          name="profile_nm"
          placeholder="사이트명을 입력하세요."
          value={profileName}
          onChange={handleProfileNameChange}
        />
      </div>
      <div className="col-md-6 pr0 mb5" style={{ paddingLeft: "15px" }}>
        <Input
          id="profile_site_url"
          name="profile_site_url"
          placeholder="도메인을 입력하세요."
          value={profileUrl}
          onChange={handleProfileUrlChange}
        />
      </div>
      <div className="col-lg-1 pr0" style={{ paddingLeft: "15px" }}>
        <Button
          style={{ padding: "5px 10px", height: "28px" }}
          onClick={handleDeleteRow}
        >
          <FaTimes style={{ color: "red" }} />
        </Button>
      </div>
      <div className="col-lg-1 pd0" style={{ paddingLeft: "5px" }}>
        <Button
          className="sub-plus-btn2"
          style={{
            padding: "5px 10px",
            height: "28px",
            display: "none",
          }}
          onClick={onAddProfile}
          disabled={isButtonDisabled}
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default ProfileRow;
