import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import JiyunImg    from '../assets/member/정지윤.png'
import DoeunImg    from '../assets/member/김도은.png'
import JiyaImg     from '../assets/member/이지아.png'
import SuinImg     from '../assets/member/김수인.png'
import KangheeImg  from '../assets/member/이강희.png'
import JiyunKimImg from '../assets/member/김지윤.png'
import SuhyunImg   from '../assets/member/권수현.png'

import HaeunImg     from '../assets/member/유하은.png'
import MyeongjinImg from '../assets/member/김명진.png'
import JiwooImg     from '../assets/member/유지우.png'
import HaeminImg    from '../assets/member/강해민.png'
import NakyungImg   from '../assets/member/이나경.png'
import GaeunImg     from '../assets/member/김가은.png'

import CrownImg from '../assets/member/crown.svg'
import { media } from '../styles/GlobalStyle'

interface Member {
  name: string
  role: string
  email?: string
  image: string
  isLeader?: boolean
}

interface Generation {
  gen: string
  members: Member[]
  cols: number
}

const CURRENT: Generation[] = [
  {
    gen: '10기',
    cols: 2,
    members: [
      { name: '정지윤', role: '동아리장 & Flutter', email: 'jiyuni0303@dsm.hs.kr', image: JiyunImg, isLeader: true },
      { name: '김도은', role: 'Front-End', email: 'qwaszx080402@dsm.hs.kr', image: DoeunImg },
    ],
  },
  {
    gen: '11기',
    cols: 2,
    members: [
      { name: '이지아', role: 'Flutter', email: 'leejia0324@dsm.hs.kr', image: JiyaImg },
      { name: '김수인', role: 'Design', email: 'tndlsuin@dsm.hs.kr', image: SuinImg },
    ],
  },
  {
    gen: '',
    cols: 3,
    members: [
      { name: '이강희', role: 'Back-end', email: 'kanghee08@dsm.hs.kr', image: KangheeImg },
      { name: '김지윤', role: 'Back-end', email: 'jjunkim@dsm.hs.kr', image: JiyunKimImg },
      { name: '권수현', role: 'Back-end', email: 'iokshoi0915@dsm.hs.kr', image: SuhyunImg },
    ],
  },
]

const GRADUATED: Generation[] = [
  {
    gen: '9기',
    cols: 3,
    members: [
      { name: '유하은', role: '전 동아리장 & Back-end', image: HaeunImg, isLeader: true },
      { name: '김명진', role: 'Back-end', image: MyeongjinImg },
      { name: '유지우', role: 'Flutter', image: JiwooImg },
      { name: '강해민', role: 'Design', image: HaeminImg },
      { name: '이나경', role: 'QA', image: NakyungImg },
      { name: '김가은', role: 'Marketing', image: GaeunImg },
    ],
  },
]

const GEN_LABELS = ['10기', '11기']

function useScrollSpy(count: number, enabled: boolean) {
  const [activeIdx, setActiveIdx] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!enabled) return
    const observers = refs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { threshold: 0.1, rootMargin: '-20% 0px -20% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [enabled, count])

  useEffect(() => { setActiveIdx(0) }, [enabled])

  return { activeIdx, refs }
}

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
  min-height: 100vh;
  padding: 20px 0 120px;

  ${media.mobile} {
    padding: 20px 0 80px;
  }
`

const TabRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  ${media.mobile} {
    margin-bottom: 40px;
    padding: 0 24px;
  }
`

const TabWrap = styled.div`
  display: flex;
  background: #1a1a1e;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  overflow: hidden;

  ${media.mobile} {
    width: 100%;
    max-width: 320px;
  }
`

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 10px 60px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;
  transition: all 0.2s;
  background: ${(p) => (p.$active ? '#FE5784' : 'transparent')};
  color: ${(p) => (p.$active ? '#ffffff' : 'rgba(255,255,255,0.5)')};
  white-space: nowrap;

  ${media.mobile} {
    padding: 10px 24px;
    font-size: 14px;
  }
