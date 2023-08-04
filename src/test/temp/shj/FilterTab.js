import React, { useState } from "react";
import { Select, Space } from "antd";

const options = [
  {
    label: "전체",
    value: "전체",
  },
  {
    label: "사용중",
    value: "사용중",
  },
  {
    label: "사용중지",
    value: "사용중지",
  },
];

const FilterTab = () => {
  const [open, setOpen] = useState(false);

  return (
    <Space
      style={{
        width: "310px",
      }}
      direction="vertical"
    >
      <Select
        style={{ width: "100%" }}
        mode="multiple"
        allowClear
        placeholder="사용 상태"
        defaultValue={[]}
        open={open}
        onDropdownVisibleChange={(visible) => setOpen(visible)}
        onChange={(visible) => setOpen(false)}
        options={options}
        showArrow={false}
      />
    </Space>
  );
};

export default FilterTab;
