import React, { useState } from "react";

import { Switch, Table, Tooltip, ConfigProvider, Button, Popover } from "antd";
import { FaQuestionCircle } from "react-icons/fa";
import DropDown from "./DropDown";
import AccountProfileModal from "./AccountProfileModal";

const content = (
  <ul>
    <li class="mb10">광고주의 사용 상태를 ON/OFF로 설정할 수 있습니다.</li>
    <li class="mb10">
      광고주의 사용 상태를 OFF로 설정할 경우 데이터 수집이 중지됩니다.
    </li>
    <li class="mb10">
      중지 기간 내 데이터는 재 생성이 불가하며, 데이터 생성 요청 시 추가 비용이
      발생할 수 있습니다.
    </li>
    <li class="mb10">
      광고주 사용 중지 후 재 사용 시 매체 라이선스는 유효성을 체크하여 다시
      사용할 수 있으며, 라이선스가 유효하지 않은 경우 중지된 계정은 다시
      연결해야 합니다.
    </li>
  </ul>
);

const mediaTpImageUrl = {
  111001: "http://queendesign.bizspring.co.kr/GP/img/logo_naver.svg",
  111002: "http://queendesign.bizspring.co.kr/GP/img/logo_kakao_w.png",
  111003: "http://queendesign.bizspring.co.kr/GP/img/logo_google_w.png",
  111004: "http://queendesign.bizspring.co.kr/GP/img/fb.svg",
  111006: "http://queendesign.bizspring.co.kr/GP/img/logo_kakao_w.png",

  111011: "http://queendesign.bizspring.co.kr/GP/img/m_ico_mobon.jpg",
  111012: "http://queendesign.bizspring.co.kr/GP/img/m_ico_tgates.jpg",
  111013: "http://queendesign.bizspring.co.kr/GP/img/m_ico_dable.jpg",
  111014: "http://queendesign.bizspring.co.kr/GP/img/m_ico_adn.jpg",
  111015: "http://queendesign.bizspring.co.kr/GP/img/logo_naver_gfa.svg",
};

// const [isModalOpen, setIsModalOpen] = useState(false);
// const showModal = () => {
//   setIsModalOpen(true);
// };

// const handleOk = () => {
//   setIsModalOpen(false);
// };

// const handleCancel = () => {
//   setIsModalOpen(false);
// };

// const columns = [
//   ,
//   {
//     title: "광고주 명",
//     dataIndex: "clientNm",
//     key: "clinetNm",
//     sorter: true,

//     render: (text) => (
//       <>
//         {text}
//         <div style={{ float: "right" }}>
//           <DropDown />
//         </div>
//       </>
//     ),
//     // width: "15%",
//   },
//   {
//     title: (
//       <>
//         사용상태{" "}
//         <Popover placement="right" title="광고 계정 관리">
//           <Button className="popover_btn ico-info">
//             <FaQuestionCircle
//               style={{
//                 color: "#bebebe",
//                 fontSize: "95%",
//                 verticalAlign: "middle",
//               }}
//             />
//           </Button>
//         </Popover>
//       </>
//     ),
//     dataIndex: "",
//     key: "use",
//     render: () => (
//       <ConfigProvider
//         theme={{
//           token: {
//             colorPrimary: "rgb(19, 218, 254)",
//           },
//         }}
//       >
//         <Switch defaultChecked />
//       </ConfigProvider>
//     ),
//     onCell: () => {
//       return {
//         className: "tc",
//       };
//     },
//     width: "10%",
//   },
//   {
//     title: "[사이트명] 도메인",
//     key: "profile",
//     onCell: () => {
//       return {
//         className: "tl pd0",
//       };
//     },
//     render: (_, record) => (
//       <div className="table-in-table">
//         <table className="display nowrap">
//           <tbody>
//             {record.profile.map((item, index) => (
//               <tr>
//                 <td>
//                   [{item.profile_nm}] {item.site_url}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     ),
//     // width: "20%",
//   },
//   {
//     title: "광고 계정 관리",
//     key: "account",
//     render: (_, record) => {
//       let mediaTpCount = 0;

//       record.profile.forEach((item) => {
//         if (item.account) mediaTpCount += item.account.length;
//       });

//       return (
//         <Tooltip
//           placement="top"
//           title="매체를 클릭하면 매체 연결과 연결된 상세 내용을 확인할 수 있습니다."
//         >
//           <ul className="ad-account-icons">
//             <li className="ad-list">
//               <span className="ad-ico-num ad-ico">{mediaTpCount}</span>
//             </li>
//             {record.profile.map((item) => {
//               if (item.account) {
//                 return item.account.map((account, index) => {
//                   const mediaTpValue = account.media_tp;
//                   const imageUrl = mediaTpImageUrl[mediaTpValue];

