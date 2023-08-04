import React, { useEffect, useState } from "react";
import { ImFolder, ImFolderOpen } from "react-icons/im";
// import { getTableData } from "./API/apis";

const SubTree = ({ item, selectedItem, setSelectedItem, onLinkClick }) => {
  const hasChildren = item.childrens && item.childrens.length > 0;
  const [collapsed, setCollapsed] = useState(false);
  // const [dataLength, setDataLength] = useState(0);

  // useEffect(() => {
  //   getTableData(item.seq).then((result) => {
  //     setDataLength(result.length);
  //   });
  // }, [item.seq]);

  const handleClick = () => {
    if (selectedItem === item.seq) return;
    setSelectedItem(item.seq);
    // onLinkClick(item.seq);
  };

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <li
      data-seq={item.seq}
      key={item.seq}
      className={`${hasChildren ? "parent_li" : ""} ${
        selectedItem === item.seq ? "li_selected" : ""
      }`}
      style={{
        padding: "10px 0px 0 5px",
        position: "relative",
        listStyleType: "none",
      }}
    >
      <span
        style={{
          background: "#fff",
          color: "#666",
          border: "1px solid #ccc",
          borderRadius: "3px",
          display: "inline-block",
          padding: "5px",
        }}
      >
        {hasChildren ? (
          collapsed ? (
            <ImFolder
              onClick={toggleCollapse}
              style={{
                marginRight: "10px",
              }}
            />
          ) : (
            <ImFolderOpen
              onClick={toggleCollapse}
              style={{ marginRight: "10px" }}
            />
          )
        ) : (
          <ImFolder style={{ marginRight: "10px" }} />
        )}

        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
          onClick={() => {
            handleClick();
          }}
        >
          {item.teamNm}
        </a>
      </span>
      <div className="badge">0</div>
      {!collapsed && (
        <ul style={{ padding: "revert" }}>
          {item.childrens.map((child) => (
            <SubTree
              item={child}
              key={child.seq}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              // onLinkClick={onLinkClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SubTree;
