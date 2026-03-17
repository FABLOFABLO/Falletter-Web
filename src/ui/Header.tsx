import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logoUrl from '../assets/logo.svg'
import { media } from '../styles/GlobalStyle'

const NAV_LINKS = [
  { to: '/about',     label: '팀 소개',      prefix: 'FABLO' },
  { to: '/introduce', label: '프로젝트 소개', prefix: null },
  { to: '/members',   label: '동아리 부원 소개', prefix: null },
  { to: '/faq',       label: 'FAQ',          prefix: null },
]

const Root = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 64px;
  background: rgba(10, 10, 12, 0.78);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 48px;

  ${media.mobile} {
    padding: 0 20px;
  }
`

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  z-index: 101;
`

const LogoImg = styled.img`
  display: block;
  width: 99px;
  height: 34px;

  ${media.mobile} {
    width: 80px;
    height: 27px;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 101;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`

const MenuLine = styled.span<{ $open: boolean }>`
  width: 24px;
  height: 2px;
  background: #fff;
  transition: all 0.3s;
  border-radius: 2px;

  ${(p) => p.$open && `
    &:nth-child(1) {
      transform: rotate(45deg) translate(7px, 7px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  `}
`

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 62px;

  ${media.mobile} {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: rgba(15, 15, 17, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 80px 24px 24px;
    gap: 24px;
    transform: translateX(${(p) => (p.$open ? '0' : '100%')});
    transition: transform 0.3s ease;
    z-index: 100;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`

const StyledNavLink = styled(Link)<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1;
  color: ${(p) => (p.$active ? '#ff7a9d' : 'rgba(255,255,255,0.9)')};
  white-space: nowrap;
  transition: color 0.15s;
  text-decoration: none;

  span {
    color: ${(p) => (p.$active ? '#ff7a9d' : 'rgba(255,255,255,0.92)')};
  }

  &:hover,
  &:hover span {
    color: #ff7a9d;
  }

  ${media.mobile} {
    font-size: 16px;
    padding: 8px 0;
    width: 100%;
  }
`

const Word = styled.span`
  display: inline-block;
  font-family: Staatliches, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  transform: translateY(1px);
  text-shadow: 0.5px 0 0 currentColor, -0.5px 0 0 currentColor;
  transition: color 0.15s;
`

const Overlay = styled.div<{ $open: boolean }>`
  display: none;

  ${media.mobile} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${(p) => (p.$open ? '1' : '0')};
    pointer-events: ${(p) => (p.$open ? 'auto' : 'none')};
    transition: opacity 0.3s;
    z-index: 99;
  }
`

export function TopNav() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <Root>
        <Inner>
          <Brand to="/" aria-label="홈으로" onClick={closeMenu}>
            <LogoImg src={logoUrl} alt="FABLO" />
          </Brand>

          <MenuButton onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
            <MenuLine $open={menuOpen} />
            <MenuLine $open={menuOpen} />
            <MenuLine $open={menuOpen} />
          </MenuButton>

          <Nav $open={menuOpen} aria-label="메인 메뉴">
            {NAV_LINKS.map(({ to, label, prefix }) => (
              <StyledNavLink key={to} to={to} $active={pathname === to} onClick={closeMenu}>
                {prefix && <Word>{prefix}</Word>}
                {label}
              </StyledNavLink>
            ))}
          </Nav>
        </Inner>
      </Root>
      <Overlay $open={menuOpen} onClick={closeMenu} />
    </>
  )
}