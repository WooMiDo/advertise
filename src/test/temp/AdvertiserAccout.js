import React from "react";
import { Col, Tabs, Row } from "antd";
import { Space, Typography, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "../components/Breadcrumd";
import { MdManageAccounts } from "react-icons/md";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import FilterTab from "./shj/FilterTab";
import Left from "./shj/Left";
import Right from "./shj/Right";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout, theme } from "antd";
import { useState, useEffect } from "react";
import Header from "./Header";
import Sider from "./Sider";
import { getTableData } from "./shj/API/apis";

const { Text } = Typography;
const { Content } = Layout;

const AdvertiserAccout = () => {
  const [data, setData] = useState([]);
  const [collapse, setCollapse] = useState();
  const colChange = (value) => {
    setCollapse(value);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    { title: "MANAGER CONSOLE", href: "/" },
    { title: "광고주 계정 등록 및 현황" },
  ];

  // useEffect(() => {
  //   // Fetch the data using the getTableData function
  //   getTableData(1).then((result) => {
  //     setData(result);
  //   });
  // }, []);

  // const handleLinkClick = (dataSeqValue) => {
  //   getTableData(dataSeqValue).then((result) => {
  //     setData(result);
  //   });
  // };

  const teams = [
    {
      parent: [1],
      path: "비즈스프링",
      seq: 1,
      teamNm: "비즈스프링",
      teamLevel: 1,
    },
    {
      parent: [1, 175],
      path: "비즈스프링 > PO",
      seq: 175,
      teamNm: "PO",
      teamLevel: 2,
    },
    {
      parent: [1, 144],
      path: "비즈스프링 > 디지털마케팅부",
      seq: 144,
      teamNm: "디지털마케팅부",
      teamLevel: 2,
    },
    {
      parent: [1, 141],
      path: "비즈스프링 > 전략기획부",
      seq: 141,
      teamNm: "전략기획부",
      teamLevel: 2,
    },
    {
      parent: [1, 141, 146],
      path: "비즈스프링 > 전략기획부 > 개발팀",
      seq: 146,
      teamNm: "개발팀",
      teamLevel: 3,
    },
    {
      parent: [1, 144, 145],
      path: "비즈스프링 > 디지털마케팅부> 광고 1팀",
      seq: 145,
      teamNm: "광고 1팀",
      teamLevel: 3,
    },
    {
      parent: [1, 144, 147],
      path: "비즈스프링 > 디지털마케팅부> 광고 2팀",
      seq: 147,
      teamNm: "광고 2팀",
      teamLevel: 3,
    },
    {
      parent: [1, 144, 164],
      path: "비즈스프링 > 디지털마케팅부> 광고 3팀",
      seq: 164,
      teamNm: "광고 3팀",
      teamLevel: 3,
    },
    {
      parent: [1, 141, 163],
      path: "비즈스프링 > 전략기획부 > 기획팀",
      seq: 163,
      teamNm: "기획팀",
      teamLevel: 3,
    },
  ];
  const rootValue = teams.filter(
    (item) => item["parent"].length === 1 && item.teamLevel === 1
  );
  const [selectedItem, setSelectedItem] = useState(rootValue[0]["parent"][0]);
  // const [selectedItem, setSelectedItem] = useState([]);

  return (
    <BrowserRouter>
      <Layout>
        <Header onValueChange={colChange} style={{ paddingTop: "60px" }} />
        <Layout>
          <Sider collapsed={collapse} />
          <Layout>
            <Content
              style={{
                padding: 24,
                background: colorBgContainer,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Row className="title-Row">
                <Col xs={24}>
                  <Breadcrumb items={items} />
                </Col>
                <Col xs={24}>
                  <div className="active-title">
                    <MdManageAccounts className="title-icon" />
                    <span className="title-text">광고주 계정 등록 및 현황</span>
                  </div>
                </Col>
              </Row>
              <div>
                <div
                  style={{
                    border: "1px solid #e8ecee",
                    padding: "25px",
                    marginBottom: "30px",
                  }}
                >
                  <Space size="large">
                    <Text strong level={4}>
                      필터 항목&nbsp;
                      <FontAwesomeIcon icon={faCircleChevronRight} />
                    </Text>
                    <FilterTab />
                  </Space>
                </div>
              </div>
              {/* <Left onLinkClick={handleLinkClick} /> */}
              <Left
                data={teams}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
              <Right teams={teams} selectedItem={selectedItem} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default AdvertiserAccout;
