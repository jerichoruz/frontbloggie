import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import UiValidate from '../../common/forms/validation/UiValidate';
import Wizard from '../../common/forms/wizards/Wizard';
import { WidgetGrid, smallBox } from '../../common';
import Avatar from '../Avatar';
import Spinner from '../Spinner';
import { IUserProfile } from '../../interfaces/UserProfile';
import useUserProfile from '../../hooks/useUserProfile';
import Personal from './Personal';
import Account from './Account';
import Address from './Address';

interface Prop {
  prev?: IUserProfile;
  isNew?: boolean;
  handleSubmit: (user: IUserProfile) => Promise<void>;
}

const UserProfile = ({ prev, handleSubmit, isNew }: Prop) => {
  const [loading, setLoading] = useState(false);
  const [
    user,
    setUser,
    { handleChange, validate, changeAvatar, formatData },
  ] = useUserProfile(prev);

  const changeMoral = () => {
    setUser((currentUser) => ({
      ...currentUser,
      moral: !user.moral,
      admin: !user.moral,
    }));
  };

  useEffect(() => {
    console.log({ prev });
    setUser((currentUser) => ({
      ...currentUser,
      ...prev,
    }));
  }, [prev]);

  const alert = (title, content, type) => {
    const icon = type === 'error' ? 'fa-warning' : 'fa-check';
    const color = type === 'error' ? '#d32f2f' : '#0277bd';
    smallBox({
      title,
      content,
      color,
      icon: `fa ${icon}`,
      timeout: 8000,
    });
  };

  const format = () => {
    const userData = formatData();
    Object.keys(userData).map(
      (key) => userData[key] === null && delete userData[key],
    );
    return userData;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const userData = format();
      console.log('validate', userData);
      await handleSubmit(userData);
    } else {
      alert('Ups!', 'Verifica los datos introducidos', 'error');
    }
    setLoading(false);
  };

  return (
    <>
      <Spinner show={loading} />
      <UiValidate>
        <form id="login-form" onSubmit={onSubmit}>
          <WidgetGrid>
            <div className="widget-body">
              <div className="row">
                <Wizard className="col col-sm-12">
                  <div className="form-bootstrapWizard clearfix">
                    <ul className="bootstrapWizard">
                      <li data-smart-wizard-tab="1">
                        <span>
                          <span className="step">1</span>
                          <span className="title">Información personal</span>
                        </span>
                      </li>
                      <li data-smart-wizard-tab="2">
                        <span>
                          <span className="step">2</span>
                          <span className="title">
                            Información de la cuenta
                          </span>
                        </span>
                      </li>
                      <li data-smart-wizard-tab="3">
                        <span>
                          <span className="step">3</span>
                          <span className="title">Imagen de perfil</span>
                        </span>
                      </li>
                      <li data-smart-wizard-tab="4">
                        <span>
                          <span className="step">4</span>
                          <span className="title">Dirección</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col col-md-12">
                    <div className="tab-content">
                      <div className="tab-pane" data-smart-wizard-pane="1">
                        <h3>
                          <strong>Paso 1 </strong> - Información personal
                        </h3>

                        <Personal
                          user={user}
                          onChange={handleChange}
                          changeMoral={changeMoral}
                        />
                      </div>
                      <div className="tab-pane" data-smart-wizard-pane="2">
                        <br />

                        <h3>
                          <strong>Paso 2</strong> - Información de la cuenta
                        </h3>

                        <Account
                          user={user}
                          onChange={handleChange}
                          isNew={isNew}
                        />
                      </div>
                      <div className="tab-pane" data-smart-wizard-pane="3">
                        <br />

                        <h3>
                          <strong>Paso 3</strong> - Imagen de perfil
                        </h3>

                        <div className="col col-sm-12">
                          <Avatar
                            changeAvatar={changeAvatar}
                            src={user.avatar}
                          />
                        </div>
                      </div>
                      <div className="tab-pane" data-smart-wizard-pane="4">
                        <br />

                        <h3>
                          <strong>Paso 4 </strong> - Dirección
                        </h3>
                        <Address address={user} onChange={handleChange} />
                      </div>
                      <div className="row">
                        <div className="col col-sm-12">
                          <ul className="pager wizard no-margin">
                            <li className="previous" data-smart-wizard-prev="">
                              <button className="btn btn-lg btn-default pull-left">
                                Anterior
                              </button>
                            </li>
                            <li
                              className="next"
                              data-smart-wizard-next=""
                              data-last="Finish"
                            >
                              <button className="btn btn-lg btn-primary pull-right">
                                Siguiente
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Wizard>
              </div>
            </div>
          </WidgetGrid>
          <footer>
            <div className="row p-3">
              <div className="col col-sm-6 col-xs-12">
                <div className="note">
                  {isNew && <Link to="login">¿Ya tienes cuenta?</Link>}
                </div>
              </div>
              <div className="col col-sm-6 col-xs-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!validate()}
                >
                  {isNew ? 'Registrase' : 'Guardar'}
                </button>
              </div>
            </div>
          </footer>
        </form>
      </UiValidate>
    </>
  );
};

export default UserProfile;
