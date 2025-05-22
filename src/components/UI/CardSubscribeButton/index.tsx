import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import useHover from '@/hooks/useHover';
import StrongButton from '@components/UI/StrongButton';
import { StyledCardButtonSubscribed } from './style';

const CardSubscribeButton = ({ handleClick, isSubscribed }: any) => {
  const [buttonIsHovering, buttonHoverProps] = useHover();

  return isSubscribed ? (
    <StyledCardButtonSubscribed {...buttonHoverProps}>
      {buttonIsHovering ? (
        <StrongButton handleClick={handleClick}>
          <CloseIcon />
          ОТПИСАТЬСЯ
        </StrongButton>
      ) : (
        <StrongButton>
          <CheckIcon />
          ВЫ ПОДПИСАНЫ
        </StrongButton>
      )}
    </StyledCardButtonSubscribed>
  ) : (
    <StrongButton handleClick={handleClick}>ПОДПИСАТЬСЯ</StrongButton>
  );
};

export default CardSubscribeButton;
