import styled from 'styled-components';

export const StyledPostView = styled.section`
  @media (min-width: 1200px) {
    padding: 24px 0;
  }
`;

export const StyledPostViewAuthor = styled.div<{ $isMedia: number }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-items: flex-end;
  padding: 10px 0px;

  div {
    display: flex;
    flex-flow: row wrap;
    flex: 1;
    padding-left: 10px;

    p {
      width: 100%;
    }
  }

  img {
    width: 40px;
    border-radius: 50%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    align-self: flex-end;
    width: ${props => (props.$isMedia ? '50%' : '100%')};
    order: 2;
  }
`;

export const StyledPostViewText = styled.p<{ $isMedia: number }>`
  font-weight: 300;
  font-size: 16px;
  padding: 15px;

  @media (min-width: 1200px) {
    align-self: flex-end;
    width: ${props => (props.$isMedia ? '50%' : '100%')};
    order: 3;
  }
`;

export const StyledPostViewError = styled.div`
  text-align: center;
`;
