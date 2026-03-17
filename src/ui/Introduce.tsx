import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import ImgFalletter from '../assets/hero/crane.svg'
import ImgPhone     from '../assets/hero/phone.svg'
import IconUsers    from '../assets/hero/people.svg'
import IconEye      from '../assets/hero/eye.svg'
import IconGift     from '../assets/hero/brick.svg'
import IconShield   from '../assets/hero/x.svg'
import { media } from '../styles/GlobalStyle'

const QNA_ITEMS = [
  {
    icon: IconUsers,
    question: '누가 사용할 수 있나요?',
    answer: 'DSM 재학생만 dsm.hs.kr 이메일\n인증 후 가입 가능합니다.',
  },
  {
    icon: IconEye,
    question: '정말 익명인가요?',
    answer: '네, 편지와 커뮤니티는 완전히 익명으로 처리됩니다.',
  },
  {
    icon: IconGift,
    question: '브릭 혹은 래터는 어떻게 모으나요?',
    answer: '룰렛 보상으로 획득할 수 있습니다.',
  },
  {
    icon: IconShield,
    question: '부적절한 내용은 처리되나요?',
    answer: 'AI를 통해 필터링되며, 신고 시 제재,\n관리자 모니터링이 진행됩니다.',
  },
]

const SECTIONS = ['Falletter', 'Project Details', 'Q&A']

const HERO_DESC = `오직 DSM 학생들만을 위한 익명 소통과 맞춤형 연결 서비스로,
학교 커뮤니티 내 숨겨진 상호작용을 활성화하고
학생들 간의 자연스러운 교류를 돕는 서비스입니다.
단순한 메시지 전달을 넘어, 학생들이 자유롭게 의견을 나누고,
새로운 관계를 형성할 기회를 제공하는 것이 본 서비스의 목적입니다.`

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
`

const Hero = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 64px 0 160px;

  ${media.mobile} {
    min-height: auto;
    padding: 40px 0 80px;
  }
`

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  align-items: center;
  gap: 40px;

  ${media.mobile} {
    flex-direction: column;
    padding: 0 24px;
    gap: 32px;
  }
`

const ImageWrap = styled.div`
  flex-shrink: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-left: 40px;

  img {
    width: 300px;
    object-fit: contain;
  }

  ${media.mobile} {
    width: 200px;
    margin-left: 0;

    img {
      width: 200px;
    }
  }
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.span`
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #ff7a9d;
  letter-spacing: 0.12em;
  margin-bottom: 12px;

  ${media.mobile} {
    font-size: 11px;
    text-align: center;
  }
`

const Title = styled.h2`
  margin: 0 0 16px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 46px;
  color: #ffffff;
  line-height: 1.1;

  ${media.mobile} {
    font-size: 32px;
    text-align: center;
  }
`

const Desc = styled.p`
  margin: 0 0 20px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #cccccc;
  line-height: 1.85;
  white-space: pre-line;

  ${media.mobile} {
    font-size: 14px;
    text-align: center;
  }
`

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 40px;
  border-radius: 8px;
  background: #FE5784;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;

  ${media.mobile} {
    width: 160px;
    height: 38px;
    font-size: 13px;
    align-self: center;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ffffff;
  max-width: 1000px;
  margin: 0 auto;
`

const Details = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;

  ${media.mobile} {
    min-height: auto;
    padding: 60px 0;
  }
`

const DetailsInner = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 60px;

  ${media.mobile} {
    padding: 0 24px;
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;

  ${media.mobile} {
    gap: 12px;
    margin-bottom: 40px;
  }
`

const TitleLine = styled.div`
  width: 32px;
  height: 3px;
  background: #FE5784;
  border-radius: 2px;

  ${media.mobile} {
    width: 24px;
    height: 2px;
  }
`

const DetailsTitle = styled.h3`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;

  ${media.mobile} {
    font-size: 18px;
  }
`

const PhoneImg = styled.img`
  width: 80%;
  margin: 0 auto;
  display: block;
  object-fit: contain;

  ${media.mobile} {
    width: 100%;
  }
`

const FAQ = styled.div`
  padding: 100px 0 120px;

  ${media.mobile} {
    padding: 60px 0 80px;
  }
`

const FAQTitle = styled.h2`
  margin: 0 0 60px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #ff7a9d;
  text-align: center;

  ${media.mobile} {
    font-size: 24px;
    margin: 0 0 40px;
  }
`

const Grid = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  ${media.mobile} {
    grid-template-columns: 1fr;
    padding: 0 24px;
    gap: 16px;
  }
`

const Card = styled.div`
  background: #0e0e10;
  border: 1px solid #FF7A9D;
  border-radius: 16px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.mobile} {
    padding: 24px 20px;
    gap: 12px;
  }
`

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  background: #3d1a24;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 53px;
  }
`

const CardTitle = styled.h3`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;

  ${media.mobile} {
    font-size: 17px;
  }
`

const CardDesc = styled.p`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #b7b7b7;
  line-height: 1.7;
  white-space: pre-line;

  ${media.mobile} {
    font-size: 13px;
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
  background: ${(p) => (p.$active ? '#FF7A9D' : 'rgba(255,122,157,0.3)')};
  transition: all 0.3s ease;
`

export function Introduce() {
  const [activeIdx, setActiveIdx] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i) },
        { threshold: 0.1, rootMargin: '-20% 0px -20% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  const scrollToSection = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <Root>
      <Hero ref={(el) => { sectionRefs.current[0] = el }}>
        <Inner>
          <ImageWrap>
            <img src={ImgFalletter} alt="Falletter" />
          </ImageWrap>
          <TextWrap>
            <Label>FEATURED PROJECT</Label>
            <Title>Falletter</Title>
            <Desc>{HERO_DESC}</Desc>
            <LinkBtn href="https://judicious-dungeon-dd4.notion.site/Falletter-1d2c2dbb99438088bb51c0cc53f3215b?source=copy_link" target="_blank" rel="noopener noreferrer">
              Falletter Notion
            </LinkBtn>
          </TextWrap>
        </Inner>
      </Hero>

      <Divider />

      <Details ref={(el) => { sectionRefs.current[1] = el }}>
        <DetailsInner>
          <TitleRow>
            <TitleLine />
            <DetailsTitle>Project Details</DetailsTitle>
          </TitleRow>
          <PhoneImg src={ImgPhone} alt="Project Details" />
        </DetailsInner>
      </Details>

      <FAQ ref={(el) => { sectionRefs.current[2] = el }}>
        <FAQTitle>Q&A</FAQTitle>
        <Grid>
          {QNA_ITEMS.map((item) => (
            <Card key={item.question}>
              <IconBox>
                <img src={item.icon} alt="" />
              </IconBox>
              <CardTitle>{item.question}</CardTitle>
              <CardDesc>{item.answer}</CardDesc>
            </Card>
          ))}
        </Grid>
      </FAQ>

      <Indicator>
        {SECTIONS.map((label, i) => (
          <IndDot
            key={label}
            $active={activeIdx === i}
            onClick={() => scrollToSection(i)}
            aria-label={label}
          />
        ))}
      </Indicator>
    </Root>
  )
}
