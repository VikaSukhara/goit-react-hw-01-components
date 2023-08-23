import {
  Wrapper,
  UserPhoto,
  Statistics,
  StatisticItem,
} from './Profile.styled';

export const Profile = ({ userInfo }) => {
  return (
    <Wrapper>
      <div>
        <UserPhoto src={userInfo.avatar} alt="User avatar" />
        <p>{userInfo.username}</p>
        <p>@{userInfo.tag}</p>
        <p>{userInfo.location}</p>
      </div>

      <Statistics>
        <StatisticItem>
          <span>Followers</span>
          <span> {userInfo.stats.followers}</span>
        </StatisticItem>
        <StatisticItem>
          <span>Views</span>
          <span> {userInfo.stats.views}</span>
        </StatisticItem>
        <StatisticItem>
          <span>Likes</span>
          <span> {userInfo.stats.likes}</span>
        </StatisticItem>
      </Statistics>
    </Wrapper>
  );
};
