import styled from 'styled-components'

import ImgModak    from '../assets/meokblo/모닭.svg'
import ImgGongCha1 from '../assets/meokblo/공차.svg'
import ImgGongCha2 from '../assets/meokblo/공차2.svg'
import ImgCompose  from '../assets/meokblo/컴포즈.svg'
import ImgYoa      from '../assets/meokblo/요아정.svg'
import ImgHoesik   from '../assets/meokblo/회식.svg'
import ImgDonut1   from '../assets/meokblo/도넛.svg'
import ImgDonut2   from '../assets/meokblo/도넛2.svg'
import LineDot     from '../assets/meokblo/line-dot.svg'
import { media } from '../styles/GlobalStyle'

const INDENT_ROW1 = 100
const INDENT_ROW2 = 50
const IMG_SIZE    = 110

interface EventItem {
  id: string
  title: string
  month: string
  images: string[]
}

const ROW1: EventItem[] = [
  { id: 'm3', title: '모닭&공차',   month: '3월', images: [ImgModak,   ImgGongCha1] },
  { id: 'm4', title: '컴포즈&공차', month: '4월', images: [ImgCompose, ImgGongCha2] },
]

const ROW2: EventItem[] = [
  { id: 'm10',  title: '요아정', month: '10월', images: [ImgYoa]     },
  { id: 'm11',  title: '회식',   month: '11월', images: [ImgHoesik]  },
  { id: 'm12a', title: '도넛',   month: '12월', images: [ImgDonut1]  },
  { id: 'm12b', title: '도넛',   month: '12월', images: [ImgDonut2]  },
]

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
  padding: 50px 0 100px;

  ${media.mobile} {
    padding: 40px 0 60px;
  }
`

const Title = styled.h2`
  margin: 0 0 48px;
  font-family: 'Tenada', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 30px;
  line-height: 1;
  color: #ff7a9d;
  text-align: center;

  ${media.mobile} {
    font-size: 24px;
    margin: 0 0 32px;
  }
`

const Wrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${media.mobile} {
    padding: 0 24px;
    gap: 32px;
  }
`

const RowWrap    = styled.div`
  display: flex;
  flex-direction: column;
`
const CardRow    = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.mobile} {
    flex-direction: column;
    gap: 24px;
  }
`
const MonthRow   = styled.div`
  display: flex;

  ${media.mobile} {
    flex-direction: column;
    gap: 0;
  }
`
const RailRow    = styled.div`
  display: flex;
  margin-top: 10px;

  ${media.mobile} {
    display: none;
  }
`

const Card = styled.article<{ $indent: number }>`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  padding: 0 16px 0 ${(p) => p.$indent}px;

  ${media.mobile} {
    padding: 0 8px;
  }
`

const DashedBorder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`

const DashedLineImg = styled.img<{ $h: number }>`
  width: 2px;
  height: ${(p) => p.$h}px;
  object-fit: fill;
  flex-shrink: 0;
  display: block;

  ${media.mobile} {
    display: none;
  }
`

const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.3;
  color: #fff;

  ${media.mobile} {
    font-size: 14px;
  }
`

const ImgGrid = styled.div<{ $cols: number; $size: number }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$cols}, minmax(0, ${(p) => p.$size}px));
  gap: 8px;
  max-width: 100%;

  ${media.mobile} {
    grid-template-columns: repeat(${(p) => p.$cols}, 1fr);
    gap: 6px;
  }
`

const ImgBox = styled.div<{ $size: number }>`
  width: 100%;
  max-width: ${(p) => p.$size}px;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1c;
  flex-shrink: 0;

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
    display: block;
  }

  ${media.mobile} {
    max-width: 100%;
  }
`

const RailCell = styled.div`
  flex: 1;
  position: relative;
  height: 9px;

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
    right: 0;
    height: 1px;
    background: #ff7a9d;
  }
`

const Dot = styled.div<{ $indent: number }>`
  position: absolute;
  top: 0;
  left: ${(p) => p.$indent}px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #ff7a9d;
  z-index: 1;
`

const MonthCell = styled.div<{ $indent: number }>`
  flex: 1;
  padding: 5px 0 0 ${(p) => p.$indent}px;

  ${media.mobile} {
    padding: 4px 0 0 0;
  }
`

const Month = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #ff7a9d;

  ${media.mobile} {
    font-size: 12px;
  }
`

interface EventRowProps {
  events: EventItem[]
  indent: number
  imgSize: number
}

function EventRow({ events, indent, imgSize }: EventRowProps) {
  const lineH = 20 + 8 + imgSize

  return (
    <RowWrap>
      <CardRow>
        {events.map((e) => (
          <Card key={e.id} $indent={indent}>
            <DashedBorder>
              <DashedLineImg src={LineDot} alt="" $h={lineH} />
              <div>
                <CardTitle>{e.title}</CardTitle>
                <ImgGrid $cols={e.images.length === 2 ? 2 : 1} $size={imgSize}>
                  {e.images.map((src, i) => (
                    <ImgBox key={i} $size={imgSize}>
                      <img src={src} alt={e.title} />
                    </ImgBox>
                  ))}
                </ImgGrid>
              </div>
            </DashedBorder>
          </Card>
        ))}
      </CardRow>

      <RailRow>
        {events.map((e) => (
          <RailCell key={e.id}>
            <Dot $indent={indent} />
          </RailCell>
        ))}
      </RailRow>

      <MonthRow>
        {events.map((e) => (
          <MonthCell key={e.id} $indent={indent}>
            <Month>{e.month}</Month>
          </MonthCell>
        ))}
      </MonthRow>
    </RowWrap>
  )
}

export function Meokblo() {
  return (
    <Root>
      <Title>먹블로</Title>
      <Wrap>
        <EventRow events={ROW1} indent={INDENT_ROW1} imgSize={IMG_SIZE} />
        <EventRow events={ROW2} indent={INDENT_ROW2} imgSize={IMG_SIZE} />
      </Wrap>
    </Root>
  )
}
