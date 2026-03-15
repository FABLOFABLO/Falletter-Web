import styled from 'styled-components'
import ImgAppStore from '../assets/Footer/AppStore.svg'
import ImgGooglePlay from '../assets/Footer/GooglePlay.svg'
import ImgGithub from '../assets/Footer/Github.svg'
import ImgNotion from '../assets/Footer/Notion.svg'

const Root = styled.footer`
  width: 100%;
  background: #0b0b0d;
  border-top: 1px solid #A7A7A7;
  margin-top: 80px;
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 80px 36px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 0 24px;
  align-items: start;
`

const LogoText = styled.span`
  font-family: 'Staatliches', 'Apple SD Gothic Neo', sans-serif;
  font-weight: 400;
  font-size: 36px;
  color: #ff7a9d;
  display: block;
  margin-bottom: 12px;
  letter-spacing: 1px;
`

const Slogan = styled.p`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 13px;
  color: #ffffff;
  line-height: 1.7;
`

const ColTitle = styled.h4`
  margin: 0 0 16px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #ff7a9d;
`

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const LinkItem = styled.li`
  a {
    font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    font-weight: 300;
    font-size: 13px;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #ff7a9d;
    }
  }
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
`

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #A7A7A7;
  margin-bottom: 16px;
`

const Copyright = styled.p`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #A16272;
`

export function Footer() {
  return (
    <Root>
      <Inner>
        {/* 로고 + 슬로건 */}
        <div>
          <LogoText>FABLO</LogoText>
          <Slogan>
            객관적 정보와 창의력으로<br />
            혁신을 만드는 동아리
          </Slogan>
        </div>

        {/* 빠른 링크 */}
        <div>
          <ColTitle>빠른 링크</ColTitle>
          <LinkList>
            <LinkItem><a href="#">FABLO팀 소개</a></LinkItem>
            <LinkItem><a href="#">프로젝트 소개</a></LinkItem>
            <LinkItem><a href="#">동아리 부원 소개</a></LinkItem>
            <LinkItem><a href="#">FAQ</a></LinkItem>
          </LinkList>
        </div>

        {/* 커뮤니티 - 소셜 아이콘 */}
        <div>
          <ColTitle>커뮤니티</ColTitle>
          <SocialRow>
            <SocialBtn href="#" aria-label="Github">
              <img src={ImgGithub} alt="Github" />
            </SocialBtn>
            <SocialBtn href="#" aria-label="Notion">
              <img src={ImgNotion} alt="Notion" />
            </SocialBtn>
          </SocialRow>
        </div>

        {/* 스토어 */}
        <StoreCol>
          <StoreBtn href="#" aria-label="App Store">
            <img src={ImgAppStore} alt="Download on the App Store" />
          </StoreBtn>
          <StoreBtn href="#" aria-label="Google Play">
            <img src={ImgGooglePlay} alt="Get it on Google Play" />
          </StoreBtn>
        </StoreCol>
      </Inner>

      <Bottom>
        <Divider />
        <Copyright>
          @2026 FABLO Innovation club. All right reserved
        </Copyright>
      </Bottom>
    </Root>
  )
}