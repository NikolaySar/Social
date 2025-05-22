import { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';
import { debounce } from 'lodash';
import { TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import CustomInput from '@/components/UI/CustomInput';
import { IAddressMap } from './interface';
import plus from '@images/plus-circle.svg';
import 'leaflet/dist/leaflet.css';
import {
  StyledButton,
  StyledMapContainer,
  StyledMapTitle,
  StyledMapWrapper,
  StyledSpan,
} from './style';

const AddressMap = ({ title, fieldName }: IAddressMap) => {
  const [position, setPosition] = useState({ lat: 55.7558, lng: 37.6173 });
  const [address, setAddress] = useState('');
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const addressValue = watch(fieldName);
  const visibleAddAddress = fieldName === 'companyLocation';

  const fetchCoordinates = useCallback(
    debounce(async (value: string) => {
      if (value) {
        try {
          const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
              q: value,
              format: 'json',
            },
          });

          const results = response.data;
          if (results && results[0]) {
            const location = {
              lat: parseFloat(results[0].lat),
              lng: parseFloat(results[0].lon),
            };
            setPosition(location);
            setValue(fieldName, value);
          }
        } catch (error) {
          console.error('Ошибка при получении координат:', error);
        }
      }
    }, 1000),
    [setValue, fieldName]
  );

  const fetchAddressByCoords = async (lat: number, lng: number) => {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
        params: {
          lat,
          lon: lng,
          format: 'json',
        },
      });

      const result = response.data;
      if (result && result.display_name) {
        setAddress(result.display_name);
        setValue(fieldName, result.display_name);
      }
    } catch (error) {
      console.error('Ошибка при получении адреса:', error);
    }
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddress(value);
    fetchCoordinates(value);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition({ lat, lng });
        fetchAddressByCoords(lat, lng);
      },
    });
    return null;
  };

  const MapUpdater = ({ position }: { position: { lat: number; lng: number } }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(position);
    }, [position, map]);
    return null;
  };

  useEffect(() => {
    if (addressValue) {
      fetchCoordinates(addressValue);
    }
  }, [addressValue, fetchCoordinates]);

  return (
    <StyledMapWrapper>
      <StyledMapTitle>{title}</StyledMapTitle>
      <StyledMapContainer center={position} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={new L.Icon.Default()} />
        <MapUpdater position={position} />
        <MapClickHandler />
      </StyledMapContainer>
      <CustomInput
        name={fieldName}
        type="text"
        label="Укажите адрес"
        register={register}
        error={errors}
        onChange={handleAddressChange}
        value={address || addressValue}
      />
      {visibleAddAddress && (
        <StyledButton type="button">
          <img src={plus} alt="plus" />
          <StyledSpan>Добавить адрес</StyledSpan>
        </StyledButton>
      )}
    </StyledMapWrapper>
  );
};

export default AddressMap;
