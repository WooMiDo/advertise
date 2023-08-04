import React, { useEffect, useState } from "react";
import TableTest from "./TableTest";
import { Button, Select } from "antd";
import Search from "antd/es/input/Search";
import ClientEnrollModal from "./ClientEnrollModal";

const Right = ({ teams, selectedItem }) => {
  const [data, setData] = useState([
    {
      clientNm: "모바일미샤",
      clientSeq: 105580,
      profile: [
        {
          account: [
            {
              media_tp: "111015",
              account_nm: "비즈스프링 기본",
            },
          ],
          pfno: "300027",
          profile_nm: "TAM",
          site_url: "growthplatform.ai/tam",
        },
      ],
      teamSeq: 1,
    },
    {
      clientNm: "롯데푸드몰-PeopleDB™",
      clientSeq: 29367,
      profile: [
        {
          account: [
            {
              media_tp: "111001",
              account_nm: "[N] blues73",
            },
          ],
          pfno: "48661",
          profile_nm: "M롯데푸드몰",
          site_url: "lottefoodmall.com/m",
        },
      ],
      teamSeq: 1,
    },
    {
      clientNm: "비즈스프링_대행사",
      clientSeq: 106658,
      profile: [
        {
          account: [
            {
              media_tp: "111014",
              account_nm: "해즈브로 공식스토어",
            },
            {
              media_tp: "111012",
              account_nm: "이프로애드_린드스트롬",
            },
            {
              media_tp: "111012",
              account_nm: "이프로애드_(주)푸디세이",
            },
          ],
          pfno: "300020",
          profile_nm: "비즈스프링_대행사",
          site_url: "bizspring.co.kr",
        },
      ],
      teamSeq: 1,
    },
    {
      clientNm: "A 비즈스프링",
      clientSeq: 106659,
      profile: [
        {
          account: [
            {
              media_tp: "111003",
              account_nm: "BOOST",
            },
            {
              media_tp: "111002",
              account_nm: "비즈스프링",
            },
            {
              media_tp: "111001",
              account_nm: "bizspring",
            },
          ],
          pfno: "23884",
          profile_nm: "BIZSPRING 웹사이트",
          site_url: "bizspring.co.kr",
        },
        {
          account: [
            {
              media_tp: "111004",
              account_nm: "226451432920631",
            },
          ],
          pfno: "30021",
          profile_nm: "비즈스프링",
          site_url: "bizspring.co.kr",
        },
      ],
      teamSeq: 146,
    },
    {
      clientNm: "옥경화_네스프레소_광고주 생성",
      clientSeq: 106666,
      profile: [
        {
          pfno: "300022",
          profile_nm: "네스프레소",
          site_url: "nespress.com",
        },
      ],
      teamSeq: 1,
    },
    {
      clientNm: "옥경화_라이프하우스",
      clientSeq: 106668,
      profile: [
        {
          pfno: "300024",
          profile_nm: "lifehouses",
          site_url: "lifehouses.com",
        },
      ],
      teamSeq: 1,
    },
    {
      clientNm: "진실 테스트 220726",
      clientSeq: 106683,
      profile: [
        {
          pfno: "300043",
          profile_nm: "진실 테스트 220726",
          site_url: "aaa.co.kr",
        },
      ],
      teamSeq: 1,
    },
    {
      clientNm: "재홍 테스트 230103",
      clientSeq: 106788,
      profile: [
        {
          pfno: "300104",
          profile_nm: "[재홍 테스트 230103]",
          site_url: "abc.com",
        },
      ],
      teamSeq: 1,
    },
    {
      clientNm: "oniontest",
      clientSeq: 106794,
      profile: [
        {
          pfno: "300110",
          profile_nm: "test.com",
          site_url: "test.com",
        },
      ],
      teamSeq: 146,
    },
    {
      clientNm: "욱진_테스트",
      clientSeq: 106806,
      profile: [
        {
          pfno: "300122",
          profile_nm: "wjyang",
          site_url: "wjyang.co.kr",
        },
      ],
      teamSeq: 1,
    },
    {
      clientNm: "안성재_페이스북",
      clientSeq: 106839,
      profile: [
        {
          pfno: "300156",
          profile_nm: "biz.com",
          site_url: "biz.com",
        },
      ],
      teamSeq: 1,
    },
  ]);

  // useEffect(() => {
  //   setLoading(true);

  //   getTableData().then((result) => {
  //     setData(result);
  //   });
  //   setLoading(false);
  // }, [data]);

  const [modal, setModal] = useState({
    radioValue: "new",
    clientNm: "",
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },

    sorter: {
      field: "",
      order: "",
    },
  });

  const { sorter } = tableParams;
  let sortedData = [...data];

  if (sorter.field && sorter.order) {
    sortedData = [...data].sort((a, b) => {
      const isAsc = sorter.order === "ascend";
      const compareResult = a[sorter.field].localeCompare(b[sorter.field]);
      return isAsc ? compareResult : -compareResult;
    });
  }

  const handlePageSize = (selectedOption) => {
    const totalItems = data.length;
    const pageSize = selectedOption === "all" ? totalItems : selectedOption;

    setTableParams((prevParams) => ({
      ...prevParams,
      pagination: {
        ...prevParams.pagination,
        current: 1,
        pageSize: pageSize,
      },
    }));
  };

  const handleTableChange = (pagination, _, sorter) => {
    setTableParams({
      ...tableParams,
      pagination,
      sorter: {
        field: sorter.field,
        order: sorter.order,
      },
    });
  };

  const filteredData = sortedData.filter((row) => {
    if (search == "") {
      return row;
    } else if (
      row.clientNm.toLowerCase().includes(search.toLowerCase()) ||
      row.profile.some((item) =>
        item.profile_nm.toLowerCase().includes(search.toLowerCase())
      ) ||
      row.profile.some((item) =>
        item.site_url.toLowerCase().includes(search.toLowerCase())
      )
    ) {
      return row;
    }
  });

  const getDataCount = () => {
    return filteredData.length;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <div
      style={{
        float: "left",
        paddingRight: "15px",
        paddingLeft: "15px",
        paddingBottom: "20px",
        width: "75%",
      }}
    >
      <div>
        <Button
          type="primary"
          style={{
            marginRight: "5px",
            float: "left",
            fontSize: "12px",
            lineHeight: "1.5",
            backgroundColor: "#41b3f9",
          }}
          onClick={showModal}
        >
          광고주 등록
        </Button>
        <ClientEnrollModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          teams={teams}
          selectedItem={selectedItem}
        />
        <div>
          <Search
            placeholder="검색"
            style={{
              marginLeft: "3px",
              height: "33px",
              fontSize: "12px",
              width: "220px",
              float: "right",
            }}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <div>
          <label
            style={{
              float: "left",
              display: "inline-block",
              marginBottom: "5px",
            }}
          >
            <Select
              defaultValue={{ value: 10, label: "10개씩 보기" }}
              options={[
                { value: 10, label: "10개씩 보기" },
                { value: 20, label: "20개씩 보기" },
                { value: 30, label: "30개씩 보기" },
                { value: 50, label: "50개씩 보기" },
                { value: 100, label: "100개씩 보기" },
                { value: 200, label: "200개씩 보기" },
                { value: "all", label: "전체 보기" },
              ]}
              onChange={handlePageSize}
            />
          </label>
        </div>
        <TableTest
          data={filteredData}
          pagination={tableParams.pagination}
          handleTableChange={handleTableChange}
          loading={loading}
          teams={teams}
          selectedItem={selectedItem}
        />

        <div
          className="dataTables_info"
          style={{ float: "left", fontSize: "12px", marginTop: "-40px" }}
        >
          조회된 항목수 {getDataCount()}
        </div>
      </div>
    </div>
  );
};

export default Right;
