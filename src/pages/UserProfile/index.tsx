import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { Menu, MenuItem, Divider } from '@mui/material';
import useAction from '../../hooks/useAction';
import { IEditFormValue, IRootReduxState, ITabFeed } from '../../interfaces';
import { VITE_API_BASE_URL } from '@/config';
import EditModalContactInfo from '@/components/EditModalContactInfo';
import ProfileTabs from '@/components/ProfileTabs';
import ProfileInfo from '@/components/ProfileInfo';
import TabFavourite from '@/components/TabFavourite';
import TabFeed from '@/components/TabFeed';
import TabResume from '@/components/TabResume';
import UserEditModal from '@/components/UserEditModal';
import EditAvatarModal from '@/components/EditModalAvatar';
import Loading from '@/components/UI/Loading';
import ContactInfo from '@/components/ContactInfo';
import { cardsData } from '../../constants/cardData';
import { formatDate } from '@/helpers/helpers';
import { menuMoreButton, userTabs } from '@/constants';
import { userInfoSections } from '@/constants/profile';
import EditCoverModal from '@/components/EditModalCover';
import user_avatar from '@images/user-avatar.svg';
import Edit from '@images/edit.svg?react';
import Back from '@images/arrow-left.svg?react';
import ShareIcon from '@images/corner-up-right.svg?react';
import MoreIcon from '@images/more-horizontal.svg?react';
import MapPin from '@images/map-pin.svg?react';
import {
  StyledHeaderProfile,
  StyledBackButton,
  StyledProfileInfo,
  StyledAvatarProfile,
  StyledUserName,
  StyledStatus,
  StyledEditProfileButton,
  StyledFollowersInfo,
  StyledContactInfo,
  StyledContactText,
  StyledButtonEdit,
  StyledButtonContainer,
  StyledIcon,
  StyledHeaderButtonContainer,
  StyledAdditionalInfo,
  StyledText,
  StyledDot,
  StyledLocation,
  StyledEditAvatar,
  StyledCoverImage,
  StyledCoverEditButton,
  StyledContainerMenuItem,
  StyledItem,
  StyledAvatarImg,
} from './style';
import ProfileLoading from '@/components/UI/Loading/Profile';

interface IUserProfile {
  handleModalPost: () => void;
}

