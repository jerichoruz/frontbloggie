import React, { ChangeEvent } from 'react';
import { IUserProfile } from '../../interfaces/UserProfile';

interface Prop {
  user: IUserProfile;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  changeMoral: () => void;
}

const Personal = ({ user, onChange, changeMoral }: Prop) => (
  <>
    <br />

    <div className="col col-sm-12">
      <section>
        <label className="label">
          {user.moral ? 'Razón social' : 'Nombre'}
        </label>
        <label className="input">
          {' '}
          <input
            onChange={onChange}
            type="text"
            name="name"
            data-smart-validate-input=""
            data-required=""
            data-message-required="Ingresa tu nombre"
            value={user.name || ''}
            autoComplete="on"
          />
          <b className="tooltip tooltip-top-right">
            <i className="fa fa-user txt-color-teal" />
            Ingresa tu nombre
          </b>
        </label>
      </section>
      {!user.moral && (
        <>
          <section>
            <label className="label">Primer apellido</label>
            <label className="input">
              {' '}
              <input
                onChange={onChange}
                type="text"
                name="apaterno"
                data-smart-validate-input=""
                data-required=""
                data-message-required="Ingresa tu primer apellido"
                value={user.apaterno || ''}
                autoComplete="on"
              />
              <b className="tooltip tooltip-top-right">
                <i className="fa fa-user txt-color-teal" />
                Ingresa tu primer apellido
              </b>
            </label>
          </section>
          <section>
            <label className="label">Segundo apellido</label>
            <label className="input">
              {' '}
              <input
                onChange={onChange}
                type="text"
                name="amaterno"
                data-smart-validate-input=""
                data-message-required="Ingresa tu segundo apellido"
                value={user.amaterno || ''}
                autoComplete="on"
              />
              <b className="tooltip tooltip-top-right">
                <i className="fa fa-user txt-color-teal" />
                Ingresa tu segundo apellido
              </b>
            </label>
          </section>
        </>
      )}
      <section>
        <label className="label">RFC</label>
        <label className="input">
          {' '}
          <input
            onChange={onChange}
            type="text"
            name="rfc"
            data-smart-validate-input=""
            data-required=""
            data-message-required="Ingresa tu RFC"
            value={user.rfc || ''}
          />
          <b className="tooltip tooltip-top-right">
            <i className="fa fa-user txt-color-teal" />
            Ingresa tu RFC
          </b>
        </label>
      </section>
      <section>
        <label className="label">Teléfono</label>
        <label className="input">
          {' '}
          <input
            onChange={onChange}
            type="text"
            name="phone"
            data-smart-validate-input=""
            data-message-required="Ingresa tu Teléfono"
            value={user.phone || ''}
            autoComplete="on"
          />
          <b className="tooltip tooltip-top-right">
            <i className="fa fa-user txt-color-teal" />
            Ingresa tu Teléfono
          </b>
        </label>
      </section>
      <section>
        <label className="checkbox">
          <input
            onChange={changeMoral}
            type="checkbox"
            name="moral"
            defaultChecked={user.moral}
          />
          <i />
          Persona moral
        </label>
      </section>
      {user.moral && (
        <section>
          <label className="checkbox">
            <input
              type="checkbox"
              name="admin"
              defaultChecked={user.admin}
              disabled
            />
            <i />
            Administrador
          </label>
        </section>
      )}
    </div>
  </>
);

export default Personal;
