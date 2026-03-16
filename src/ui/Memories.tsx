import styled from 'styled-components'

import Img1 from '../assets/Memories/1.svg'
import Img2 from '../assets/Memories/2.svg'
import Img3 from '../assets/Memories/3.svg'
import Img4 from '../assets/Memories/4.svg'
import Img5 from '../assets/Memories/5.svg'
import Img6 from '../assets/Memories/6.svg'
import Img7 from '../assets/Memories/7.svg'
import Img8 from '../assets/Memories/8.svg'

const MEMORIES = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8]

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
  padding: 80px 0;
`

const Title = styled.h2`
  margin: 0 0 28px;
  font-family: 'Tenada', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 28px;
  line-height: 1;
  color: #ff7a9d;
  text-align: center;
`

const Wrap = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 48px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px 16px;
`

const Card = styled.div`
  border-radius: 6px;
  overflow: hidden;
  background: #1a1a1c;
  width: 100%;
  aspect-ratio: 16 / 9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export function Memories() {
  return (
    <Root>
      <Title>추억</Title>
      <Wrap>
        <Grid>
          {MEMORIES.map((src, i) => (
            <Card key={i}>
              <img src={src} alt={`추억 ${i + 1}`} />
            </Card>
          ))}
        </Grid>
      </Wrap>
    </Root>
  )
}
