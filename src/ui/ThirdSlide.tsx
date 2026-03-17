import styled from 'styled-components'

import ThirdImg     from '../assets/slide/Third.svg'
import FalletterImg from '../assets/slide/falletter.svg'

const Root = styled.section`
  width: 100%;
  height: 240px;
  background: #0b0b0d;
  overflow: hidden;
  position: relative;
`

const SlideImg = styled.img<{ $side: 'left' | 'right' }>`
  position: absolute;
  left: ${(p) => (p.$side === 'left' ? '0px' : 'auto')};
  right: ${(p) => (p.$side === 'right' ? '100px' : 'auto')};
  top: 50%;
  transform: translateY(-50%);
  height: ${(p) => (p.$side === 'left' ? '100%' : '70%')};
  width: auto;
  object-fit: contain;
  pointer-events: none;
`

export function ThirdSlide() {
  return (
    <Root>
      <SlideImg $side="left"  src={ThirdImg}     alt="" />
      <SlideImg $side="right" src={FalletterImg} alt="" />
    </Root>
  )
}

