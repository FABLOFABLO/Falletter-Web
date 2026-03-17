import styled from 'styled-components'

import PhoneLeft  from '../assets/slide/iPhone 16.svg'
import PhoneRight from '../assets/slide/iPhone 15 Pro.svg'
import { media } from '../styles/GlobalStyle'

const Root = styled.section`
  width: 100%;
  height: 240px;
  background: #0b0b0d;
  overflow: hidden;
  position: relative;
`

const GradCenter = styled.div`
  position: absolute;
  width: 340px;
  height: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 700px;
  background: #B84D69;
  filter: blur(60px);
  opacity: 0.5;
  pointer-events: none;
`

const GradRight = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  top: -30px;
  right: -180px;
  border-radius: 50%;
  background: #58C1F4;
  filter: blur(90px);
  opacity: 0.2;
  pointer-events: none;
`

const PhoneImg = styled.img<{ $side: 'left' | 'right' }>`
  position: absolute;
  bottom: ${(p) => (p.$side === 'left' ? '20px' : '0px')};
  left: ${(p) => (p.$side === 'left' ? '60px' : 'auto')};
  right: ${(p) => (p.$side === 'right' ? '20px' : 'auto')};
  width: ${(p) => (p.$side === 'left' ? '500px' : '430px')};
  height: auto;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;

  ${media.mobile} {
    opacity: 0.3;
    width: ${(p) => (p.$side === 'left' ? '300px' : '260px')};
    left: ${(p) => (p.$side === 'left' ? '-50px' : 'auto')};
    right: ${(p) => (p.$side === 'right' ? '-30px' : 'auto')};
  }
`

const TextWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${media.mobile} {
    padding: 0 24px;
  }
`

const Heading = styled.h1`
  margin: 0;
  font-family: 'Elice DX Neolli', 'Noto Sans KR', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.4;
  color: #ffffff;
  text-align: center;

  ${media.mobile} {
    font-size: 20px;
  }
`

const Highlight = styled.span`
  font-weight: 700;
  color: #ff6ea8;
`

const Sub = styled.p`
  margin: 0;
  font-family: Pretendard, 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;

  ${media.mobile} {
    font-size: 13px;
  }
`

export function SecondSlide() {
  return (
    <Root>
      <GradCenter />
      <GradRight />

      <PhoneImg $side="left"  src={PhoneLeft}  alt="" />
      <PhoneImg $side="right" src={PhoneRight} alt="" />

      <TextWrap>
        <Heading>
          다음 프로젝트의 주인공은 <Highlight>여러분입니다.</Highlight>
        </Heading>
        <Sub>지금 바로 합류하세요!</Sub>
      </TextWrap>
    </Root>
  )
}
