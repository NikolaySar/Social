import { memo, useMemo } from 'react';
import { IconButton } from '@mui/material';
import {
  CameraAltOutlined,
  Close,
  InsertDriveFileOutlined,
  VideocamOutlined,
} from '@mui/icons-material';
import { fileAcceptedTypes } from '@/constants';
import { IPostMediaProps } from './interface';
import {
  StyledPostMedia,
  StyledPostMediaButtons,
  StyledPostMediaCloseButton,
  StyledPostMediaPreviewCarousel,
  StyledPostMediaUpload,
  StyledSwiper,
} from './style';
import uploadIcon from '@images/uploadIcon.svg';

const PostMedia = ({
  files,
  isEditable,
  handleFileChange,
  handleFileRemove,
}: IPostMediaProps) => {
  const generatedCarouselData = useMemo(() => {
    return (
      <StyledSwiper
        $isSwiperOn={files.length > 1}
        type="file"
        data={files}
        scrollArea={100}
      />
    );
  }, [files]);

  return (
    <StyledPostMedia
      htmlFor="fileUpload"
      $isDisplayed={!files.length && !isEditable ? 'none' : 'flex'}
    >
      {files.length ? (
        <StyledPostMediaPreviewCarousel>
          {generatedCarouselData}
        </StyledPostMediaPreviewCarousel>
      ) : (
        <StyledPostMediaUpload $isDisplayed={isEditable ? 'flex' : 'none'}>
          <input
            id="fileUpload"
            type="file"
            accept={fileAcceptedTypes.all}
            onChange={handleFileChange}
            hidden
          />
          <img src={uploadIcon} alt="uploadFilesIcon" />
          <p>ДОБАВИТЬ ФАЙЛ</p>
          <p>Вес файла менее 24 MB</p>
        </StyledPostMediaUpload>
      )}
      <StyledPostMediaButtons $isDisplayed={isEditable ? 'flex' : 'none'}>
        <IconButton>
          <label htmlFor="imageUpload">
            <CameraAltOutlined />
          </label>
        </IconButton>
        <IconButton>
          <label htmlFor="videoUpload">
            <VideocamOutlined />
          </label>
        </IconButton>
        <IconButton>
          <label htmlFor="applicationUpload">
            <InsertDriveFileOutlined />
          </label>
        </IconButton>
      </StyledPostMediaButtons>
      {isEditable && (
        <>
          <input
            id="imageUpload"
            type="file"
            accept={fileAcceptedTypes.image}
            onChange={handleFileChange}
            hidden
          />
          <input
            id="videoUpload"
            type="file"
            accept={fileAcceptedTypes.video}
            onChange={handleFileChange}
            hidden
          />
          <input
            id="applicationUpload"
            type="file"
            accept={fileAcceptedTypes.application}
            onChange={handleFileChange}
            hidden
          />
        </>
      )}
      <StyledPostMediaCloseButton
        onClick={handleFileRemove}
        $isDisplayed={isEditable ? 'flex' : 'none'}
      >
        <Close />
      </StyledPostMediaCloseButton>
    </StyledPostMedia>
  );
};

export default memo(PostMedia);
