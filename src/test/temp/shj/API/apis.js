import axios from "axios";

export const getList = async () => {
  const res = await axios.get(
    "https://e87143f0-aee6-4ce3-bc24-3149f9d6db79.mock.pstmn.io/api/table/test01"
  );
  return res.data;
};

export const getTableData = async (team_seq) => {
  const res = await axios.get(
    `https://e87143f0-aee6-4ce3-bc24-3149f9d6db79.mock.pstmn.io/clients?team_seq=${team_seq}`
  );
  return res.data;
};
