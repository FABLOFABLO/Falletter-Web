import { useState } from 'react'
import styled from 'styled-components'

import Img1 from '../assets/memories/1.svg'
import Img2 from '../assets/memories/2.svg'
import Img3 from '../assets/memories/3.svg'
import Img4 from '../assets/memories/4.svg'
import Img5 from '../assets/memories/5.svg'
import Img6 from '../assets/memories/6.svg'
import Img7 from '../assets/memories/7.svg'
import Img8 from '../assets/memories/8.svg'
import Img9 from '../assets/memories/9.svg'

import Detail1 from '../assets/memories/1_detail.svg'
import Detail2 from '../assets/memories/2_detail.svg'
import Detail3 from '../assets/memories/3_detail.svg'
import Detail4 from '../assets/memories/4_detail.svg'
import Detail5 from '../assets/memories/5_detail.svg'
import Detail6 from '../assets/memories/6_detail.svg'
import Detail7 from '../assets/memories/7_detail.svg'
import Detail8 from '../assets/memories/8_detail.svg'
import Detail9 from '../assets/memories/9_detail.svg'

import { media } from '../styles/GlobalStyle'

const MEMORIES = [
  { thumb: Img1, detail: Detail1 },
  { thumb: Img2, detail: Detail2 },
  { thumb: Img3, detail: Detail3 },
  { thumb: Img4, detail: Detail4 },
  { thumb: Img5, detail: Detail5 },
  { thumb: Img6, detail: Detail6 },
  { thumb: Img7, detail: Detail7 },
  { thumb: Img8, detail: Detail8 },
  { thumb: Img9, detail: Detail9 },
]

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
  padding: 80px 0;

  ${media.mobile} {
    padding: 50px 0;
  }
`

const Title = styled.h2`
  margin: 0 0 28px;
  font-family: 'Tenada', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 28px;
  line-height: 1;
  color: #ff7a9d;
  text-align: center;

  ${media.mobile} {
    font-size: 24px;
    margin: 0 0 20px;
  }
`

const Wrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 48px;

  ${media.mobile} {
    padding: 0 24px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px 16px;

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`

const Card = styled.div`
  border-radius: 6px;
  overflow: hidden;
  background: #1a1a1c;
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    transform: scale(1.02);
    opacity: 0.85;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const Overlay = styled.div<{ $visible: boolean }>`
  display: ${(p) => (p.$visible ? 'flex' : 'none')};
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(39, 39, 39, 0.80);
  align-items: center;
  justify-content: center;
  padding: 24px;
`

const DetailImg = styled.img`
  max-width: 640px;
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 16px;
`

export function Memories() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const handleClose = () => setSelectedIdx(null)

  return (
    <Root>
      <Title>추억</Title>
      <Wrap>
        <Grid>
          {MEMORIES.map((mem, i) => (
            <Card key={i} onClick={() => setSelectedIdx(i)}>
              <img src={mem.thumb} alt={`추억 ${i + 1}`} />
            </Card>
          ))}
        </Grid>
      </Wrap>

      <Overlay $visible={selectedIdx !== null} onClick={handleClose}>
        {selectedIdx !== null && (
          <DetailImg
            src={MEMORIES[selectedIdx].detail}
            alt={`추억 ${selectedIdx + 1} 상세`}
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </Overlay>
    </Root>
  )
}