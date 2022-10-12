import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 60px auto;
  width: 875px;
  border-radius: 6px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;
`;
export const TableBody = styled.tbody`
  font-size: 15px;
  font-weight: 300;
  line-height: 30px;
  background-color: #ecf2f3;
`;
export const TableHead = styled.thead`
  color: #fff;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 800;
  line-height: 45px;
  background-color: #02b9c2;
`;
export const TableType = styled.td`
  text-align: left;
  padding-left: 112px;
  text-transform: capitalize;
  border-bottom: 2px solid #e0e6e7;
`;
export const TableAmount = styled.td`
  border-left: 2px solid #e0e6e7;
  border-bottom: 2px solid #e0e6e7;
  padding: 10px;
`;
export const TableCurrency = styled.td`
  border-left: 2px solid #e0e6e7;
  border-bottom: 2px solid #e0e6e7;
  padding: 10px;
`;
export const HeadAmount = styled.th`
  border-left: 2px solid #e0e6e7;
  border-right: 2px solid #e0e6e7;
  padding: 10px;
`;
