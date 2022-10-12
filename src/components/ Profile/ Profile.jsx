import PropTypes from 'prop-types';

import {
  ProfileCard,
  FirstContainer,
  ProfileImage,
  UserNAme,
  UserTag,
  UserLocation,
  UserStats,
  ContainerStats,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <ProfileCard>
      <FirstContainer>
        <ProfileImage src={avatar} alt="User avatar" />
        <UserNAme>{username}</UserNAme>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </FirstContainer>

      <UserStats>
        <ContainerStats>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{stats?.followers}</UserQuantity>
        </ContainerStats>
        <ContainerStats>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{stats?.views}</UserQuantity>
        </ContainerStats>
        <ContainerStats>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{stats?.likes}</UserQuantity>
        </ContainerStats>
      </UserStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
