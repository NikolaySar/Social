import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootReduxState } from '@/interfaces';
import { VITE_API_BASE_URL } from '@/config';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem, Divider } from '@mui/material';
import useAction from '@/hooks/useAction';
import userAvatar from '@images/userAvatar.svg';
import message from '@images/message-icon.svg';
import notification from '@images/notification-icon.svg';
import online from '@images/online-icon.svg';
import { menuItems, menuCreateItems } from '../../../constants';
import {
  StyledAuthContainer,
  StyledCreateButton,
  StyledAvatar,
  StyledOnline,
  StyledIconContainer,
  StyledCounter,
  StyledAvatarContainer,
  StyledContainerMenuItem,
  StyledItem,
  StyledIcon,
  StyledAvatarProfile,
} from './style';

const IsAuthInner: React.FC<{
  handleLogout: () => void;
  handleModalPost: () => void;
}> = ({ handleLogout, handleModalPost }) => {
  const [avatarMenuAnchorEl, setAvatarMenuAnchorEl] =
    useState<HTMLElement | null>(null);
  const [createMenuAnchorEl, setCreateMenuAnchorEl] =
    useState<HTMLElement | null>(null);
  const user = useSelector((state: IRootReduxState) => state.user.user);
  const { getUser } = useAction();

  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate();

  const handleAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAvatarMenuAnchorEl(event.currentTarget);
  };

  const avatarUrl = useMemo(
    () => (user ? VITE_API_BASE_URL + user.userInfo?.avatarUrl : userAvatar),
    [user]
  );

  const handleCreateMenu = (event: React.MouseEvent<HTMLElement>) => {
    setCreateMenuAnchorEl(event.currentTarget);
  };

  const handleCreateMenuClose = () => {
    setCreateMenuAnchorEl(null);
  };

  const handleAvatarMenuClose = () => {
    setAvatarMenuAnchorEl(null);
  };

  const handleMenuClose = () => {
    handleCreateMenuClose();
    handleAvatarMenuClose();
  };

  const handleMenuItemClick = (item: string) => {
    handleMenuClose();
    switch (item) {
      case 'Выйти':
        handleLogout();
        navigate('/');
        break;
      case 'Мой профиль':
        navigate('/profile');
        break;
      case 'Компанию':
        navigate('/company-edit');
        break;
      case 'Пост':
        handleModalPost();
        break;
      default:
        break;
    }
  };

  return (
    <StyledAuthContainer>
      <StyledCreateButton type="button" onClick={handleCreateMenu}>
        Создать
        <ArrowDropDownIcon />
      </StyledCreateButton>
      <StyledAvatarContainer onClick={handleAvatar}>
        <StyledAvatar>
          <StyledAvatarProfile src={avatarUrl} alt="avatar" />
          <StyledOnline>
            <img src={online} alt="online" />
          </StyledOnline>
        </StyledAvatar>
        <ArrowDropDownIcon />
      </StyledAvatarContainer>
      <Menu
        anchorEl={createMenuAnchorEl}
        open={Boolean(createMenuAnchorEl)}
        onClose={handleCreateMenuClose}
      >
        <StyledContainerMenuItem>
          {menuCreateItems.map(item => (
            <MenuItem
              key={item.text}
              onClick={() => {
                handleMenuItemClick(item.text || '');
              }}
            >
              <StyledItem>{item.text}</StyledItem>
            </MenuItem>
          ))}
        </StyledContainerMenuItem>
      </Menu>
      <Menu
        anchorEl={avatarMenuAnchorEl}
        open={Boolean(avatarMenuAnchorEl)}
        onClose={handleAvatarMenuClose}
      >
        <StyledContainerMenuItem>
          {menuItems.map(item =>
            item.divider ? (
              <Divider key={item.id} />
            ) : (
              <MenuItem
                key={item.id}
                onClick={() => handleMenuItemClick(item.text || '')}
              >
                <StyledItem>
                  <img src={item.icon} alt={item.text} />
                  {item.text}
                </StyledItem>
              </MenuItem>
            )
          )}
        </StyledContainerMenuItem>
      </Menu>
      <StyledIcon>
        <StyledIconContainer>
          <img src={notification} alt="notification" />
          <StyledCounter>1</StyledCounter>
        </StyledIconContainer>
        <StyledIconContainer>
          <img src={message} alt="message" />
          <StyledCounter>1</StyledCounter>
        </StyledIconContainer>
      </StyledIcon>
    </StyledAuthContainer>
  );
};
export default IsAuthInner;
