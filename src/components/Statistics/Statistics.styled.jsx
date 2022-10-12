import styled from '@emotion/styled';

function getRandomHexColor(index) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const SectionData = styled.section`
  margin: 60px auto;
  background-color: #fff;

  width: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Roboto', sans-serif;

  border: 1px solid grey;
`;
export const Title = styled.h2`
  text-align: center;
  line-height: 20px;
  font-weight: 600;
  color: grey;

  padding: 30px 40px;
  margin: 0;
`;
export const ListData = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
`;
export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 65px;
  height: 60px;
  background-color: ${props => getRandomHexColor(props.index)};
`;
export const Label = styled.span`
  font-size: 12px;
  line-height: 40px;
  display: block;
  flex-basis: 100%;
  margin: 0;
  padding: 0;
  height: 30px;
  color: #fff;
`;
export const Percentage = styled.span`
font-size: 18px
font-size: 12px;
  line-height: 40px;
  display: block;
  flex-basis: 100%;
  margin: 0;
  padding: 0;
  height: 30px;
  color: #fff;`;
