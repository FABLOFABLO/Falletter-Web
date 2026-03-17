import { useState, useEffect } from 'react'
import styled from 'styled-components'

import BlockSvg from '../assets/slide/block.svg'
import { SecondSlide } from './SecondSlide'
import { ThirdSlide } from './ThirdSlide'
import { media } from '../styles/GlobalStyle'

const TOTAL_SLIDES = 3
const AUTO_PLAY_INTERVAL = 10000

const SLIDES = [null, SecondSlide, ThirdSlide]

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 240px;

  ${media.mobile} {
    height: 280px;
  }
`

const Root = styled.section`
  width: 100%;
  height: 240px;
  background: #0b0b0d;
  overflow: hidden;
  position: relative;

  ${media.mobile} {
    height: 280px;
  }
`

const GradLeft = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: 60px;
  left: 150px;
  border-radius: 700px;
  background: #B84D69;
  filter: blur(60px);
  opacity: 0.7;
  pointer-events: none;
`

const GradRight = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  top: -320px;
  right: -180px;
  border-radius: 50%;
  background: #b84d69;
  filter: blur(90px);
  opacity: 0.35;
  pointer-events: none;
`

const Inner = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 48px 52px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;

  ${media.mobile} {
    grid-template-columns: 1fr;
    padding: 40px 24px 48px;
    gap: 20px;
    align-items: center;
    justify-items: center;
  }
`

const Heading = styled.h1`
  margin: 0;
  font-family: 'Elice DX Neolli', 'Noto Sans KR', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.6;
  color: #ffffff;
  white-space: pre-line;

  ${media.mobile} {
    font-size: 18px;
    text-align: center;
    line-height: 1.5;
  }
`

const Highlight = styled.span`
  font-weight: 700;
  color: #ff6ea8;
`

const Right = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 50px;
  height: 100%;

  ${media.mobile} {
    justify-content: center;
    padding-right: 0;
    height: auto;
  }
`

const Block = styled.img`
  width: 135px;
  height: auto;
  filter:
    drop-shadow(0 12px 24px rgba(0, 0, 0, 0.6))
    drop-shadow(0 0 20px rgba(255, 110, 168, 0.3));

  ${media.mobile} {
    width: 80px;
  }
`

const StarWrap = styled.div`
  position: absolute;
  top: 100px;
  left: 315px;
  pointer-events: none;
  z-index: 2;

  ${media.mobile} {
    display: none;
  }
`

const SliderBar = styled.div`
  position: absolute;
  bottom: 14px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  ${media.mobile} {
    gap: 30px;
    bottom: 12px;
  }
`

const ArrowBtn = styled.button`
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  opacity: 0.6;
  color: #fff;
  font-size: 24px;
  line-height: 1;
  display: flex;
  align-items: center;

  &:hover { opacity: 1; }

  ${media.mobile} {
    font-size: 20px;
    padding: 4px;
  }
`

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  ${media.mobile} {
    gap: 5px;
  }
`

const Dot = styled.span<{ $active?: boolean }>`
  width: ${(p) => (p.$active ? 20 : 7)}px;
  height: 7px;
  border-radius: 999px;
  background: ${(p) => (p.$active ? '#ff6ea8' : 'rgba(255,255,255,0.3)')};
  transition: all 0.2s;
  cursor: pointer;

  ${media.mobile} {
    width: ${(p) => (p.$active ? 16 : 6)}px;
    height: 6px;
  }
`

function Star({ size = 28, color = '#ff7ab0' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill={color}
      />
    </svg>
  )
}

function FirstSlideContent() {
  return (
    <Root>
      <GradLeft />
      <GradRight />
      <StarWrap>
        <Star />
      </StarWrap>
      <Inner>
        <Heading>
          창의력을 바탕으로,{'\n'}
          구성원의 성장을 추구하는 <Highlight>FABLO</Highlight>
        </Heading>
        <Right>
          <Block src={BlockSvg} alt="" />
        </Right>
      </Inner>
    </Root>
  )
}

export function FirstSlide() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + TOTAL_SLIDES) % TOTAL_SLIDES)
  const next = () => setCurrent((c) => (c + 1) % TOTAL_SLIDES)

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  const SlideComponent = SLIDES[current]

  return (
    <Wrapper>
      {SlideComponent ? <SlideComponent /> : <FirstSlideContent />}

      <SliderBar>
        <ArrowBtn onClick={prev} aria-label="이전 슬라이드">‹</ArrowBtn>
        <Dots>
          {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
            <Dot key={i} $active={i === current} onClick={() => setCurrent(i)} />
          ))}
        </Dots>
        <ArrowBtn onClick={next} aria-label="다음 슬라이드">›</ArrowBtn>
      </SliderBar>
    </Wrapper>
  )
}