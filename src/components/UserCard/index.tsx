import { useEffect, useState } from 'react';
import { NotesOutlined, MoreHoriz } from '@mui/icons-material';
import { VITE_API_BASE_URL } from '@/config';
import CardSubscribeButton from '@components/UI/CardSubscribeButton';
import StrongButton from '@components/UI/StrongButton';
import { getPostByUserServices } from '@/services/post';
import { IPost } from '@/pages/PostViewPage/interface';
import { IUserCardProps } from './interfaces';
import {
  StyledUserCard,
  StyledUserCardFooter,
  StyledUserCardIcon,
  StyledUserCardInfo,
  StyledUserCardLocation,
  StyledUserCardMore,
  StyledUserCardPost,
  StyledUserCardPosts,
  StyledUserCardWork,
} from './style';
import userStatusIcon from '@images/userStatus.svg';
import userVerifiedIcon from '@images/userVerified.svg';
import userAvatar from '@images/userAvatar.svg';

const UserCard = ({
  id,
  fullName,
  isVerified,
  avatar,
  work,
  location,
  ahubLink,
}: IUserCardProps) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userPosts, setUserPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getUserPosts();
  }, []);

  const handleSubscribe = () => {
    setIsSubscribed(isSubscribed => !isSubscribed);
  };

  const getUserPosts = async () => {
    const response = await getPostByUserServices(id);
    setUserPosts(response.data);
  };

  return (
    <StyledUserCard>
      <StyledUserCardIcon
        onError={e => (e.currentTarget.src = userAvatar)}
        src={VITE_API_BASE_URL + avatar}
        alt="user profile icon"
      />
      <StyledUserCardPosts>
        {userPosts.map(post => (
          <StyledUserCardPost key={post._id} to={`/post/${post._id}`}>
            {post.images.length ? (
              <img src={VITE_API_BASE_URL + post.images[0]} alt="userPost" />
            ) : (
              <NotesOutlined />
            )}
          </StyledUserCardPost>
        ))}
      </StyledUserCardPosts>
      <StyledUserCardInfo>
        <a href={ahubLink}>
          <h5>{fullName}</h5>
        </a>
        <img src={userStatusIcon} alt="status" />
        {isVerified && <img src={userVerifiedIcon} alt="verified" />}
        <StyledUserCardWork>
          {work
            ? `${work?.company} • ${work?.title}`
            : 'Неизвестное место работы'}
        </StyledUserCardWork>
        <StyledUserCardLocation>{location}</StyledUserCardLocation>
        <StyledUserCardFooter>
          <CardSubscribeButton
            handleClick={handleSubscribe}
            isSubscribed={isSubscribed}
          />
          <StrongButton>НАПИСАТЬ</StrongButton>
          <StyledUserCardMore>
            <MoreHoriz />
          </StyledUserCardMore>
        </StyledUserCardFooter>
      </StyledUserCardInfo>
    </StyledUserCard>
  );
};

export default UserCard;
