import { useState } from 'react'
import styled from 'styled-components'

import ChevronUpImg   from '../assets/faq/chevron-up.svg'
import ChevronDownImg from '../assets/faq/chevron-down.svg'

const FAQ_ITEMS = [
  { q: 'FABLO 지원은 어디서 하나요?',  a: '지원 공고를 배포 할 예정입니다!' },
  { q: 'FABLO는 몇 명인가요?',         a: '현재 재학생 7명입니다.' },
  { q: '어떤 분야를 뽑나요?',          a: 'Backend, Flutter, Design, Frontend 지원받습니다.' },
]

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
  min-height: 100vh;
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

const Title = styled.h1`
  margin: 0 0 16px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #ffffff;
`

const SubTitle = styled.p`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #b7b7b7;
`

const List = styled.div`
  width: 760px;
  max-width: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`

const ChevronIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
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
              <p>{item.a}</p>
            </Answer>
          </Item>
        ))}
      </List>
    </Root>
  )
}
