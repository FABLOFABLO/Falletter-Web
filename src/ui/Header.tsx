import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
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
  overflow: visible;
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
  z-index: 1002;
  position: relative;
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
  z-index: 1002;
  position: relative;

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
    &:nth-child(1) { transform: rotate(45deg) translate(7px, 7px); }
    &:nth-child(2) { opacity: 0; }
    &:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
  `}
`

// PC용 Nav (헤더 안에 위치)
const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 62px;

  ${media.mobile} {
    display: none;
  }
`

// 모바일용 드로어 (Portal로 body에 마운트)
const MobileDrawer = styled.nav<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: ${(p) => (p.$open ? '0' : '-280px')};
  width: 280px;
  height: 100vh;
  background: #0f0f11;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px 32px 32px;
  gap: 4px;
  transition: right 0.3s ease;
  z-index: 9999;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: #ffffff;
    border-radius: 2px;
  }

  &::before { transform: rotate(45deg); }
  &::after  { transform: rotate(-45deg); }
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
`

const MobileNavLink = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 18px 12px;
  width: 100%;
  border-radius: 8px;
  text-decoration: none;
  color: ${(p) => (p.$active ? '#ff7a9d' : '#ffffff')};
  background: ${(p) => (p.$active ? 'rgba(255, 122, 157, 0.1)' : 'transparent')};
  transition: color 0.15s, background 0.15s;

  span {
    color: ${(p) => (p.$active ? '#ff7a9d' : '#ffffff')};
  }

  &:hover,
  &:active {
    color: #ff7a9d;
    background: rgba(255, 122, 157, 0.1);
    span { color: #ff7a9d; }
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

  ${media.mobile} {
    font-size: 18px;
  }
`

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998;
  display: ${(p) => (p.$open ? 'block' : 'none')};
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

          {/* PC 전용 */}
          <DesktopNav aria-label="메인 메뉴">
            {NAV_LINKS.map(({ to, label, prefix }) => (
              <StyledNavLink key={to} to={to} $active={pathname === to}>
                {prefix && <Word>{prefix}</Word>}
                {label}
              </StyledNavLink>
            ))}
          </DesktopNav>
        </Inner>
      </Root>

      {/* 모바일 드로어 - Portal로 body에 직접 마운트 */}
      {createPortal(
        <>
          <Overlay $open={menuOpen} onClick={closeMenu} />
          <MobileDrawer $open={menuOpen} aria-label="메인 메뉴">
            <CloseButton onClick={closeMenu} aria-label="메뉴 닫기" />
            {NAV_LINKS.map(({ to, label, prefix }) => (
              <MobileNavLink key={to} to={to} $active={pathname === to} onClick={closeMenu}>
                {prefix && <Word>{prefix}</Word>}
                {label}
              </MobileNavLink>
            ))}
          </MobileDrawer>
        </>,
        document.body
      )}
    </>
  )
}