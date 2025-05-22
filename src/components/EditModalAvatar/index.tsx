import { useState, useRef } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useDropzone } from 'react-dropzone';
import { dataURLtoFile } from '@/helpers/dataURLtoFile';
import { IEditModalProps } from './interface';
import upload from '@images/upload-cloud.svg';
import {
  StyledButtonSubmit,
  StyledCancelButton,
  StyledModal,
  StyledOverlay,
  StyledTitle,
  StyledSubtitle,
  StyledFieldContainer,
  StyledButtonContainer,
  StyledOtherButton,
  StyledContent,
  StyledInput,
  StyledInputText,
  StyledInputImage,
  StyledCropperContainer,
  StyledSlider,
  StyledSliderContainer,
  StyledWrapperButton,
} from './style';

const EditAvatarModal = ({
  isCloseModal,
  handleActionButton,
  title,
  titleButton,
  modalCloseTitle,
}: IEditModalProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<{
    image: null | string;
    name: string;
  }>({ image: null, name: '' });
  const [zoom, setZoom] = useState(1);
  const cropperRef = useRef<ReactCropperElement>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      image: ['image/jpeg', 'image/png', 'image/jpg'],
    },
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result as string);
          setCroppedImage({ ...croppedImage, name: file.name });
        };
        reader.readAsDataURL(file);
      }
    },
  });

  const onCrop = () => {
    if (!cropperRef.current) return;

    const cropper = cropperRef.current.cropper;
    setCroppedImage({
      ...croppedImage,
      image: cropper.getCroppedCanvas().toDataURL(),
    });
  };

  const handleSave = () => {
    if (croppedImage && croppedImage.image) {
      const avatarUrl = dataURLtoFile(croppedImage.image, croppedImage.name);
      handleActionButton({ avatarUrl });
    }
    isCloseModal();
  };

  return (
    <StyledOverlay onClick={isCloseModal}>
      <StyledModal onClick={e => e.stopPropagation()}>
        <StyledFieldContainer>
          <StyledTitle>{title} </StyledTitle>
          <StyledSubtitle>jpg, jpeg, png весом не более 3 МБ</StyledSubtitle>
          <StyledContent>
            {image ? (
              <StyledCropperContainer>
                <Cropper
                  ref={cropperRef}
                  src={image}
                  style={{ height: 400, width: '100%' }}
                  aspectRatio={1}
                  guides={false}
                  zoomTo={zoom}
                  crop={onCrop}
                  viewMode={1}
                  dragMode="move"
                />
                <StyledSliderContainer>
                  <label>Zoom</label>
                  <StyledSlider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.05}
                    onChange={(_e, value) => setZoom(value as number)}
                  />
                </StyledSliderContainer>
              </StyledCropperContainer>
            ) : (
              <StyledInput {...getRootProps()}>
                <input {...getInputProps()} />
                <StyledInputImage src={upload} alt="upload"></StyledInputImage>
                <StyledInputText>Перетащите изображение</StyledInputText>
              </StyledInput>
            )}
          </StyledContent>
          <StyledButtonContainer>
            <StyledCancelButton type="button" onClick={isCloseModal}>
              {modalCloseTitle}
            </StyledCancelButton>
            <StyledWrapperButton>
              <StyledOtherButton type="button" onClick={() => setImage(null)}>
                выбрать другое фото
              </StyledOtherButton>
              <StyledButtonSubmit type="button" onClick={handleSave}>
                {titleButton}
              </StyledButtonSubmit>
            </StyledWrapperButton>
          </StyledButtonContainer>
        </StyledFieldContainer>
      </StyledModal>
    </StyledOverlay>
  );
};

export default EditAvatarModal;
