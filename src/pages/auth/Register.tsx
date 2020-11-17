import React, { useEffect, useState } from 'react';
import LayoutAuth from '../../components/LayoutAuth';

import Spinner from '../../components/Spinner';
import UserProfile from '../../components/UserProfile';
import { IUserProfile } from '../../interfaces/UserProfile';
import useUserProfile from '../../hooks/useUserProfile';
import Alert from '../../components/Alert';
import { singUp } from '../../services/userService';

const Register = ({ history, location }) => {
  const socialData = (location && location.state) || {};
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useUserProfile();

  useEffect(() => {
    console.log({ socialData });
    if (socialData.type === 'google') {
      const { email, familyName, givenName } = socialData.profileObj;
      setUser((currentUser) => ({
        ...currentUser,
        email,
        apaterno: familyName,
        name: givenName,
      }));
    } else {
      const { email, name: fullName } = socialData;
      if (email && fullName) {
        const [name, apaterno] = fullName.split(' ');
        setUser((currentUser) => ({
          ...currentUser,
          email,
          name,
          apaterno,
        }));
      }
    }
  }, [socialData]);

  const register = async (value: IUserProfile) => {
    try {
      setLoading(true);
      const resp = await singUp(value);
      Alert('Login con exito', 'Creado con exito', 'success');
      const { jwt_token: token } = resp;
      localStorage.setItem('token', token);
      setTimeout(() => history.push('/'), 300);
    } catch (error) {
      if (error.response.data && error.response.data.error) {
        Alert('Ups!', error.response.data.error, 'error');
      }
    }
    setLoading(false);
  };

  return (
    <LayoutAuth>
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6 col-lg-offset-3 col-md-offset-2">
          <div className="well no-padding smart-form client-form">
            <Spinner show={loading} />
            <header>Crea tu cuenta</header>
            <UserProfile prev={user} handleSubmit={register} isNew={true} />
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
};

export default Register;
