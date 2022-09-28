import React, { memo, useContext, useEffect } from 'react';
import { StarportContext } from './Starport';

// 代理组件，用于修改全局的metaData
// 并且将proxyEl这个ref绑定到div上，以便于获取FloatContainer真实位置
const Proxy = memo((props: any) => {
  const { setMetadata, setProxyEl, setLanded } = useContext(StarportContext);

  const ref = React.useRef<HTMLDivElement>(null);

  const update = () => {
    const { width, height } = ref.current?.getBoundingClientRect() as any;
    const style = {
      height,
      width,
    };
    setMetadata((pre: any) => ({
      ...pre,
      ...props,
      style,
    }));
  };

  useEffect(() => {
    // 每次props发生变化时，重新起飞
    setLanded(false);
    update();
    setProxyEl(ref);
    return () => setProxyEl(null);
  }, [props]);

  // 将metadata传递给这个div，占据原本内容应该占据的面积
  return <div ref={ref} {...props} />;
});

export default Proxy;
