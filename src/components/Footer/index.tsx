import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { footerSocialMediaLinks } from '../../constants';
import language from '@images/russia-footer.svg';
import {
  StyledFooterContainer,
  StyledFooterInner,
  StyledFooterSocialNets,
  StyledLink,
  StyledLanguageContainer,
  StyledLanguage,
  StyledText,
  StyledInfo,
} from './style';

const Footer: React.FC = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterInner>
        <StyledLanguageContainer>
          <StyledLanguage src={language} alt="langeuage" />
          <StyledText>Русский</StyledText>
          <ArrowDropDownIcon />
        </StyledLanguageContainer>
        <StyledInfo href="#">О компании</StyledInfo>
      </StyledFooterInner>
      <StyledFooterSocialNets>
        {footerSocialMediaLinks.map(link => (
          <StyledLink key={link.link} to={link.link}>
            <img src={link.src} alt={link.alt} />
          </StyledLink>
        ))}
      </StyledFooterSocialNets>
    </StyledFooterContainer>
  );
};

export default Footer;
