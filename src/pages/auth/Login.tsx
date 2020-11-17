import React, { useState } from 'react';
import axios from 'axios';
import FacebookLoginWithButton from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

import { smallBox } from '../../common/utils/functions';
import UiValidate from '../../common/forms/validation/UiValidate';
import LayoutAuth from '../../components/LayoutAuth';
import Spinner from '../../components/Spinner';

import { signIn, singInFG } from '../../services/userService';
import Alert from '../../components/Alert';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

  const onEmail = (e) => setEmail(e.target.value);
  const onPassword = (e) => setPassword(e.target.value);

  const validate = () =>
    emailPattern.test(email) && email !== '' && password !== '';

  const loginSuccess = (token) => {
    Alert('Login con exito', 'Bievenido a Conectika.Tech', 'success');
    const { jwt_token } = token;
    localStorage.setItem('token', jwt_token);
    setTimeout(() => history.push('/'), 300);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true);
        const resp = await signIn({ email, password });
        loginSuccess(resp);
      } catch (error) {
        console.log(error);
        Alert(
          'Email y/o contraseña no son validas',
          'Verifica los datos introducidos',
          'error',
        );
      }
      setLoading(false);
    } else {
      Alert('Ups!', 'Verifica los datos introducidos', 'error');
    }
  };

  const responseSocial = async (type, response) => {
    try {
      setLoading(true);
      const emailSocial =
        type === 'google' ? response.profileObj.email : response.email;
      const resp = await singInFG({
        email: emailSocial,
        accessToken: response.accessToken,
      });
      loginSuccess(resp);
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          Alert(
            'El usuario no se encuentra registrado',
            'se redirigirá al registro',
            'error',
          );
          setTimeout(
            () =>
              history.push({
                pathname: '/register',
                state: { ...response, type },
              }),
            700,
          );
        } else {
          Alert(
            'Email y/o contraseña no son validas',
            'Verifica los datos introducidos',
            'error',
          );
        }
      }
    }
    setLoading(false);
  };

  const responseFacebook = (response) => responseSocial('facebook', response);

  const responseGoogle = (response) => responseSocial('google', response);

  const componentClicked = () => {
    console.log('Clicked!');
  };

  return (
    <LayoutAuth>
      <div className="row">
        <div className="col col-xs-12 col-sm-12 col-md-8 col-lg-6 col-md-offset-2 col-lg-offset-3">
          <div className="well no-padding">
            <Spinner show={loading} />
            <UiValidate>
              <form
                id="login-form"
                className="smart-form client-form"
                onSubmit={onLogin}
              >
                <header>Inicia sesión</header>
                <fieldset>
                  <section>
                    <label className="label">Correo electrónico</label>
                    <label className="input">
                      {' '}
                      <i className="icon-append fa fa-user" />
                      <input
                        type="email"
                        name="email"
                        data-smart-validate-input=""
                        data-required=""
                        data-email=""
                        data-message-required="Ingresa tu email"
                        data-message-email="Ingresa un email valido"
                        onChange={onEmail}
                      />
                      <b className="tooltip tooltip-top-right">
                        <i className="fa fa-user txt-color-teal" />
                        Ingresa un email
                      </b>
                    </label>
                  </section>
                  <section>
                    <label className="label">Contraseña</label>
                    <label className="input">
                      {' '}
                      <i className="icon-append fa fa-lock" />
                      <input
                        type="password"
                        name="password"
                        data-smart-validate-input=""
                        data-required=""
                        data-minlength="3"
                        data-maxnlength="20"
                        data-message="Ingresa tu contraseña"
                        onChange={onPassword}
                      />
                      <b className="tooltip tooltip-top-right">
                        <i className="fa fa-lock txt-color-teal" /> Ingresa tu
                        contraseña
                      </b>{' '}
                    </label>
                  </section>
                </fieldset>
                <div className="row p-3 social">
                  <div className="col col-sm-6 col-xs-6">
                    <FacebookLoginWithButton
                      appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
                      size="medium"
                      textButton="Facebook"
                      fields="name,email,picture"
                      onClick={componentClicked}
                      callback={responseFacebook}
                      icon="fa-facebook"
                      scope="public_profile"
                    />
                  </div>
                  <div className="col col-sm-6 col-xs-6">
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      buttonText="Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                    />
                  </div>
                </div>
                <footer>
                  <div className="row p-3">
                    <div className="col col-sm-6 col-xs-12">
                      <div className="note">
                        <Link to="/register">¿Aún no tienes cuenta?</Link>
                      </div>
                    </div>
                    <div className="col col-sm-6 col-xs-12">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </footer>
              </form>
            </UiValidate>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
};

export default Login;
