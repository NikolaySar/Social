import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

export const StyledMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & .leaflet-touch .leaflet-control-attribution {
    display: none;
  }

  & .leaflet-left {
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    left: auto;
    margin-right: 10px;
  }
`;

export const StyledMapTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: left;
`;

export const StyledMapContainer = styled(MapContainer)`
  height: 280px;
  width: 100%;
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 7px;
  align-self: end;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: left;
`;
