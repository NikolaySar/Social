import { useCallback, useEffect, useMemo, useState } from 'react';
import { IconButton, Snackbar } from '@mui/material';
import { Close, Language } from '@mui/icons-material';
import { VITE_API_BASE_URL } from '@/config';
import { createPost } from '@/services/post';
import CustomModal from '@components/CustomModal';
import { IPostMedia } from '@components/PostMedia/interface';
import PostMedia from '@components/PostMedia';
import PrimaryButton from '@components/UI/PrimaryButton';
import Post from '@components/Post';
import Loading from '@components/UI/Loading';
import { ISnackbar, IUser } from '@/interfaces';
import {
  StyledLoading,
  StyledPostEditAuthor,
  StyledPostEditCloseButton,
  StyledPostEditFooter,
  StyledPostEditHeader,
  StyledPostEditText,
  StyledPostEditTextError,
} from './style';
import userAvatar from '@images/userAvatar.svg';
import emojiIcon from '@images/emojiIcon.svg';
import locationIcon from '@images/locationIcon.svg';
import hashIcon from '@images/hashIcon.svg';
import mentionIcon from '@images/mentionIcon.svg';
import { getUserService } from '@/services/user';

const PostModal = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const [user, setUser] = useState<IUser>();
  const [postDescription, setPostDescription] = useState<string>('');
  const [postFiles, setPostFiles] = useState<File[]>([]);
  const [snackbar, setSnackbar] = useState<ISnackbar>({
    open: false,
    message: '',
  });
  const [postValidationError, setPostValidationError] = useState('');
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await getUserService();
      setUser(response.data);
      setLoadingState(false);
    } catch (error) {
      setSnackbar({ open: true, message: 'Не удалось загрузить пользователя' });
      setLoadingState(false);
      setTimeout(handleCloseModal, 5000);
    }
  };

  const postMedia: IPostMedia[] = useMemo(() => {
    return postFiles.map(file => {
      return {
        filePath: URL.createObjectURL(file),
        type: file.type.slice(0, file.type.indexOf('/')),
        name: file.name,
      };
    });
  }, [postFiles]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        setSnackbar({ open: true, message: 'Не удалось загрузить файл' });
        return;
      }
      const file = e.target.files[0];
      e.target.value = '';

      setPostFiles([...postFiles, file]);
    },
    [postFiles]
  );

  const handleFileRemove = useCallback(() => {
    setPostFiles([]);
  }, []);

  const handleDescriptionChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPostDescription(e.target.value);
    },
    []
  );

  const savePost = async () => {
    if (!user) {
      setSnackbar({ open: true, message: 'Не удалось загрузить пользователя' });
      return;
    }

    if (!postDescription.trim()) {
      setPostValidationError('Описание поста не может быть пустым');
      setSnackbar({
        open: true,
        message: 'Описание поста не может быть пустым',
      });
      return;
    }
    setPostValidationError('');

    const formData = new FormData();

    postFiles.forEach(file => {
      const fileType = file.type.slice(0, file.type.indexOf('/')) + 's';

      if (fileType === 'applications') {
        formData.append('documents', file);
        return;
      }
      formData.append(fileType, file);
    });
    formData.append('description', postDescription);

    try {
      setLoadingState(true);
      await createPost(formData);
      setLoadingState(false);
      handleCloseModal();
      setSnackbar({ open: true, message: 'Пост успешно создан!' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Не удалось создать пост' });
      setLoadingState(false);
    }
  };

  if (!user || loadingState) {
    return (
      <CustomModal>
        <StyledLoading>
          {snackbar.message ? (
            <h3>Не удалось загрузить пользователя</h3>
          ) : (
            <Loading />
          )}
          {snackbar.open && (
            <Snackbar
              open={snackbar.open}
              autoHideDuration={6000}
              onClose={() => setSnackbar({ open: false, message: '' })}
              message={snackbar.message}
            />
          )}
        </StyledLoading>
      </CustomModal>
    );
  }

  return (
    <>
      <CustomModal>
        <Post>
          <StyledPostEditHeader>
            <h5>Новый пост</h5>
          </StyledPostEditHeader>
          <StyledPostEditAuthor>
            <img
              src={VITE_API_BASE_URL + user.userInfo?.avatarUrl}
              onError={e => (e.currentTarget.src = userAvatar)}
              alt="user profile icon"
            />
            <p>{user.firstName + ' ' + user.lastName}</p>
            <IconButton>
              <Language />
            </IconButton>
          </StyledPostEditAuthor>
          <PostMedia
            files={postMedia}
            isEditable={true}
            handleFileChange={handleFileChange}
            handleFileRemove={handleFileRemove}
          />
          <StyledPostEditText
            $border={postValidationError ? '1px solid red' : 'none'}
            placeholder="Что нового"
            minRows={3}
            maxLength={300}
            onChange={handleDescriptionChange}
          ></StyledPostEditText>
          <StyledPostEditTextError>
            {postValidationError}
          </StyledPostEditTextError>
          <StyledPostEditFooter>
            <IconButton>
              <img src={emojiIcon} alt="emoji" />
            </IconButton>
            <IconButton>
              <img src={locationIcon} alt="location" />
            </IconButton>
            <IconButton>
              <img src={hashIcon} alt="hashtag" />
            </IconButton>
            <IconButton>
              <img src={mentionIcon} alt="mention" />
            </IconButton>
            <p>{postDescription.length}</p>
            <PrimaryButton handleClick={savePost}>ОК</PrimaryButton>
          </StyledPostEditFooter>
          <StyledPostEditCloseButton onClick={handleCloseModal}>
            <Close />
          </StyledPostEditCloseButton>
        </Post>
      </CustomModal>
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

export default PostModal;
