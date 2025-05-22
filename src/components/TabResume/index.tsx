import React from 'react';
import { IResumeProps } from './interface';
import { resumeSections } from '../../constants/resumeSections';
import {
  StyledResumeContainer,
  StyledEditButton,
  StyledSection,
  StyledSectionTitle,
  StyledEmptyField,
} from './style';

const TabResume: React.FC<IResumeProps> = ({ data = {} }) => {
  return (
    <StyledResumeContainer>
      <StyledEditButton type="button">Редактировать резюме</StyledEditButton>
      {resumeSections.map(section => (
        <StyledSection key={section}>
          <StyledSectionTitle>{section}</StyledSectionTitle>
          {data[section]?.items && data[section]?.items?.length > 0 ? (
            data[section].items.map((item, index) => (
              <div key={index}>
                <h3>{item.role || item.company || item.institution}</h3>
                <p>{item.duration}</p>
                <p>{item.location}</p>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <StyledEmptyField>Поделитесь информацией о себе</StyledEmptyField>
          )}
        </StyledSection>
      ))}
    </StyledResumeContainer>
  );
};

export default TabResume;
