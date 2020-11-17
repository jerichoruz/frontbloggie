import React, { ChangeEvent } from 'react';
import { IUserProfile } from '../../interfaces/UserProfile';

interface Prop {
  user: IUserProfile;
  isNew?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Account = ({ user, isNew, onChange }: Prop) => (
  <div className="col col-sm-12">
    <section>
      <label className="label">Correo electrónico</label>
      <label className="input">
        {' '}
        <input
          onChange={onChange}
          type="email"
          name="email"
          data-smart-validate-input=""
          data-required=""
          data-email=""
          data-message-required="Ingresa tu email"
          data-message-email="Ingresa un email valido"
          value={user.email || ''}
          autoComplete="on"
        />
        <b className="tooltip tooltip-top-right">
          <i className="fa fa-user txt-color-teal" />
          Ingresa un email
        </b>
      </label>
    </section>
    {isNew && (
      <section>
        <label className="label">Contraseña</label>
        <label className="input">
          {' '}
          <input
            onChange={onChange}
            type="password"
            name="password"
            data-smart-validate-input=""
            data-required=""
            data-minlength="3"
            data-maxnlength="20"
            data-message="Ingresa tu contraseña"
          />
          <b className="tooltip tooltip-top-right">
            <i className="fa fa-lock txt-color-teal" /> Ingresa tu contraseña
          </b>{' '}
        </label>
      </section>
    )}
  </div>
);

export default Account;
