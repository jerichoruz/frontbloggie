import { IAddress } from './Address';

export interface IUserProfile extends IAddress {
  name?: string;
  apaterno?: string;
  amaterno?: string;
  email?: string;
  phone?: string;
  password?: string;
  rfc?: string;
  moral?: boolean;
  admin?: boolean;
  avatar?: string;
}
