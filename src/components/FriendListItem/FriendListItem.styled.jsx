import styled from '@emotion/styled';

export const ItemFriends = styled.li`
  border: 1px solid black;
  border-radius: 9px;

  padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px #6b6b6bbf;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const AvatarFriends = styled.img`
  margin-right: 25px;
  width: 70px;
  border-radius: 5px;
`;
export const NameFriends = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
const setBgColor = props => {
  return props.isOnline ? '#0b970b' : '#b32929';
};

export const IsOnline = styled.span`
  margin-right: 25px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${setBgColor};
`;
