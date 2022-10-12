import PropTypes from 'prop-types';
import {
  ItemFriends,
  AvatarFriends,
  NameFriends,
  IsOnline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemFriends>
      <IsOnline isOnline={isOnline}>{isOnline}</IsOnline>
      <AvatarFriends src={avatar} alt="User avatar" width="48" />
      <NameFriends>{name}</NameFriends>
    </ItemFriends>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