//                   return (
//                     <li className="ad-list">
//                       <img src={imageUrl} className="ad-ico" />
//                     </li>
//                   );
//                 });
//               }
//             })}
//           </ul>
//         </Tooltip>
//       );
//     },
//     // width: "23%",
//   },
//   {
//     title: "앱 바로가기",
//     key: "app",
//     dataIndex: "app",
//     render: () => (
//       <>
//         <img
//           src="http://growthplatform.ai/gp/img/app_air.svg"
//           style={{ height: "32px", borderRadius: "50%" }}
//         ></img>
//         <img
//           src="http://growthplatform.ai/gp/img/app_tam.svg"
//           style={{ height: "32px", borderRadius: "50%" }}
//         />
//       </>
//     ),
//     width: "15%",
//   },
// ];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const rowClassName = (record, index) => {
  return index % 2 === 0 ? "even-row" : "odd-row";
};

const TableTest = ({
  data,
  pagination,
  handleTableChange,
  loading,
  teams,
  selectedItem,
}) => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProfileData, setModalProfileData] = useState(null);

  const showModal = (profileData) => {
    setIsModalOpen(true);
    setModalProfileData(profileData);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setModalProfileData(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalProfileData(null);
  };

  return (
    <div>
      {" "}
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={[
          ,
          {
            title: "광고주 명",
            dataIndex: "clientNm",
            key: "clinetNm",
            sorter: true,
            render: (_, record) => {
              const dataSeq = record.clientSeq;
              return (
                <div className="row-info" data-client-seq={record.clientSeq}>
                  {record.clientNm}
                  <div style={{ float: "right" }}>
                    <DropDown
                      dataSeq={dataSeq}
                      teams={teams}
                      selectedItem={selectedItem}
                    />
                  </div>
                </div>
              );
            },
            // width: "15%",
          },
          {
            title: (
              <>
                사용상태{" "}
                <Popover
                  placement="right"
                  title="광고 계정 관리"
                  content={content}
                >
                  <Button className="popover_btn ico-info">
                    <FaQuestionCircle
                      style={{
                        color: "#bebebe",
                        fontSize: "95%",
                        verticalAlign: "middle",
                      }}
                    />
                  </Button>
                </Popover>
              </>
            ),
            dataIndex: "",
            key: "use",
            render: () => (
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "rgb(19, 218, 254)",
                  },
                }}
              >
                <Switch defaultChecked />
              </ConfigProvider>
            ),
            onCell: () => {
              return {
                className: "tc",
              };
            },
            width: "10%",
          },
          {
            title: "[사이트명] 도메인",
            key: "profile",
            onCell: () => {
              return {
                className: "tl pd0",
              };
            },
            render: (_, record) => (
              <div className="table-in-table">
                <table className="display nowrap">
                  <tbody>
                    {record.profile.map((item, index) => (
                      <tr>
                        <td>
                          [{item.profile_nm}] {item.site_url}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
            // width: "20%",
          },
          {
            title: "광고 계정 관리",
            key: "account",
            render: (_, record) => {
              let mediaTpCount = 0;

              record.profile.forEach((item) => {
                if (item.account) mediaTpCount += item.account.length;
              });

              return (
                <Tooltip
                  placement="top"
                  title="매체를 클릭하면 매체 연결과 연결된 상세 내용을 확인할 수 있습니다."
                >
                  <ul
                    className="ad-account-icons"
                    onClick={() => showModal(record.profile)}
                  >
                    <li className="ad-list">
                      <span className="ad-ico-num ad-ico">{mediaTpCount}</span>
                    </li>
                    {record.profile.map((item) => {
                      if (item.account) {
                        return item.account.map((account, index) => {
                          const mediaTpValue = account.media_tp;
                          const imageUrl = mediaTpImageUrl[mediaTpValue];

                          return (
                            <li className="ad-list">
                              <img src={imageUrl} className="ad-ico" />
                            </li>
                          );
                        });
                      }
                    })}
                  </ul>
                </Tooltip>
              );
            },
            // width: "23%",
          },
          {
            title: "앱 바로가기",
            key: "app",
            dataIndex: "app",
            render: () => (
              <>
                <img
                  src="http://growthplatform.ai/gp/img/app_air.svg"
                  style={{ height: "32px", borderRadius: "50%" }}
                ></img>
                <img
                  src="http://growthplatform.ai/gp/img/app_tam.svg"
                  style={{ height: "32px", borderRadius: "50%" }}
                />
              </>
            ),
            width: "15%",
          },
        ]}
        dataSource={data}
        bordered
        pagination={pagination}
        onChange={handleTableChange}
        loading={loading}
        rowClassName={rowClassName}
      />
      {isModalOpen && (
        <AccountProfileModal
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          handleOk={handleOk}
          profileData={modalProfileData}
          mediaTpImageUrl={mediaTpImageUrl}
        />
      )}
    </div>
  );
};

export default TableTest;