`

const PageTitle = styled.h1`
  text-align: center;
  margin: 0 0 16px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;

  span { color: #FF7A9D; }

  ${media.mobile} {
    font-size: 26px;
    padding: 0 24px;
  }
`

const PageSubTitle = styled.p`
  text-align: center;
  margin: 0 0 80px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #b7b7b7;

  ${media.mobile} {
    font-size: 13px;
    margin: 0 0 50px;
    padding: 0 24px;
  }
`

const GenSection = styled.div`
  padding: 20px 0 200px;

  ${media.mobile} {
    padding: 20px 0 100px;
  }
`

const LastGenSection = styled(GenSection)`
  padding-bottom: 40px;
`

const GenTitle = styled.h2`
  text-align: center;
  margin: 0 0 48px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #FF9BBB;

  ${media.mobile} {
    font-size: 20px;
    margin: 0 0 32px;
  }
`

const MemberGrid = styled.div<{ $cols: number }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$cols}, 140px);
  justify-content: center;
  gap: 60px 80px;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 60px;

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
    padding: 0 24px;
    max-width: 100%;
  }
`

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  ${media.mobile} {
    gap: 10px;
  }
`

const AvatarWrap = styled.div`
  position: relative;
  width: 140px;
  height: 140px;

  ${media.mobile} {
    width: 110px;
    height: 110px;
  }
`

const Crown = styled.img`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;

  ${media.mobile} {
    top: -22px;
    width: 32px;
  }
`

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #FF9BBB;

  ${media.mobile} {
    width: 110px;
    height: 110px;
  }
`

const MemberRole = styled.span`
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #b7b7b7;

  ${media.mobile} {
    font-size: 12px;
  }
`

const MemberName = styled.span`
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;

  ${media.mobile} {
    font-size: 15px;
  }
`

const MemberEmail = styled.span`
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 300;
  color: #888888;
  text-align: center;

  ${media.mobile} {
    font-size: 11px;
  }
`

const Indicator = styled.div`
  position: fixed;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 100;

  ${media.mobile} {
    display: none;
  }
`

const IndDot = styled.button<{ $active: boolean }>`
  width: 6px;
  height: ${(p) => (p.$active ? 28 : 6)}px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  padding: 0;
  background: ${(p) => (p.$active ? '#FF9BBB' : 'rgba(255,155,187,0.3)')};
  transition: all 0.3s ease;
`

const SpacedGrid = styled(MemberGrid)`
  margin-bottom: 60px;

  ${media.mobile} {
    margin-bottom: 40px;
  }
`

function MemberCardItem({ member }: { member: Member }) {
  return (
    <MemberCard>
      <AvatarWrap>
        {member.isLeader && <Crown src={CrownImg} alt="crown" />}
        <Avatar src={member.image} alt={member.name} />
      </AvatarWrap>
      <MemberRole>{member.role}</MemberRole>
      <MemberName>{member.name}</MemberName>
      {member.email && <MemberEmail>{member.email}</MemberEmail>}
    </MemberCard>
  )
}

export function Members() {
  const [tab, setTab] = useState<'current' | 'graduated'>('current')

  const isCurrent   = tab === 'current'
  const titlePrefix = isCurrent ? '동아리' : '졸업생'

  const { activeIdx, refs } = useScrollSpy(GEN_LABELS.length, isCurrent)

  const scrollToGen = (i: number) => {
    refs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <Root>
      <TabRow>
        <TabWrap>
          <Tab $active={isCurrent}  onClick={() => setTab('current')}>재학생</Tab>
          <Tab $active={!isCurrent} onClick={() => setTab('graduated')}>졸업생</Tab>
        </TabWrap>
      </TabRow>

      <PageTitle>{titlePrefix} <span>부원</span> 소개</PageTitle>
      {isCurrent && <PageSubTitle>FABLO의 멋진 멤버들을 소개합니다.</PageSubTitle>}

      {isCurrent ? (
        <>
          {/* 10기 */}
          <GenSection ref={(el) => { refs.current[0] = el }}>
            <GenTitle>10기</GenTitle>
            <MemberGrid $cols={CURRENT[0].cols}>
              {CURRENT[0].members.map((m) => <MemberCardItem key={m.name} member={m} />)}
            </MemberGrid>
          </GenSection>

          {/* 11기 */}
          <LastGenSection ref={(el) => { refs.current[1] = el }}>
            <GenTitle>11기</GenTitle>
            <SpacedGrid $cols={CURRENT[1].cols}>
              {CURRENT[1].members.map((m) => <MemberCardItem key={m.name} member={m} />)}
            </SpacedGrid>
            <MemberGrid $cols={CURRENT[2].cols}>
              {CURRENT[2].members.map((m) => <MemberCardItem key={m.name} member={m} />)}
            </MemberGrid>
          </LastGenSection>

          <Indicator>
            {GEN_LABELS.map((label, i) => (
              <IndDot
                key={label}
                $active={activeIdx === i}
                onClick={() => scrollToGen(i)}
                aria-label={label}
              />
            ))}
          </Indicator>
        </>
      ) : (
        GRADUATED.map((gen, idx) => (
          <GenSection key={idx}>
            {gen.gen && <GenTitle>{gen.gen}</GenTitle>}
            <MemberGrid $cols={gen.cols}>
              {gen.members.map((m) => <MemberCardItem key={m.name} member={m} />)}
            </MemberGrid>
          </GenSection>
        ))
      )}
    </Root>
  )
}