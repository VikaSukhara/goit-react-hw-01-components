import {FriendsList, FriendItem, Status} from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <FriendItem key = {friend.id}>
            <Status online={friend.isOnline}></Status>
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </FriendItem>
        );
      })}
    </FriendsList>
  );
};
