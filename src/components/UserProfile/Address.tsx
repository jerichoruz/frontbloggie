import React, { ChangeEvent } from 'react';
import { IAddress } from '../../interfaces/Address';

interface Prop {
  address: IAddress;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Address = ({ address, onChange }: Prop) => (
  <>
    <div className="col col-sm-12">
      <div className="row address">
        <section className="col col-6">
          <label className="label">Calle</label>
          <label className="input">
            {' '}
            <input
              onChange={onChange}
              type="text"
              name="street"
              data-smart-validate-input=""
              data-required=""
              data-message-required="Ingresa tu calle"
              value={address.street || ''}
              autoComplete="on"
            />
            <b className="tooltip tooltip-top-right">
              <i className="fa fa-user txt-color-teal" />
              Ingresa tu calle
            </b>
          </label>
        </section>
        <section className="col col-6">
          <label className="label">Colonia</label>
          <label className="input">
            {' '}
            <input
              onChange={onChange}
              type="text"
              name="suburb"
              data-smart-validate-input=""
              data-required=""
              data-message-required="Ingresa tu colonia"
              value={address.suburb || ''}
              autoComplete="on"
            />
            <b className="tooltip tooltip-top-right">
              <i className="fa fa-user txt-color-teal" />
              Ingresa tu colonia
            </b>
          </label>
        </section>
      </div>
      <div className="row address">
        <section className="col col-4">
          <label className="label">Número Exterior</label>
          <label className="input">
            {' '}
            <input
              onChange={onChange}
              type="text"
              name="ext_no"
              data-smart-validate-input=""
              data-required=""
              data-message-required="Ingresa tu Número Exterior"
              value={address.ext_no || ''}
              autoComplete="on"
            />
            <b className="tooltip tooltip-top-right">
              <i className="fa fa-user txt-color-teal" />
              Ingresa tu Número Exterior
            </b>
          </label>
        </section>
        <section className="col col-4">
          <label className="label">Número Interior</label>
          <label className="input">
            {' '}
            <input
              onChange={onChange}
              type="text"
              name="int_no"
              data-smart-validate-input=""
              data-message-required="Ingresa tu Número Interior"
              value={address.int_no || ''}
              autoComplete="on"
            />
            <b className="tooltip tooltip-top-right">
              <i className="fa fa-user txt-color-teal" />
              Ingresa tu Número Interior
            </b>
          </label>
        </section>
        <section className="col col-4">
          <label className="label">Código postal</label>
          <label className="input">
            {' '}
            <input
              onChange={onChange}
              type="number"
              name="cp"
              data-smart-validate-input=""
              data-required=""
              data-message-required="Ingresa tu Código postal"
              value={address.cp || ''}
              autoComplete="on"
            />
            <b className="tooltip tooltip-top-right">
              <i className="fa fa-user txt-color-teal" />
              Ingresa tu Código postal
            </b>
          </label>
        </section>
      </div>
      <div className="row address">
        <section className="col col-6">
          <label className="label">Ciudad</label>
          <label className="input">
            {' '}
            <input
              onChange={onChange}
              type="text"
              name="city"
              data-smart-validate-input=""
              data-required=""
              data-message-required="Ingresa tu Ciudad"
              value={address.city || ''}
              autoComplete="on"
            />
            <b className="tooltip tooltip-top-right">
              <i className="fa fa-user txt-color-teal" />
              Ingresa tu Ciudad
            </b>
          </label>
        </section>
        <section className="col col-6">
          <label className="label">Estado</label>
          <label className="input">
            {' '}
            <input
              onChange={onChange}
              type="text"
              name="state"
              data-smart-validate-input=""
              data-required=""
              data-message-required="Ingresa tu Estado"
              value={address.state || ''}
              autoComplete="on"
            />
            <b className="tooltip tooltip-top-right">
              <i className="fa fa-user txt-color-teal" />
              Ingresa tu Estado
            </b>
          </label>
        </section>
      </div>
    </div>
  </>
);

export default Address;
