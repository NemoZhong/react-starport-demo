import React, { useState } from 'react';
import Img1 from '@/assets/pic1.jpg';
import Img2 from '@/assets/pic2.jpg';

export default () => {
  const [imgFlag, setImgFlag] = useState<boolean>(false);
  return (
    <img
      src={imgFlag ? Img1 : Img2}
      style={{ backgroundSize: 'cover', width: '100%' }}
      onClick={() => setImgFlag(!imgFlag)}
    />
  );
};
