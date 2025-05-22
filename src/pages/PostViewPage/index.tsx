import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { IconButton, Snackbar } from '@mui/material';
import { ArrowBack, KeyboardArrowDown } from '@mui/icons-material';
import { VITE_API_BASE_URL } from '@/config';
import { getPost } from '@/services/post';
import { ISnackbar } from '@/interfaces';
import { IPost } from './interface';
import Loading from '@/components/UI/Loading';
import Post from '@/components/Post';
import PostMedia from '@/components/PostMedia';
import { formatDate } from '@/helpers/formatDate';
import {
  StyledPostView,
  StyledPostViewAuthor,
  StyledPostViewError,
  StyledPostViewText,
} from './style';
import userAvatar from '@images/userAvatar.svg';

const PostViewPage = () => {
  const [postData, setPostData] = useState<IPost | null>(null);
  const [error, setError] = useState('');
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    open: false,
    message: '',
  });

  const { id } = useParams();
  if (!id) {
    setError('Не удалось загрузить пост');
    setSnackbar({ open: true, message: 'Не удалось загрузить пост' });
    return;
  }

  const getPostData = async () => {
    try {
      const response = await getPost(id);
      setPostData(response.data);
    } catch (error) {
      setError('Не удалось загрузить пост');
      setSnackbar({ open: true, message: 'Не удалось загрузить пост' });
    }
  };

  const postMedia = useMemo(() => {
    if (!postData) {
      return [];
    }
    const postFiles = [
      ...postData.images,
      ...postData.videos,
      ...postData.documents,
    ];

    return postFiles.map(file => {
      return {
        filePath: VITE_API_BASE_URL + file,
        type: file.slice(0, file.indexOf('/') - 1),
        name: file.slice(0, file.indexOf('/') - 1),
      };
    });
  }, [postData]);

  useEffect(() => {
    getPostData();
  }, []);

  if (!postData) {
    return (
      <StyledPostViewError>
        {error ? <h3>{error}</h3> : <Loading />}
        {snackbar.open && (
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={() => setSnackbar({ open: false, message: '' })}
            message={snackbar.message}
          />
        )}
      </StyledPostViewError>
    );
  }

  return (
    <StyledPostView>
      <Post>
        <StyledPostViewAuthor $isMedia={postMedia.length}>
          <IconButton>
            <ArrowBack fontSize="small" />
          </IconButton>
          <img
            src={VITE_API_BASE_URL + postData.author.userInfo?.avatarUrl}
            onError={e => (e.currentTarget.src = userAvatar)}
            alt="user profile icon"
          />
          <div>
            <p>{postData.author.firstName + ' ' + postData.author.lastName}</p>
            <small>{formatDate(postData.createdAt)}</small>
          </div>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </StyledPostViewAuthor>
        <PostMedia files={postMedia} isEditable={false} />
        <StyledPostViewText $isMedia={postMedia.length}>
          {postData.description}
        </StyledPostViewText>
      </Post>
    </StyledPostView>
  );
};

export default PostViewPage;
