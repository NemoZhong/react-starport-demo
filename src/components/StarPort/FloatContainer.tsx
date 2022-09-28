import React, {
  memo,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import KeepAlive from '../KeepAlive/KeepAlive';
import { StarportContext } from './Starport';

// 用于持有浮动的组件（用插槽显示）
// 将全局的metadata(样式）传递给slot外面的div
const FloatContainer = memo(({ children }: any) => {
  const location = useLocation();

  const { metadata, proxyEl, landed, setLanded } = useContext(StarportContext);
  // 起飞落地的状态
  const divRef = useRef<HTMLElement>(null);

  // 路由变化，容器位置样式需要重新更新一下，否则会闪一下
  const update = () => {
    setLanded(false);
    if (divRef.current) {
      const style = divRef.current.style;
      const rect = proxyEl?.current?.getBoundingClientRect?.();
      if (rect) {
        const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        const scrollLeft =
          document.body.scrollLeft || document.documentElement.scrollLeft;
        style.top = rect?.top + scrollTop + 'px';
        style.left = rect?.left + scrollLeft + 'px';
        style.opacity = '1';
        style.transform = 'none';
      }
    }
  };

  useLayoutEffect(() => {
    update();
  }, [location.pathname, metadata]);

  const setLandedFn = () => setLanded(true);

  useEffect(() => {
    divRef.current?.addEventListener('transitionend', setLandedFn);
    return () =>
      divRef.current?.removeEventListener('transitionend', setLandedFn);
  }, [divRef.current]);

  return (
    <div
      {...metadata}
      ref={divRef}
      style={{
        transition: 'all 0.9s',
        position: 'absolute',
        ...metadata?.style,
      }}
    >
      {
        metadata && landed && proxyEl?.current
          ? createPortal(
              // <KeepAlive id="port">{children}</KeepAlive>,
              children,
              proxyEl?.current,
            )
          : children
        // <KeepAlive id="port">{children}</KeepAlive>
      }
    </div>
  );
});

export default FloatContainer;
