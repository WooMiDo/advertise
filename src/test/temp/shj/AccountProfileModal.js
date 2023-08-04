import { Button, Modal, Popover } from "antd";
import React, { useState } from "react";
import { FaTimesCircle, FaQuestionCircle } from "react-icons/fa";

const content = (
  <ul>
    <li className="mb10">
      매체 유효성 검사 버튼 클릭 시 모비온, 타겟팅게이츠, 데이블, ADN, GFA
      매체에 연결된 계정의 유효성을 체크하여 계정 연결 상태를 확인할 수
      있습니다.
    </li>
    <li className="mb10">
      유효성 검사는 연결된 계정 개수에 따라 30초 이상 시간이 소요될 수 있습니다.
    </li>
  </ul>
);

const AccountProfileModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  profileData,
  mediaTpImageUrl,
}) => {
  const [accountProfileConnectionDisplay, setAccountProfileConnectionDisplay] =
    useState("block");
  const [mediaConnectionDisplay, setMediaConnectionDisplay] = useState("none");
  const [mediaConnectionContent, setMediaConnectionContent] = useState("");
  const [showOkButton, setShowOkButton] = useState(false);

  const getImgSrc = (mediaTp) => {
    return mediaTpImageUrl[mediaTp] || "";
  };

  const otherMedia = {
    111011: "모비온",
    111012: "타겟팅게이츠",
    111013: "데이블",
    111014: "ADN",
    111015: "GFA",
  };

  const handleSettingLicenseButton = (mediaTp) => {
    setAccountProfileConnectionDisplay("none");
    setMediaConnectionDisplay("block");
    setShowOkButton(true);
    if (mediaTp === "111001") {
      setMediaConnectionContent(
        <div style={{ margin: "0px 125px 0px 125px" }}>
          <div className="form-group mb20"></div>
          <blockquote className="bq-bh bq-info top-info font12 mb10">
            <p>
              <span className="ico_red"></span>
              네이버 검색광고 계정 정보를 입력하세요.
            </p>
          </blockquote>
          <div>
            <img
              src="http://growthplatform.ai/gp/img/naver_api_info.png"
              style={{ maxWidth: "100%" }}
            ></img>
          </div>
          <table
            className="layer_pop_table mt5"
            data-media-tp={String(mediaTp)}
          >
            <colgroup>
              <col width="25%"></col>
              <col width="75%"></col>
            </colgroup>
            <tbody>
              <tr>
                <th>매체계정이름</th>
                <td>
                  <input
                    type="text"
                    id="license_nm"
                    placeholder="매체계정이름을 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
              <tr>
                <th>CUSTOMER_ID</th>
                <td>
                  <input
                    type="text"
                    id="customer_id"
                    placeholder="CUSTOMER_ID를 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
              <tr>
                <th>액세스라이선스</th>
                <td>
                  <input
                    type="text"
                    id="access_license"
                    placeholder="액세스 라이선스를 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
              <tr>
                <th>비밀키</th>
                <td>
                  <input
                    type="text"
                    id="secret_key"
                    placeholder="비밀키를 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else if (mediaTp === "111002") {
      setMediaConnectionContent(
        <div style={{ margin: "0px 25px 0px 25px" }}>
          <blockquote className="bq-bh bq-info top-info font12 mb10">
            <p>
              <span className="ico_red"></span>
              카카오 로그인을 완료하세요.
            </p>
            <p>
              <span className="ico_red"></span>
              새로운 계정을 연결할 경우, 매체에서 로그아웃 후 다시
              로그인하시거나 새로운 브라우저에서 계정을 연결하세요.
            </p>
          </blockquote>
          <table className="layer_pop_table mt15 mb15">
            <colgroup>
              <col width="25%"></col>
              <col width="75%"></col>
            </colgroup>
            <tbody>
              <tr>
                <th>매체계정이름</th>
                <td>
                  <input
                    type="text"
                    id="oauth_nm"
                    placeholder="매체계정이름을 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tc">
            <a href="#">
              <img
                src="http://growthplatform.ai/gp/img/kakao_login_large_narrow.png"
                alt="카카오 로그인"
                className="ins-lo-img"
                data-media-tp={String(mediaTp)}
                style={{ width: "200px" }}
              />
            </a>
          </div>
        </div>
      );
    } else if (mediaTp === "111003") {
      setMediaConnectionContent(
        <div style={{ margin: "0px 25px 0px 25px" }}>
          <blockquote className="bq-bh bq-info top-info font12 mb10">
            <p>
              <span className="ico_red"></span>
              구글 개인 광고 계정으로 로그인을 완료하세요.
            </p>
            <p>
              <span className="ico_red"></span>
              구글 대표(매니저) 계정으로 광고 계정 연결 후 구글 리포트 생성
              요청시 오류가 발생할 수 있습니다.
            </p>
            <p>
              <span className="ico_red"></span>
              로그인 후 [Google Ads 계정 및 데이터를 확인, 수정, 생성, 삭제할 수
              있습니다] 항목을 반드시 체크해주세요.
            </p>
          </blockquote>
          <div className="tc">
            <img
              src="http://growthplatform.ai/gp/img/google_api_info2.png"
              className="h600px"
            ></img>
          </div>
          <table className="layer_pop_table mt15 mb15">
            <colgroup>
              <col width="25%"></col>
              <col width="75%"></col>
            </colgroup>
            <tbody>
              <tr>
                <th>매체계정이름</th>
                <td>
                  <input
                    type="text"
                    id="oauth_nm"
                    placeholder="매체계정이름을 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tc">
            <a href="#">
              <img
                src="http://growthplatform.ai/gp/img/btn_google_signin_light_normal_web@2x.png"
                alt="구글 로그인"
                className="ins-lo-img"
                data-media-tp={String(mediaTp)}
                style={{ width: "225px" }}
              />
            </a>
          </div>
        </div>
      );
    } else if (mediaTp === "111004") {
      setMediaConnectionContent(
        <div style={{ margin: "0px 25px 0px 25px" }}>
          <blockquote className="bq-bh bq-info top-info font12 mb10">
            <p>
              <span className="ico_red"></span>
              페이스북 로그인을 완료하세요.
            </p>
          </blockquote>
          <table className="layer_pop_table mt15 mb15">
            <colgroup>
              <col width="25%"></col>
              <col width="75%"></col>
            </colgroup>
            <tbody>
              <tr>
                <th>매체계정이름</th>
                <td>
                  <input
                    type="text"
                    id="oauth_nm"
                    placeholder="매체계정이름을 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tc">
            <a href="#">
              <img
                src="http://growthplatform.ai/gp/img/continue_with_facebook.png"
                alt="페이스북 로그인"
                className="ins-lo-img"
                data-media-tp={String(mediaTp)}
                style={{ width: "250px" }}
              />
            </a>
          </div>
        </div>
      );
    } else if (mediaTp === "111006") {
      setMediaConnectionContent(
        <div style={{ margin: "0px 25px 0px 25px" }}>
          <blockquote className="bq-bh bq-info top-info font12 mb10">
            <p>
              <span className="ico_red"></span>
              모먼트 로그인을 완료하세요.
            </p>
            <p>
              <span className="ico_red"></span>
              새로운 계정을 연결할 경우, 매체에서 로그아웃 후 다시
              로그인하시거나 새로운 브라우저에서 계정을 연결하세요.
            </p>
          </blockquote>
          <table className="layer_pop_table mt15 mb15">
            <colgroup>
              <col width="25%"></col>
              <col width="75%"></col>
            </colgroup>
            <tbody>
              <tr>
                <th>매체계정이름</th>
                <td>
                  <input
                    type="text"
                    id="oauth_nm"
                    placeholder="매체계정이름을 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tc">
            <a href="#">
              <img
                src="http://growthplatform.ai/gp/img/kakao_login_large_narrow.png"
                alt="카카오 로그인"
                className="ins-lo-img"
                data-media-tp={String(mediaTp)}
                style={{ width: "200px" }}
              />
            </a>
          </div>
        </div>
      );
    } else if (mediaTp in otherMedia) {
      setMediaConnectionContent(
        <div style={{ margin: "0px 25px 0px 25px" }}>
          <blockquote className="bq-bh bq-info top-info font12 mb10">
            <p>
              <span className="ico_red"></span>
              {otherMedia[mediaTp]} 계정 정보를 입력하세요.
            </p>
            <p>
              <span className="ico_red"></span>
              계정 정보를 <strong>3번</strong> 이상 틀릴 경우, 비밀번호 재설정을
              해야할 수 있습니다.
            </p>
          </blockquote>
          <table
            className="layer_pop_table mt5"
            data-media-tp={String(mediaTp)}
          >
            <colgroup>
              <col width="25%"></col>
              <col width="75%"></col>
            </colgroup>
            <tbody>
              <tr>
                <th>매체계정이름</th>
                <td>
                  <input
                    type="text"
                    id="license_nm"
                    placeholder="매체계정이름을 입력해주세요."
                    className="license-input form-control ml5"
                  ></input>
                </td>
              </tr>
              <tr>
                <th>ID</th>
                <td>
                  <input
                    type="text"
                    id="login_id"
                    className="license-input form-control ml5"
                    placeholder="매체 계정 ID를 입력해주세요."
                  ></input>
                </td>
              </tr>
              <tr>
                <th>PW</th>
                <td>
                  <input
                    type="text"
                    id="login_pw"
                    className="license-input form-control ml5"
                    placeholder="매체 계정 비밀번호를 입력해주세요."
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };

  const renderMediaRow = () => {
    const media = ["네이버", "카카오", "구글애즈", "페이스북", "모먼트"];
    let dataMediaTp = 111001;
    const rows = [];
    for (let i = 0; i < media.length; i++) {
      const imgSrc = getImgSrc(dataMediaTp);
      const mediaNm = media[i];
      const paragraph =
        mediaNm === "구글애즈" || mediaNm === "페이스북" ? (
          <p className="m-info">
            <span className="m-info-bg-blue">데이터소스</span>
            <span className="m-info-bg-green">마케팅채널</span>
          </p>
        ) : null;

      rows.push(
        <tr key={dataMediaTp} data-media-tp={dataMediaTp}>
          <td>
            <img src={imgSrc} className="ad-ico mr10" />
            {mediaNm}
            {paragraph}
          </td>
          <td>
            <div className="fr">
              <button
                type="button"
                className="btn btn-default btn-xs mr5"
                data-media-tp={dataMediaTp}
                onClick={(event) =>
                  handleSettingLicenseButton(
                    event.target.getAttribute("data-media-tp")
                  )
                }
              >
                매체 계정 추가
              </button>

              <button type="button" className="btn btn-default btn-xs mr5">
                광고주 계정 연결
              </button>
            </div>
            <div className="col-lg-12">
              {profileData.map((item) => {
                if (item.account) {
                  return item.account.map((account, index) => {
                    if (account.media_tp === String(dataMediaTp)) {
                      const accountName = account.account_nm;
                      return (
                        <span className="modal-label-connect mr5">
                          {accountName}
                          <a href="" className="sa-warning ml5">
                            <FaTimesCircle style={{ color: "#aaa" }} />
                          </a>
                        </span>
                      );
                    }
                  });
                }
              })}
            </div>
          </td>
        </tr>
      );
      if (i < media.length - 2) {
        dataMediaTp++;
      } else dataMediaTp += 2;
    }
    return rows;
  };

  const renderMediaRow2 = () => {
    const media = ["모비온", "타겟팅게이츠", "데이블", "ADN", "GFA"];
    let dataMediaTp = 111011;
    const rows = [];
    for (let i = 0; i < media.length; i++) {
      const imgSrc = getImgSrc(dataMediaTp);
      const mediaNm = media[i];
      const paragraph =
        mediaNm === "모비온" || mediaNm === "타겟팅게이츠" ? (
          <p className="m-info">
            <span className="m-info-bg-blue">데이터소스</span>
          </p>
        ) : null;

      rows.push(
        <tr key={dataMediaTp} data-media-tp={dataMediaTp}>
          <td>
            <img src={imgSrc} className="ad-ico mr10" />
            {mediaNm}
            {paragraph}
          </td>
          <td>
            <div className="fr">
              <button
                type="button"
                className="btn btn-default btn-xs mr5"
                data-media-tp={dataMediaTp}
                onClick={(event) =>
                  handleSettingLicenseButton(
                    event.target.getAttribute("data-media-tp")
                  )
                }
              >
                매체 계정 추가
              </button>

              <button type="button" className="btn btn-default btn-xs mr5">
                광고주 계정 연결
              </button>
            </div>
            <div className="col-lg-12">
              {profileData.map((item) => {
                if (item.account) {
                  return item.account.map((account, index) => {
                    if (account.media_tp === String(dataMediaTp)) {
                      const accountName = account.account_nm;
                      return (
                        <span className="modal-label-connect mr5">
                          {accountName}
                          <a href="" className="sa-warning ml5">
                            <FaTimesCircle style={{ color: "#aaa" }} />
                          </a>
                        </span>
                      );
                    }
                  });
                }
              })}
            </div>
          </td>
        </tr>
      );
      dataMediaTp++;
    }
    return rows;
  };

  const handleBackCancle = (event) => {
    if (
      mediaConnectionDisplay === "block" &&
      event.target.textContent === "돌아가기"
    ) {
      setAccountProfileConnectionDisplay("block");
      setMediaConnectionDisplay("none");
      setShowOkButton(false);
    } else {
      handleCancel();
    }
  };

  return (
    <Modal
      title="광고 계정 관리"
      open={isModalOpen}
      onOk={mediaConnectionDisplay === "block" ? handleOk : null}
      onCancel={handleBackCancle}
      footer={[
        <Button key="cancel" onClick={handleBackCancle}>
          {mediaConnectionDisplay === "block" ? "돌아가기" : "닫기"}
        </Button>,
        showOkButton && (
          <Button key="ok" type="primary" onClick={handleOk}>
            저장
          </Button>
        ),
      ]}
      width={900}
    >
      <div
        id="account_profile_connection"
        style={{ display: accountProfileConnectionDisplay }}
      >
        <blockquote className="bq-bh bq-info top-info font13 mb0">
          <p>
            <span className="ico_red"></span>
            매체 계정 연결 후 광고주를 연결할 수 있습니다.
          </p>
          <p>
            <span className="ico_red"></span>
            모비온, 타겟팅게이츠, 데이블, ADN, GFA 매체의 연결된 광고주 목록
            조회는 <strong>최초 30초 이상 소요</strong>됩니다.
          </p>
          <p>
            <span className="ico_red"></span>
            모비온, 타겟팅게이츠, 데이블, ADN, GFA는 매체 유효성 검사 버튼 클릭
            시 계정 연결 상태를 확인할 수 있습니다.(API 매체는 자동 업데이트)
          </p>
          <p>
            <span className="ico_dark fl mt5"></span>
            <span className="display-block ml10">
              <span className="m-info-bg-green ml10">마케팅채널</span>
              (페이스북/구글애즈) 표시가 되어있는 매체 연결 시 TAM 앱에서 광고
              캠페인에 활용할 수 있는 맞춤 타겟 데이터를 매체로 전송할 수
              있습니다.
            </span>
          </p>
        </blockquote>
        <table className="layer_pop_table font12">
          <colgroup>
            <col width="30%"></col>
            <col width="70%"></col>
          </colgroup>
          <thead>
            <tr>
              <th className="tc">API 매체</th>
              <th className="tc">연결관리</th>
            </tr>
          </thead>
          <tbody>{renderMediaRow()}</tbody>
        </table>
        <div className="mt20">
          <button type="button" className="btn btn-save btn-xs">
            매체 유효성 검사
          </button>
          <Popover placement="right" title="광고 계정 관리" content={content}>
            <button type="button" className="popover_btn ico-info">
              <FaQuestionCircle
                style={{
                  color: "#bebebe",
                  fontSize: "95%",
                  verticalAlign: "middle",
                }}
              />
            </button>
          </Popover>
        </div>
        <table className="layer_pop_table font12 mt10">
          <colgroup>
            <col width="30%"></col>
            <col width="70%"></col>
          </colgroup>
          <thead>
            <tr>
              <th className="tc">기타 매체</th>
              <th className="tc">연결관리</th>
            </tr>
          </thead>
          <tbody>{renderMediaRow2()}</tbody>
        </table>
      </div>
      <div id="media_connection" style={{ display: mediaConnectionDisplay }}>
        {mediaConnectionContent}
      </div>
    </Modal>
  );
};

export default AccountProfileModal;
