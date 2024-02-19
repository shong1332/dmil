import { PropsWithChildren } from 'react'
import HeaderContainer from './header/Header.container'
import FooterContainer from './footer/Footer.container'

export default function LayoutIndex(props: PropsWithChildren) {
  return (
    <>
      <HeaderContainer />
      {props.children}
      <FooterContainer />
    </>
  )
}
