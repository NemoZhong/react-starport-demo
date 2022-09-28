import React from 'react';
import { Link } from 'umi';

import Starport from '@/components/StarPort/Starport';
import FloatContainer from '@/components/StarPort/FloatContainer';
import styles from './index.less';
import TheImage from '@/components/TheImage';

export default ({ children }: any) => {
  return (
    <Starport>
      <div className={styles.menuWrapper}>
        <Link to="/">home</Link>
        <Link to="/port">port</Link>
      </div>
      {children}
      <FloatContainer>
        <TheImage />
      </FloatContainer>
    </Starport>
  );
};
