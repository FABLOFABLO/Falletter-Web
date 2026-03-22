import { useState } from 'react'
import styled from 'styled-components'

import ChevronUpImg   from '../assets/faq/chevron-up.svg'
import ChevronDownImg from '../assets/faq/chevron-down.svg'
import { media } from '../styles/GlobalStyle'

const FAQ_ITEMS = [
  {
    q: 'FABLO에서 원하는 인재상은 무엇인가요?',
    a: '실력이 완벽하지 않아도 괜찮습니다. 대신, 같이 성장하며 배우려는 의지와 팀원들과 적극적으로 소통하려는 자세를 가장 중요하게 생각합니다.',
    isLink: false,
  },
  {
    q: '동아리의 분위기는 어떤가요?',
    a: '선후배 간 거리감 없이 편하게 지내며, 모르는 부분이 있으면 부담 없이 질문하고 서로 도와주는 문화가 잘 형성되어 있습니다.',
    isLink: false,
  },
  {
    q: 'FABLO는 몇 명인가요?',
    a: '현재 재학생 6명입니다.',
    isLink: false,
  },
  {
    q: '어떤 분야를 뽑나요?',
    a: 'Backend, Flutter, Frontend 지원받습니다.',
    isLink: false,
  },
]

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
  min-height: 100vh;
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.mobile} {
    padding: 80px 0 100px;
  }
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;

  ${media.mobile} {
    margin-bottom: 50px;
    padding: 0 24px;
  }
`

const Title = styled.h1`
  margin: 0 0 16px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #ffffff;

  ${media.mobile} {
    font-size: 28px;
  }
`

const SubTitle = styled.p`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #b7b7b7;

  ${media.mobile} {
    font-size: 14px;
  }
`

const List = styled.div`
  width: 760px;
  max-width: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.mobile} {
    max-width: calc(100% - 48px);
    gap: 12px;
  }
`

const Item = styled.div<{ $open: boolean }>`
  background: #0e0e10;
  border: 1px solid ${(p) => (p.$open ? '#FF7A9D' : 'rgba(255,122,157,0.35)')};
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s;
`

const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;

  ${media.mobile} {
    padding: 20px 20px;
    font-size: 15px;
    gap: 12px;
  }
`

const ChevronIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  ${media.mobile} {
    width: 18px;
    height: 18px;
  }
`

const Answer = styled.div<{ $open: boolean }>`
  max-height: ${(p) => (p.$open ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;

  p {
    margin: 0;
    padding: 0 28px 24px;
    font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #ff7a9d;
    line-height: 1.7;
  }

  ${media.mobile} {
    p {
      padding: 0 20px 20px;
      font-size: 13px;
    }
  }
`

const AnswerLink = styled.a`
  display: inline-block;
  margin: 0;
  padding: 0 28px 24px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #ff7a9d;
  line-height: 1.7;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    opacity: 0.75;
  }

  ${media.mobile} {
    padding: 0 20px 20px;
    font-size: 13px;
  }
`

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <Root>
      <Header>
        <Title>FAQ</Title>
        <SubTitle>FABLO에 대해 자주 묻는 질문들을 모았습니다.</SubTitle>
      </Header>

      <List>
        {FAQ_ITEMS.map((item, i) => (
          <Item key={item.q} $open={openIndex === i}>
            <Question onClick={() => toggle(i)}>
              {item.q}
              <ChevronIcon src={openIndex === i ? ChevronUpImg : ChevronDownImg} alt="" />
            </Question>
            <Answer $open={openIndex === i}>
              {item.isLink ? (
                <AnswerLink href={item.a} target="_blank" rel="noopener noreferrer">
                  {item.a}
                </AnswerLink>
              ) : (
                <p>{item.a}</p>
              )}
            </Answer>
          </Item>
        ))}
      </List>
    </Root>
  )
}