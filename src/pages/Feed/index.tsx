import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Radio, Snackbar } from '@mui/material';
import Card from '../../components/Card';
import { cardsData } from '../../constants/cardData';
import Swipper from '../../components/UI/Swipper';
import { dishes, tags, products } from '../../constants/feedData';
import { IRootReduxState, ISnackbar, ITabFeed } from '../../interfaces';
import {
  StyledFeedContainer,
  StyledContainerSwipper,
  StyledText,
  StyledContainer,
  StyledProductContainer,
  StyledButton,
} from './style';
import useAction from '@/hooks/useAction';

const Feed = () => {
  const posts = useSelector((state: ITabFeed) => state.post.post);

  const [snackbar, setSnackbar] = useState<ISnackbar>({
    open: false,
    message: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const errorRedux = useSelector((state: IRootReduxState) => state.user.error);

  const { getPosts } = useAction();

  useEffect(() => {
    getPosts();
  }, [posts.length]);

  useEffect(() => {
    if (errorRedux && errorRedux.length > 0) {
      setSnackbar({
        ...snackbar,
        open: true,
        message: 'Извините, произошла ошибка. Проверьте данные, которые вы вводили.',
      });
    }
  }, [errorRedux]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (indexOfLastPost < posts.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };
  return (
    <>
      <Swipper type="tag" data={tags} />
      <StyledFeedContainer>
        {currentPosts.map(postItem => {
          const firstFile = postItem.images[0] || postItem.videos[0] || postItem.documents[0];
          const cardWidth = 1;
          const cardHeight = 1;
          return (
            <Card
              key={postItem._id}
              imagePath={firstFile}
              description={postItem.description}
              width={cardWidth}
              height={cardHeight}
            />
          );
        })}
      </StyledFeedContainer>
      <StyledContainer>
        <StyledContainerSwipper>
          <StyledText>Вкусный мир</StyledText>
          <Swipper type="dishes" data={dishes} />
        </StyledContainerSwipper>
      </StyledContainer>
      <StyledFeedContainer>
        {posts &&
          Array.isArray(posts) &&
          posts.map(postItem => {
            const firstFile = postItem.images[0] || postItem.videos[0] || postItem.documents[0];
            return (
              <Card key={postItem._id} imagePath={firstFile} description={postItem.description} />
            );
          })}
      </StyledFeedContainer>
      <StyledContainer>
        <StyledContainerSwipper>
          <StyledProductContainer>
            <StyledText>AHUB Market</StyledText>
            <StyledButton>Посмотреть все</StyledButton>
          </StyledProductContainer>
          <Swipper type="product" data={products} />
        </StyledContainerSwipper>
      </StyledContainer>
      <StyledFeedContainer>
        {posts &&
          Array.isArray(posts) &&
          posts.map(postItem => {
            const firstFile = postItem.images[0] || postItem.videos[0] || postItem.documents[0];
            return (
              <Card key={postItem._id} imagePath={firstFile} description={postItem.description} />
            );
          })}
      </StyledFeedContainer>
      {snackbar.open && (
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ open: false, message: '' })}
          message={snackbar.message}
        />
      )}
    </>
  );
};

export default Feed;
