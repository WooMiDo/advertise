import React from "react";
import SubTree from "./SubTree";

const Sb = ({ items, selectedItem, setSelectedItem, onLinkClick }) => {
  const rootValue = items.filter(
    (item) => item["parent"].length === 1 && item.teamLevel === 1
  );
  const nest = (items, seq = rootValue[0]["parent"][0], link = "parent") =>
    items
      .filter((item) => item[link][item[link].length - 2] === seq)
      .map((item) => ({
        ...item,
        childrens: nest(items, item.seq),
      }));
  const tree = nest(items);

  const root = items
    .filter((item) => item["parent"].length === 1)
    .map((item) => ({ ...item, childrens: tree }));

  return (
    <div id="custom-tree" className="easy-tree">
      <ul
        style={{
          paddingLeft: "15px",
          paddingBottom: "20px",
          paddingTop: "10px",
          border: "1px solid #e4e7ea",
        }}
      >
        {/* {tree.map((subItem, index) => (
          <SubTree
            item={subItem}
            key={index}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            // onLinkClick={onLinkClick}
          />
        ))} */}
        {root.map((subItem, index) => (
          <SubTree
            item={subItem}
            key={index}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            // onLinkClick={onLinkClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sb;
