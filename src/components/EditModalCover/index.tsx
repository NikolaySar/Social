import React, { useState, useRef, useEffect } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import { useDropzone } from 'react-dropzone';
import { dataURLtoFile } from '@/helpers/dataURLtoFile';
import { EditCoverModalProps } from './interface';
import upload from '@images/upload-cloud.svg';
import 'cropperjs/dist/cropper.css';
import {
  StyledButtonContainer,
  StyledButtonSubmit,
  StyledCancelButton,
  StyledContent,
  StyledCropperContainer,
  StyledFieldContainer,
  StyledInput,
  StyledInputImage,
  StyledInputText,
  StyledModal,
  StyledOtherButton,
  StyledOverlay,
  StyledSubtitle,
  StyledTitle,
} from './style';

const EditCoverModal: React.FC<EditCoverModalProps> = ({
  isCloseModal,
  title,
  modalCloseTitle,
  titleButton,
  handleActionButton,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<{ image: null | string; name: string }>({
    image: null,
    name: '',
  });

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
      const coverUrl = dataURLtoFile(croppedImage.image, croppedImage.name);
      handleActionButton({ coverUrl });
    }
    isCloseModal();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        isCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCloseModal]);

  return (
    <StyledOverlay>
      <StyledModal onClick={e => e.stopPropagation()}>
        <StyledFieldContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>jpg, jpeg, png весом не более 3 МБ</StyledSubtitle>
          <StyledContent>
            {image ? (
              <StyledCropperContainer>
                <Cropper
                  ref={cropperRef}
                  src={image}
                  style={{ height: 400, width: '100%' }}
                  guides={false}
                  viewMode={1}
                  crop={onCrop}
                  dragMode="move"
                />
              </StyledCropperContainer>
            ) : (
              <StyledInput {...getRootProps()}>
                <input {...getInputProps()} />
                <StyledInputImage src={upload} alt="upload" />
                <StyledInputText>Перетащите изображение</StyledInputText>
              </StyledInput>
            )}
          </StyledContent>
          <StyledButtonContainer>
            <StyledCancelButton type="button" onClick={isCloseModal}>
              {modalCloseTitle}
            </StyledCancelButton>
            <StyledOtherButton type="button" onClick={() => setImage(null)}>
              выбрать другое фото
            </StyledOtherButton>
            <StyledButtonSubmit type="submit" onClick={handleSave}>
              {titleButton}
            </StyledButtonSubmit>
          </StyledButtonContainer>
        </StyledFieldContainer>
      </StyledModal>
    </StyledOverlay>
  );
};

export default EditCoverModal;
