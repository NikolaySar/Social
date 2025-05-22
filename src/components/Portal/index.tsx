import ReactDOM from 'react-dom';
import { IPortalProps } from './interface';

const Portal = ({ children, container = document.body }: IPortalProps) =>
  ReactDOM.createPortal(children, container);

export default Portal;
