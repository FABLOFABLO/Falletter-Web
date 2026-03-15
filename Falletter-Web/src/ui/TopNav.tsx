import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logoUrl from '../assets/Logo.svg'

const LOGO_W = 141.82 * 0.7
const LOGO_H = 48 * 0.7

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
`

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
`

const LogoImg = styled.img`
  display: block;
  width: ${LOGO_W}px;
  height: ${LOGO_H}px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 62px;
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

  &:hover {
    color: #ff7a9d;
  }

  &:hover span {
    color: #ff7a9d;
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

export function TopNav() {
  const { pathname } = useLocation()

  return (
    <Root>
      <Inner>
        <Brand to="/" aria-label="홈으로">
          <LogoImg src={logoUrl} alt="FABLO" />
        </Brand>

        <Nav aria-label="메인 메뉴">
          <StyledNavLink to="/about" $active={pathname === '/about'}>
            <Word>FABLO</Word> 팀 소개
          </StyledNavLink>
          <StyledNavLink to="/introduce" $active={pathname === '/introduce'}>
            프로젝트 소개
          </StyledNavLink>
          <StyledNavLink to="/members" $active={pathname === '/members'}>
            동아리 부원 소개
          </StyledNavLink>
          <StyledNavLink to="/faq" $active={pathname === '/faq'}>
            FAQ
          </StyledNavLink>
        </Nav>
      </Inner>
    </Root>
  )
}