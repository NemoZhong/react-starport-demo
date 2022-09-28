import React, { memo } from 'react';
import { AliveScope } from '../KeepAlive/AliveScope';
export const StarportContext = React.createContext<{
  metadata?: any;
  setMetadata?: any;
  proxyEl?: any;
  setProxyEl?: any;
  landed?: any;
  setLanded?: any;
}>({});
const Starport = memo((props: { children: any }) => {
  const { children } = props;

  const [metadata, setMetadata] = React.useState<any>({});
  const [proxyEl, setProxyEl] = React.useState<any>(null);
  const [landed, setLanded] = React.useState<boolean>(true);

  return (
    <StarportContext.Provider
      value={{
        metadata,
        setMetadata,
        proxyEl,
        setProxyEl,
        setLanded,
        landed,
      }}
    >
      <AliveScope>{children}</AliveScope>
    </StarportContext.Provider>
  );
});

export default Starport;
