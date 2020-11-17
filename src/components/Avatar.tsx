import React, { ChangeEvent } from 'react';

const Avatar = ({ changeAvatar, src }) => {
  const docInput = document.getElementById('selectImage');
  const selectAvatar = () => docInput.click();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const fileSelectHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const photoInput = docInput as HTMLInputElement;
    if (photoInput.files[0]) {
      const file = photoInput.files[0];
      const base64 = await toBase64(file);
      changeAvatar(base64);
    }
  };

  return (
    <>
      <div className="profile-img">
        <label className="label">Foto de perfil</label>
        <img
          onClick={selectAvatar}
          src={src || 'assets/img/avatars/sunny-big.png'}
          alt=""
          width="120"
          height="120"
        />
      </div>
      <input
        id="selectImage"
        type="file"
        className="hidden"
        accept="image/png, image/jpeg"
        onChange={fileSelectHandler}
      />
    </>
  );
};

export default Avatar;
