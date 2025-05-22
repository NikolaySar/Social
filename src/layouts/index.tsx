import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { ContentWrapper, PageWrapper } from '../GlobalStyle';
import NavigationHeader from '../components/NavigationHeader';

export interface IMainLayoutProps {
  handleModalAuth: () => void;
  handleModalRegister: () => void;
  handleModalPost: () => void
}

const MainLayout = ({
  handleModalAuth,
  handleModalRegister,
  handleModalPost,
}: IMainLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <PageWrapper>
      {pathname !== '/auth/restore/' && (
        <NavigationHeader
          handleModalAuth={handleModalAuth}
          handleModalRegister={handleModalRegister}
          handleModalPost={handleModalPost}
        />
      )}
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      {pathname !== '/auth/restore/' && <Footer />}
    </PageWrapper>
  );
};

export default MainLayout;
