import { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { actionSections } from '../../constants/profile';
import Edit from '@images/edit.svg?react';
import {
  StyledProfileInfoContainer,
  StyledTitleInfoContainer,
  StyledTitleContainer,
  StyledTitle,
  StyledButtonEdit,
  StyledUserInfo,
  StyledText,
  StyledFooterProfileContainer,
  StyledActionContainer,
  StyledImageContainer,
  StyledImage,
  StyledDescription,
  StyledButton,
  StyledContainer,
  StyledUserData,
  StyledWrapperData,
} from './style';

import EditModalAboutMe from '../EditModalAboutMe';

interface Section {
  title: string;
  text: string;
}

export interface IProfileInfo {
  aboutMe?: string;
  interests?: string;
  infoSections: Section[];
}

const ProfileInfo = ({ aboutMe, interests, infoSections }: IProfileInfo) => {
  const [isOpenModalAboutMe, setIsOpenModalAboutMe] = useState(false);
  const [inputValue, setInputValue] = useState(aboutMe);
  const [characterCount, setCharacterCount] = useState(500);
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  const handleRedirectFeed = () => {
    navigate('/');
  };

  const handleEditClick = (section: Section) => {
    if (section.title === 'Обо мне' || section.title === 'Описание компании') {
      setIsOpenModalAboutMe(true);
      setSelectedSection(section);
      if (aboutMe) {
        setInputValue(aboutMe);
        setCharacterCount(500 - aboutMe.length);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setCharacterCount(500 - newValue.length);
  };

  const handleModalClose = () => {
    setIsOpenModalAboutMe(false);
  };

  return (
    <>
      <StyledProfileInfoContainer>
        <StyledTitleInfoContainer>
          {infoSections.map((section, index) => (
            <Fragment key={index}>
              <StyledTitleContainer>
                <StyledTitle>{section.title}</StyledTitle>
                <StyledButtonEdit onClick={() => handleEditClick(section)}>
                  <Edit />
                </StyledButtonEdit>
              </StyledTitleContainer>
              {section.title === 'Обо мне' || section.title === 'Описание компании' ? (
                aboutMe ? (
                  <StyledWrapperData>
                    <StyledUserData dangerouslySetInnerHTML={{ __html: aboutMe }} />
                  </StyledWrapperData>
                ) : (
                  <StyledUserInfo>
                    <StyledText>{section.text}</StyledText>
                  </StyledUserInfo>
                )
              ) : section.title === 'Интересы' ? (
                <StyledUserData>{interests}</StyledUserData>
              ) : (
                <StyledUserInfo>
                  <StyledText>{section.text}</StyledText>
                </StyledUserInfo>
              )}
            </Fragment>
          ))}
        </StyledTitleInfoContainer>
      </StyledProfileInfoContainer>
      <StyledFooterProfileContainer>
        <StyledContainer>
          {actionSections.map((action, index) => (
            <StyledActionContainer key={index}>
              <StyledImageContainer>
                <StyledImage src={action.image} alt="icon" />
              </StyledImageContainer>
              <StyledDescription>{action.description}</StyledDescription>
              <StyledButton type="button" onClick={handleRedirectFeed}>
                {action.buttonText}
              </StyledButton>
            </StyledActionContainer>
          ))}
        </StyledContainer>
      </StyledFooterProfileContainer>
      {isOpenModalAboutMe && (
        <EditModalAboutMe
          isCloseModal={handleModalClose}
          title={selectedSection?.title}
          value={inputValue}
          onChange={handleInputChange}
          characterCount={characterCount}
          onCloseTitle="Отмена"
          titleButton="Сохранить"
        />
      )}
    </>
  );
};

export default ProfileInfo;
