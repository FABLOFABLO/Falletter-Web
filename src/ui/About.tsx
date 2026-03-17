import styled from 'styled-components'

import ImgGithub from '../assets/about/github.svg'
import ImgNotion from '../assets/about/notion.svg'
import { media } from '../styles/GlobalStyle'

const CARDS = [
  {
    icon: ImgGithub,
    title: 'Github Repository',
    desc: '오픈 소스 프로젝트와\n팀원들의 코드를 공유합니다.',
    label: 'FABLO · GitHub',
    href: 'https://github.com/FABLOFABLO',
    whiteBg: true,
  },
  {
    icon: ImgNotion,
    title: 'Notion Space',
    desc: '워크플로우, 프로젝트 가이드라인 및\n히스토리를 아카이브합니다.',
    label: 'FABLO',
    href: 'https://judicious-dungeon-dd4.notion.site/FABLO-72930ed570904cbb87a498b54c3ca756?source=copy_link',
    whiteBg: false,
  },
]

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
  padding: 140px 0 160px;

  ${media.mobile} {
    padding: 80px 0 100px;
  }
`

const Title = styled.h2`
  margin: 0 0 120px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 34px;
  color: #ffffff;
  text-align: center;

  span { color: #ff7a9d; }

  ${media.mobile} {
    font-size: 26px;
    margin: 0 0 60px;
    padding: 0 24px;
  }
`

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  max-width: 950px;
  margin: 0 auto;

  ${media.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding: 0 24px;
  }
`

const Card = styled.div`
  width: 380px;
  background: #0e0e10;
  border: 1px solid #FF7A9D;
  border-radius: 18px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    width: 100%;
    max-width: 380px;
    padding: 28px 24px;
  }
`

const IconWrap = styled.div<{ $whiteBg: boolean }>`
  margin-bottom: 18px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${(p) => (p.$whiteBg ? '#ffffff' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 52px;
    height: 52px;
  }
`

const CardTitle = styled.h3`
  margin: 18px 0 14px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;

  ${media.mobile} {
    font-size: 17px;
    margin: 14px 0 12px;
  }
`

const CardDesc = styled.p`
  margin: 0 0 28px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #b7b7b7;
  line-height: 1.6;
  white-space: pre-line;

  ${media.mobile} {
    font-size: 13px;
    margin: 0 0 24px;
  }
`

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 38px;
  border-radius: 8px;
  background: #FE5784;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 13px;
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;

  ${media.mobile} {
    width: 140px;
    height: 36px;
    font-size: 12px;
  }
`

export function About() {
  return (
    <Root>
      <Title>Connect with <span>FABLO</span></Title>
      <CardRow>
        {CARDS.map(({ icon, title, desc, label, href, whiteBg }) => (
          <Card key={title}>
            <IconWrap $whiteBg={whiteBg}>
              <img src={icon} alt={title} />
            </IconWrap>
            <CardTitle>{title}</CardTitle>
            <CardDesc>{desc}</CardDesc>
            <LinkBtn href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </LinkBtn>
          </Card>
        ))}
      </CardRow>
    </Root>
  )
}