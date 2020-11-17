import React, { useEffect, useState } from 'react';

import { BigBreadcrumbs, WidgetGrid } from '../../common';
import { IUserProfile } from '../../interfaces/UserProfile';
import { getMe, updateMe } from '../../services/userService';
import useUserProfile from '../../hooks/useUserProfile';
import UserProfile from '../../components/UserProfile';
import Spinner from '../../components/Spinner';
import Alert from '../../components/Alert';

const Profile = () => {
  const [user, setUser] = useUserProfile();
  const [loading, setLoading] = useState(false);

  const me = async () => {
    try {
      setLoading(true);
      const resp = await getMe();
      setUser((currentUser) => ({
        ...currentUser,
        ...resp,
      }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    me();
  }, []);

  const update = async (data: IUserProfile) => {
    try {
      setLoading(true);
      const resp = await updateMe(data);
      Alert('Guardado con exito', '', 'success');
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div id="content">
      <div className="row">
        <BigBreadcrumbs
          items={['Profile']}
          icon="fa fa-user"
          className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
        />
      </div>
      <WidgetGrid>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-6 col-lg-offset-3 col-md-offset-2">
                <div className="well no-padding smart-form client-form">
                  <Spinner show={loading} />
                  <header>Editar</header>
                  <UserProfile handleSubmit={update} prev={user} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WidgetGrid>
    </div>
  );
};

export default Profile;
