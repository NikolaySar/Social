import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader';
import Footer from './components/Footer';
import PostModal from './components/PostModal';
import Feed from './pages/Feed';
import Registration from './pages/Registration';
import Authorization from './pages/Authorization';
import ForgotPassword from './pages/ForgotPassword';
import OpenEmail from './pages/OpenEmail';
import UsersListing from './pages/UsersListing';
import UserProfile from './pages/UserProfile';
import MainLayout from './layouts';
import ResetPassword from './pages/ResetPassword';
import CompanyEdit from './pages/CompanyEdit';
import PostViewPage from './pages/PostViewPage';
import { ContentWrapper, PageWrapper } from './GlobalStyle';
import WithAuthCheck from './components/HOC/WithAuthCheck';
import WithAuthPublic from './components/HOC/WithAuthPublic';
import CompanyProfile from './pages/CompanyProfile';

const Layout: React.FC = () => {
  const [isModalOpenAuth, setModalOpenAuth] = useState(false);
  const [isModalOpenRegister, setModalOpenRegister] = useState(false);
  const [isModalOpenForgotPassword, setIsModalOpenForgotPassword] = useState(false);
  const [isModalOpenEmail, setIsModalOpenEmail] = useState(false);
  const [isModalResetPass, setIsModalResetPass] = useState(false);
  const [isModalOpenPost, setIsModalOpenPost] = useState(false);

  const handleModalRegister = () => {
    setModalOpenRegister(!isModalOpenRegister);
  };

  const handleModalAuth = () => {
    setModalOpenAuth(!isModalOpenAuth);
  };

  const handleModalForgot = () => {
    setModalOpenAuth(false);
    setIsModalOpenForgotPassword(!isModalOpenForgotPassword);
  };

  const handleModalEmail = () => {
    setIsModalOpenEmail(!isModalOpenEmail);
  };

  const handleBackForgotPas = () => {
    setIsModalOpenForgotPassword(!isModalOpenForgotPassword);
    setModalOpenAuth(true);
  };

  const isOpenAnotheModal = () => {
    setModalOpenRegister(!isModalOpenRegister);
    setModalOpenAuth(!isModalOpenAuth);
  };

  const handleOpenResetPass = () => {
    setIsModalResetPass(!isModalResetPass);
  };

  const handleModalPost = () => {
    setIsModalOpenPost(!isModalOpenPost);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              handleModalAuth={handleModalAuth}
              handleModalRegister={handleModalRegister}
              handleModalPost={handleModalPost}
            />
          }
        >
          <Route path="" element={<WithAuthPublic path="/" component={<Feed />} />} />
          <Route
            path="/auth/restore/"
            element={<ResetPassword handleClose={handleOpenResetPass} />}
          />
          <Route path="/users" element={<WithAuthCheck path="/" component={<UsersListing />} />} />
          <Route
            path="/profile"
            element={
              <WithAuthCheck
                path="/"
                component={<UserProfile handleModalPost={handleModalPost} />}
              />
            }
          />
          <Route
            path="/company-edit"
            element={<WithAuthCheck path="/" component={<CompanyEdit />} />}
          />
          <Route
            path="/post/:id"
            element={<WithAuthCheck path="/" component={<PostViewPage />} />}
          />
          <Route
            path="/company-profile"
            element={<WithAuthCheck path="/" component={<CompanyProfile />} />}
          />
        </Route>
      </Routes>
      {isModalOpenAuth && (
        <Authorization
          isOpen={handleModalForgot}
          handleClose={handleModalAuth}
          isOpenAnotheModal={isOpenAnotheModal}
        />
      )}
      {isModalOpenRegister && (
        <Registration handleClose={handleModalRegister} isOpenAnotheModal={isOpenAnotheModal} />
      )}
      {isModalOpenForgotPassword && (
        <ForgotPassword
          handleClose={handleModalForgot}
          handleModalEmail={handleModalEmail}
          handleBackForgotPas={handleBackForgotPas}
        />
      )}
      {isModalOpenEmail && <OpenEmail handleClose={handleModalEmail} />}
      {isModalOpenPost && <PostModal handleCloseModal={handleModalPost} />}
    </Router>
  );
};

export default Layout;