const UserProfile = ({ handleModalPost }: IUserProfile) => {
  const user = useSelector((state: IRootReduxState) => state.user.user);
  const posts = useSelector((state: ITabFeed) => state.post.post);
  const [activeTab, setActiveTab] = useState('Профиль');
  const [postCount, setPostCount] = useState(posts.length > 0 ? posts.length : 0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isModalEditOPen, setIsModalEditOPen] = useState(false);
  const [isModalEditContactInfoOPen, setIsModalEditContactInfoOPen] = useState(false);
  const [isModalContactInfoOPen, setIsModalContactInfoOPen] = useState(false);
  const [isCoverModalOpen, setIsCoverModalOpen] = useState(false);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState<HTMLElement | null>(null);

  const handleMoreMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMoreMenuAnchorEl(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchorEl(null);
  };

  const avatarUrl = useMemo(
    () => (user ? VITE_API_BASE_URL + user.userInfo?.avatarUrl : user_avatar),
    [user]
  );

  const coverUrl = useMemo(
    () => (user && user.userInfo?.coverUrl ? VITE_API_BASE_URL + user.userInfo.coverUrl : null),
    [user]
  );

  const filteredMenuItems = useMemo(() => {
    return coverUrl
      ? menuMoreButton.filter(item => item.text !== 'Загрузить обложку')
      : menuMoreButton.filter(
          item => item.text !== 'Изменить обложку' && item.text !== 'Удалить обложку'
        );
  }, [coverUrl]);

  const { getUser, editUser, getPostsByUser } = useAction();

  useEffect(() => {
    getUser();
  }, [avatarUrl, coverUrl]);

  useEffect(() => {
    if (user?._id) {
      getPostsByUser(user._id);
    }
  }, [user]);

  useEffect(() => {
    if (posts) {
      setPostCount(posts.length);
    }
  }, [posts.length]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Профиль':
        return (
          <ProfileInfo
            aboutMe={user && user.userInfo ? user.userInfo.aboutMe : ''}
            interests={user && user.userInfo ? user.userInfo.interests : ''}
            infoSections={userInfoSections}
          />
        );
      case `Лента ${postCount}`:
        return <TabFeed posts={posts} handleModalPost={handleModalPost} />;
      case 'Резюме':
        return <TabResume />;
      case 'Избранное':
        return <TabFavourite />;
      default:
        return null;
    }
  };

  const handleMenuItemClick = (item: string) => {
    handleMoreMenuClose();
    switch (item) {
      case 'Распечатать резюме':
        break;
      case 'Скачать PDF резюме':
        break;
      case 'Загрузить обложку':
        handleCoverModal();
        break;
      case 'Удалить обложку':
        handleCoverDelete();
        break;
      case 'Изменить обложку':
        handleCoverModal();
        break;
      default:
        break;
    }
  };

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  if (!user || !user.userInfo) {
    return <ProfileLoading />;
  }

  const handleModalEditOpen = () => {
    setIsModalEditOPen(true);
  };

  const handleModalEditClose = () => {
    setIsModalEditOPen(false);
  };

  const handleModalEditContactInfoOPen = () => {
    setIsModalEditContactInfoOPen(true);
  };

  const handleModalEditContactInfoClose = () => {
    setIsModalEditContactInfoOPen(false);
  };

  const handleModalContactInfoOPen = () => {
    setIsModalContactInfoOPen(true);
  };

  const handleModalContactInfoClose = () => {
    setIsModalContactInfoOPen(false);
  };

  const formattedLanguages = user.userInfo?.languages?.join(', ');
  const formatedDate = formatDate(user?.userInfo?.bornDate);

  const handleAvatarUpdate = ({ avatarUrl }: IEditFormValue) => {
    if (!avatarUrl) return;
    let data = new FormData();
    data.append('avatarUrl', avatarUrl);

    editUser(data);
  };

  const handleCoverModal = () => {
    setIsCoverModalOpen(prevState => !prevState);
  };

  const handleCoverUpdate = ({ coverUrl }: IEditFormValue) => {
    if (!coverUrl) return;
    let data = new FormData();
    data.append('coverUrl', coverUrl);

    editUser(data);
  };

  const handleCoverDelete = async () => {
    const updatedUserInfo = { ...user.userInfo, coverUrl: '' };
    await editUser(updatedUserInfo);
    handleMoreMenuClose();
  };

  return (
    <>
      {coverUrl && <StyledCoverImage style={{ backgroundImage: `url(${coverUrl})` }} />}
      <StyledHeaderProfile $hasCover={Boolean(coverUrl)}>
        <StyledHeaderButtonContainer $hasCover={Boolean(coverUrl)}>
          <StyledBackButton $hasCover={Boolean(coverUrl)}>
            <Back />
          </StyledBackButton>
          <StyledButtonContainer $hasCover={Boolean(coverUrl)}>
            <StyledIcon $hasCover={Boolean(coverUrl)}>
              <ShareIcon />
            </StyledIcon>
            <StyledIcon $hasCover={Boolean(coverUrl)}>
              <MoreIcon onClick={handleMoreMenu} />
            </StyledIcon>
          </StyledButtonContainer>
          <Menu
            anchorEl={moreMenuAnchorEl}
            open={Boolean(moreMenuAnchorEl)}
            onClose={handleMoreMenuClose}
          >
            <StyledContainerMenuItem>
              {filteredMenuItems.map(item => (
                <MenuItem key={item.id} onClick={() => handleMenuItemClick(item.text)}>
                  <StyledItem>
                    <img src={item.icon} alt={item.text} />
                    {item.text}
                  </StyledItem>
                </MenuItem>
              ))}
            </StyledContainerMenuItem>
          </Menu>
        </StyledHeaderButtonContainer>
        <StyledAvatarProfile $hasCover={Boolean(coverUrl)}>
          <StyledAvatarImg $hasCover={Boolean(coverUrl)} src={avatarUrl} alt="user-avatar" />
          <StyledEditAvatar type="button" onClick={handleModalEditOpen}>
            <Edit />
          </StyledEditAvatar>
        </StyledAvatarProfile>
        <StyledProfileInfo>
          <StyledUserName $hasCover={Boolean(coverUrl)}>
            {user.firstName} {user.lastName}
          </StyledUserName>
          <StyledStatus $hasCover={Boolean(coverUrl)}>Online</StyledStatus>
          <StyledEditProfileButton type="button" onClick={handleEditModalOpen}>
            Редактировать профиль
          </StyledEditProfileButton>
          <StyledAdditionalInfo>
            {user.userInfo?.lastWork && (
              <StyledText>
                {user.userInfo.lastWork.company}
                <StyledDot>&middot;</StyledDot>
                {user.userInfo.lastWork.title}
              </StyledText>
            )}
            {user.userInfo?.education && (
              <StyledText>{user.userInfo.education.institution}</StyledText>
            )}
          </StyledAdditionalInfo>
          <StyledAdditionalInfo>
            {user.userInfo?.languages && <StyledText>{formattedLanguages} языки</StyledText>}
            {user.userInfo?.bornDate && <StyledText>Дата Рождения: {formatedDate} года</StyledText>}
          </StyledAdditionalInfo>
          <StyledLocation>
            {user.userInfo?.location && (
              <StyledText>
                <MapPin />
                {user.userInfo.location}
              </StyledText>
            )}
          </StyledLocation>
          <StyledFollowersInfo>
            <span>0 Подписчиков</span>
            &middot;
            <span>0 Подписок</span>
          </StyledFollowersInfo>
          <StyledContactInfo>
            <StyledContactText type="button" onClick={handleModalContactInfoOPen}>
              Контактная информация
            </StyledContactText>
            <StyledButtonEdit type="button" onClick={handleModalEditContactInfoOPen}>
              <Edit />
            </StyledButtonEdit>
          </StyledContactInfo>
        </StyledProfileInfo>
      </StyledHeaderProfile>
      <ProfileTabs postCount={postCount} onTabChange={setActiveTab} tabs={userTabs(postCount)} />
      <Divider />
      {renderContent()}
      {isEditModalOpen && (
        <UserEditModal
          open={isEditModalOpen}
          isCloseModal={handleEditModalClose}
          title="Редактирование. Основная информация"
          onCloseTitle="Отмена"
          titleButton="Сохранить"
        />
      )}
      {isModalEditOPen && (
        <EditAvatarModal
          open={isModalEditOPen}
          isCloseModal={handleModalEditClose}
          title="Редатиктирование аватара"
          modalCloseTitle="Удалить"
          titleButton="Сохранить"
          handleActionButton={handleAvatarUpdate}
        />
      )}
      {isModalEditContactInfoOPen && (
        <EditModalContactInfo
          open={isModalEditContactInfoOPen}
          isCloseModal={handleModalEditContactInfoClose}
          title="Редактирование контактной информации"
          onCloseTitle="Отмена"
          titleButton="Сохранить"
        />
      )}
      {isModalContactInfoOPen && (
        <ContactInfo
          open={isModalContactInfoOPen}
          isCloseModal={handleModalContactInfoClose}
          title={`${user.firstName} ${user.lastName}`}
        />
      )}
      {isCoverModalOpen && (
        <EditCoverModal
          open={isCoverModalOpen}
          isCloseModal={handleCoverModal}
          title="Редактирование обложки"
          modalCloseTitle="Удалить"
          titleButton="Сохранить"
          handleActionButton={handleCoverUpdate}
        />
      )}
    </>
  );
};

export default UserProfile;
