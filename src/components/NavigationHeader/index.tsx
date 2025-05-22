import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';
import CustomInputSearch from '../UI/CustomInputSearch';
import IsAuthInner from '../UI/IsAuthInner';
import IsNotAuthInner from '../UI/IsNotAuthInner';
import { IsNotAuthInnerProps } from '../../interfaces';
import { menuFeedItems } from '../../constants';
import useAction from '../../hooks/useAction';
import { IAuthUser } from './interface';
import logo from '@images/ahub-logo-nav.svg';
import burger from '@images/burger-menu.svg';
import close from '@images/close.svg';
import {
  StyledNavbarContainer,
  StyledLogo,
  StyledLogoContainer,
  StyledLogoImage,
  StyledTitle,
  StyledToolbar,
  StyledContainerMenuItem,
  StyledFeedButton,
  StyledItem,
} from './style';

const NavigationHeader: React.FC<
  IsNotAuthInnerProps & { handleModalPost: () => void }
> = ({ handleModalAuth, handleModalRegister, handleModalPost }) => {
  const [feedMenuAnchorEl, setFeedMenuAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const token = localStorage.getItem('token');

  const isAuthUser = useSelector((state: IAuthUser) => state.user.isAuth);
  const [isAuthUpdate, setIsAuthUpdate] = useState(isAuthUser);

  useEffect(() => {
    if (token) {
      setIsAuthUpdate(true);
    }
  }, [isAuthUser]);

  const { logoutUser } = useAction();

  const handleLogout = () => {
    logoutUser();
    setIsAuthUpdate(false);
  };

  const handleFeedMenu = (event: React.MouseEvent<HTMLElement>) => {
    setFeedMenuAnchorEl(event.currentTarget);
  };

  const handleFeedMenuClose = () => {
    setFeedMenuAnchorEl(null);
  };

  return (
    <StyledNavbarContainer>
      <StyledToolbar>
        <StyledLogo>
          <StyledLogoContainer>
            <StyledLogoImage src={logo} alt="Logo-nav" />
          </StyledLogoContainer>
          <StyledTitle>Network</StyledTitle>
        </StyledLogo>
        <CustomInputSearch />
        {isAuthUpdate ? (
          <IsAuthInner
            handleLogout={handleLogout}
            handleModalPost={handleModalPost}
          />
        ) : (
          <IsNotAuthInner
            handleModalAuth={handleModalAuth}
            handleModalRegister={handleModalRegister}
          />
        )}
        <StyledFeedButton
          onClick={handleFeedMenu}
          active={Boolean(feedMenuAnchorEl)}
        >
          <img
            src={feedMenuAnchorEl ? close : burger}
            alt={feedMenuAnchorEl ? 'close' : 'burger-menu'}
          />

          <span>Лента</span>
        </StyledFeedButton>
        <Menu
          anchorEl={feedMenuAnchorEl}
          open={Boolean(feedMenuAnchorEl)}
          onClose={handleFeedMenuClose}
        >
          {menuFeedItems.map(item => (
            <StyledContainerMenuItem to={item.linkTo} key={item.text}>
              <MenuItem onClick={handleFeedMenuClose}>
                <StyledItem>{item.text}</StyledItem>
              </MenuItem>
            </StyledContainerMenuItem>
          ))}
        </Menu>
      </StyledToolbar>
    </StyledNavbarContainer>
  );
};

export default NavigationHeader;
