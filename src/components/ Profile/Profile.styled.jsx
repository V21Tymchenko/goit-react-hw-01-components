import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 30px auto;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  width: 250px;
  height: 330px;
`;
export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;
export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 30px;
  margin-bottom: 24px;
`;
export const UserNAme = styled.p`
  margin: 0;
  padding: 0;
  line-height: 32px;

  font-size: 18px;
  color: #122236;
  font-weight: 800;
`;
export const UserTag = styled.p`
  margin: 0;
  padding: 0;
  line-height: 32px;

  font-size: 14px;
  color: #768696;
  font-weight: 400;
`;
export const UserLocation = styled.p`
  margin: 0;
  padding: 0;
  line-height: 32px;

  font-size: 14px;
  color: #768696;
  font-weight: 400;
`;
export const UserStats = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ContainerStats = styled.li`
  flex-basis: 33.33%;
  display: flex;
  flex-wrap: wrap;
  height: 73px;
  border: 1px solid #e4e9f0;
  background-color: #f3f6f9;
`;
export const UserLabel = styled.span`
  flex-basis: 100%;
  text-align: center;
  line-height: 20px;
  font-weight: 400;
  font-size: 12px;
  color: #768696;
  margin-top: auto;
`;
export const UserQuantity = styled.span`
  font-weight: 900;
  font-size: 14px;
  color: #1f3349;
  margin-bottom: auto;
  flex-basis: 100%;
  text-align: center;
  line-height: 20px;
`;
