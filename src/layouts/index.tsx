import { PropsWithChildren } from 'react';
import HeaderContainer from './header/Header.container';
import FooterContainer from './footer/Footer.container';

export default function LayoutIndex(props: PropsWithChildren) {
  return (
    <>
      <HeaderContainer />
      <div className="mt-16 bg-green-500">{props.children}</div>

      <FooterContainer />
    </>
  );
}
