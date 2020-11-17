import { useState } from 'react';
import { IUserProfile } from '../interfaces/UserProfile';

const useUserProfile = (initialUser?: IUserProfile) => {
  const initValue = {
    name: '',
    apaterno: '',
    amaterno: '',
    email: '',
    password: '',
    rfc: '',
    phone: '',
    street: '',
    suburb: '',
    ext_no: '',
    int_no: '',
    cp: '',
    city: '',
    state: '',
    moral: false,
    admin: false,
    avatar: '',
  };
  const [user, setUser] = useState<IUserProfile>({
    ...initValue,
    ...initialUser,
  });

  const validate = () =>
    user.name !== '' &&
    (user.apaterno !== '' || user.moral) &&
    user.email !== '' &&
    user.password !== '' &&
    user.street !== '' &&
    user.suburb !== '' &&
    user.ext_no !== '' &&
    user.cp !== '' &&
    user.city !== '' &&
    user.state !== '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((currentUser) => ({ ...currentUser, [name]: value }));
  };

  const changeAvatar = (base64) =>
    setUser((currentUser) => ({ ...currentUser, avatar: base64 }));

  const formatData = () => {
    const {
      admin,
      amaterno,
      apaterno,
      avatar,
      city,
      cp,
      email,
      ext_no,
      int_no,
      moral,
      name,
      phone,
      rfc,
      state,
      street,
      suburb,
      password,
    } = { ...user };
    return {
      admin,
      amaterno,
      apaterno,
      avatar,
      city,
      cp,
      email,
      ext_no,
      int_no,
      moral,
      name,
      phone,
      rfc,
      state,
      street,
      suburb,
      password,
    };
  };

  return [
    user,
    setUser,
    { validate, handleChange, changeAvatar, formatData },
  ] as const;
};

export default useUserProfile;
