import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { Divider } from '@mui/material';
import useAction from '../../hooks/useAction';
import {
  ICompanyRootReduxState,
  IEditFormValue,
  IRootReduxState,
  ITabFeed,
} from '../../interfaces';
import { VITE_API_BASE_URL } from '@/config';
import ProfileTabs from '@/components/ProfileTabs';
import ProfileInfo from '@/components/ProfileInfo';
import TabFeed from '@/components/TabFeed';
import UserEditModal from '@/components/UserEditModal';
import EditAvatarModal from '@/components/EditModalAvatar';
import Loading from '@/components/UI/Loading';
import ContactInfo from '@/components/ContactInfo';
import user_avatar from '@images/user-avatar.svg';
import Edit from '@images/edit.svg?react';
import Back from '@images/arrow-left.svg?react';
import ShareIcon from '@images/corner-up-right.svg?react';
import MoreIcon from '@images/more-horizontal.svg?react';
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
} from './style';
import UsersListing from '../UsersListing';
import { companyTabs } from '@/constants';
import { companyInfoSections } from '@/constants/profile';

const CompanyProfile = () => {
  const company = useSelector((state: ICompanyRootReduxState) => state.company.company);
  const posts = useSelector((state: ITabFeed) => state.post.post);
  const user = useSelector((state: IRootReduxState) => state.user.user);

  const [activeTab, setActiveTab] = useState('о компании');
  const [postCount, setPostCount] = useState(posts.length > 0 ? posts.length : 0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isModalEditOPen, setIsModalEditOPen] = useState(false);
  const [isModalEditContactInfoOPen, setIsModalEditContactInfoOPen] = useState(false);
  const [isModalContactInfoOPen, setIsModalContactInfoOPen] = useState(false);

  const avatarUrl = useMemo(
    () => (company ? VITE_API_BASE_URL + company.companyAvatarUrl : user_avatar),
    [company]
  );

  const { getCompanyByUserId } = useAction();

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        await getCompanyByUserId(user._id);
      } catch (error) {
        console.error('Error fetching company:', error);
      }
    };
    fetchCompany();
  }, [user._id]);

  const renderContent = () => {
    switch (activeTab) {
      case 'о компании':
        return (
          <ProfileInfo
            aboutMe={company.aboutCompany}
            interests={company.companyInterests}
            infoSections={companyInfoSections}
          />
        );
      case `Лента ${postCount}`:
        return <TabFeed posts={posts} />;
      case 'товары 10':
        break;
      case 'вакансии 10':
        break;
      case 'люди':
        return <UsersListing />;
      case 'trade 10':
        break;
      default:
        return null;
    }
  };

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };

  if (!user || !user.userInfo) {
    return <Loading />;
  }

  const handleModalEditContactInfoOPen = () => {
    setIsModalEditContactInfoOPen(true);
  };

  const handleModalContactInfoOPen = () => {
    setIsModalContactInfoOPen(true);
  };

  return (
    <>
      <StyledHeaderProfile>
        <StyledHeaderButtonContainer>
          <StyledBackButton>
            <Back />
          </StyledBackButton>
          <StyledButtonContainer>
            <StyledIcon>
              <ShareIcon />
            </StyledIcon>
            <StyledIcon>
              <MoreIcon />
            </StyledIcon>
          </StyledButtonContainer>
        </StyledHeaderButtonContainer>
        <StyledAvatarProfile>
          <img src={avatarUrl} alt="user-avatar" />
        </StyledAvatarProfile>
        <StyledProfileInfo>
          <StyledUserName>{company.companyName}</StyledUserName>
          <StyledStatus>Online</StyledStatus>
          <StyledEditProfileButton type="button" onClick={handleEditModalOpen}>
            Редактировать компанию
          </StyledEditProfileButton>
          <StyledAdditionalInfo>
            {company.companyLocation && <StyledText>{company.companyLocation}</StyledText>}
          </StyledAdditionalInfo>
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
      <ProfileTabs postCount={postCount} onTabChange={setActiveTab} tabs={companyTabs(postCount)} />
      <Divider />
      {renderContent()}
    </>
  );
};

export default CompanyProfile;
