import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ImgAppStore from '../assets/footer/app-store.svg'
import ImgGooglePlay from '../assets/footer/google-play.svg'
import ImgGithub from '../assets/footer/github.svg'
import ImgNotion from '../assets/footer/notion.svg'
import { media } from '../styles/GlobalStyle'

const NAV_LINKS = [
  { label: 'FABLO팀 소개', to: '/about' },
  { label: '프로젝트 소개', to: '/introduce' },
  { label: '동아리 부원 소개', to: '/members' },
  { label: 'FAQ', to: '/faq' },
]

const SOCIAL_LINKS = [
  { href: 'https://github.com/FABLOFABLO', img: ImgGithub, label: 'Github' },
  { href: 'https://judicious-dungeon-dd4.notion.site/FABLO-72930ed570904cbb87a498b54c3ca756?source=copy_link', img: ImgNotion, label: 'Notion' },
]

const STORE_LINKS = [
  { href: '#', img: ImgAppStore, label: 'App Store' },
  { href: '#', img: ImgGooglePlay, label: 'Google Play' },
]

const Root = styled.footer`
  width: 100%;
  background: #0b0b0d;
  border-top: 1px solid #A7A7A7;
  margin-top: 80px;

  ${media.mobile} {
    margin-top: 50px;
  }
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 80px 36px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 0 24px;
  align-items: start;

  ${media.mobile} {
    grid-template-columns: 1fr;
    padding: 32px 24px 24px;
    gap: 32px;
  }
`

const LogoText = styled.span`
  font-family: 'Staatliches', 'Apple SD Gothic Neo', sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: #ff7a9d;
  display: block;
  margin-bottom: 12px;
  letter-spacing: 1px;

  ${media.mobile} {
    font-size: 28px;
  }
`

const Slogan = styled.p`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: #ffffff;
  line-height: 1.7;

  ${media.mobile} {
    font-size: 12px;
  }
`

const ColTitle = styled.h4`
  margin: 0 0 16px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #ff7a9d;

  ${media.mobile} {
    font-size: 15px;
    margin: 0 0 12px;
  }
`

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const NavLink = styled(Link)`
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover { color: #ff7a9d; }
`

const SocialRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`

const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`

const StoreCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`

const StoreBtn = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;

  img {
    height: 38px;
    width: auto;
    object-fit: contain;
    display: block;
  }
`

const Bottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px 24px;

  ${media.mobile} {
    padding: 0 24px 20px;
  }
`

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #A7A7A7;
  margin-bottom: 16px;

  ${media.mobile} {
    margin-bottom: 12px;
  }
`

const Copyright = styled.p`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #A16272;

  ${media.mobile} {
    font-size: 11px;
  }
`

export function Footer() {
  return (
    <Root>
      <Inner>
        <div>
          <LogoText>FABLO</LogoText>
          <Slogan>
            객관적 정보와 창의력으로<br />
            혁신을 만드는 동아리
          </Slogan>
        </div>

        <div>
          <ColTitle>빠른 링크</ColTitle>
          <LinkList>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </LinkList>
        </div>

        <div>
          <ColTitle>커뮤니티</ColTitle>
          <SocialRow>
            {SOCIAL_LINKS.map(({ href, img, label }) => (
              <SocialBtn key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <img src={img} alt={label} />
              </SocialBtn>
            ))}
          </SocialRow>
        </div>

        <StoreCol>
          {STORE_LINKS.map(({ href, img, label }) => (
            <StoreBtn key={label} href={href} aria-label={label}>
              <img src={img} alt={label} />
            </StoreBtn>
          ))}
        </StoreCol>
      </Inner>

      <Bottom>
        <Divider />
        <Copyright>@2026 FABLO Innovation club. All right reserved</Copyright>
      </Bottom>
    </Root>
  )
}