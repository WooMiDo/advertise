import React, { useState } from "react";
import YellowBg from "./YellowBg";
import Sb from "./Sb";

// const data = [
//   {
//     parent: [1],
//     path: "비즈스프링",
//     seq: 1,
//     teamNm: "비즈스프링",
//     teamLevel: 1,
//   },
//   {
//     parent: [1, 175],
//     path: "비즈스프링 > PO",
//     seq: 175,
//     teamNm: "PO",
//     teamLevel: 2,
//   },
//   {
//     parent: [1, 144],
//     path: "비즈스프링 > 디지털마케팅부",
//     seq: 144,
//     teamNm: "디지털마케팅부",
//     teamLevel: 2,
//   },
//   {
//     parent: [1, 141],
//     path: "비즈스프링 > 전략기획부",
//     seq: 141,
//     teamNm: "전략기획부",
//     teamLevel: 2,
//   },
//   {
//     parent: [1, 141, 146],
//     path: "비즈스프링 > 전략기획부 > 개발팀",
//     seq: 146,
//     teamNm: "개발팀",
//     teamLevel: 3,
//   },
//   {
//     parent: [1, 144, 145],
//     path: "비즈스프링 > 디지털마케팅부> 광고 1팀",
//     seq: 145,
//     teamNm: "광고 1팀",
//     teamLevel: 3,
//   },
//   {
//     parent: [1, 144, 147],
//     path: "비즈스프링 > 디지털마케팅부> 광고 2팀",
//     seq: 147,
//     teamNm: "광고 2팀",
//     teamLevel: 3,
//   },
//   {
//     parent: [1, 144, 164],
//     path: "비즈스프링 > 디지털마케팅부> 광고 3팀",
//     seq: 164,
//     teamNm: "광고 3팀",
//     teamLevel: 3,
//   },
//   {
//     parent: [1, 141, 163],
//     path: "비즈스프링 > 전략기획부 > 기획팀",
//     seq: 163,
//     teamNm: "기획팀",
//     teamLevel: 3,
//   },
// ];

const Left = ({ data, selectedItem, setSelectedItem, onLinkClick }) => {
  // const rootValue = data.filter(
  //   (item) => item["parent"].length === 1 && item.teamLevel === 1
  // );
  // const [selectedItem, setSelectedItem] = useState(rootValue[0]["parent"][0]);

  return (
    <div
      style={{
        paddingRight: "15px",
        paddingLeft: "15px",
        float: "left",
      }}
    >
      <YellowBg />
      <Sb
        items={data}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        // onLinkClick={onLinkClick}
      />
    </div>
  );
};

export default Left;
