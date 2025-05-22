import { useSelector } from 'react-redux';
import Plus from '@images/plus.svg?react';
import Card from '../../components/Card';
import {
  StyledTabFeedContainer,
  StyledInnerContainer,
  StyledCircle,
  StyledImage,
  StyledDescription,
  StyledButton,
  StyledFeedContainer,
  StyledPostButtonContainer,
} from './style';
import Loading from '../UI/Loading';
import { ITabFeed } from '@/interfaces';
import { ITabFeedProps } from './interface';

const TabFeed = ({ posts, handleModalPost }: ITabFeedProps) => {
  const { loading, error } = useSelector((state: ITabFeed) => state.post);

  if (loading) {
    return (
      <StyledTabFeedContainer>
        <Loading />
      </StyledTabFeedContainer>
    );
  }

  if (error) {
    return (
      <StyledTabFeedContainer>
        <p>Error: {error}</p>
      </StyledTabFeedContainer>
    );
  }

  return (
    <StyledTabFeedContainer>
      {posts.length === 0 ? (
        <StyledInnerContainer>
          <StyledCircle>
            <StyledImage>
              <Plus />
            </StyledImage>
          </StyledCircle>
          <StyledDescription>Вы еще не добавили материалы в ленту</StyledDescription>
          <StyledButton type="button">
            <Plus />
            Создать пост
          </StyledButton>
        </StyledInnerContainer>
      ) : (
        <StyledFeedContainer>
          <StyledPostButtonContainer>
            <StyledButton type="button" onClick={handleModalPost}>
              <Plus />
              Создать пост
            </StyledButton>
          </StyledPostButtonContainer>
          {posts &&
            Array.isArray(posts) &&
            posts.map(postItem => {
              const firstFile = postItem.images[0] || postItem.videos[0] || postItem.documents[0];
              return (
                <Card key={postItem._id} imagePath={firstFile} description={postItem.description} />
              );
            })}
        </StyledFeedContainer>
      )}
    </StyledTabFeedContainer>
  );
};

export default TabFeed;
