import styled from 'styled-components'

import ImgFalletter from '../assets/hero/crane.svg'
import ImgPhone     from '../assets/hero/phone.svg'
import IconUsers    from '../assets/hero/people.svg'
import IconEye      from '../assets/hero/eye.svg'
import IconGift     from '../assets/hero/brick.svg'
import IconShield   from '../assets/hero/x.svg'

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

const Root = styled.section`
  width: 100%;
  background: #0b0b0d;
`

const Hero = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 64px 0 160px;
`

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  align-items: center;
  gap: 40px;
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
`

const Title = styled.h2`
  margin: 0 0 16px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 800;
  font-size: 46px;
  color: #ffffff;
  line-height: 1.1;
`

const Desc = styled.p`
  margin: 0 0 20px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #cccccc;
  line-height: 1.85;
  white-space: pre-line;
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
`

const DetailsInner = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 60px;
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;
`

const TitleLine = styled.div`
  width: 32px;
  height: 3px;
  background: #FE5784;
  border-radius: 2px;
`

const DetailsTitle = styled.h3`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
`

const PhoneImg = styled.img`
  width: 80%;
  margin: 0 auto;
  display: block;
  object-fit: contain;
`

const FAQ = styled.div`
  padding: 100px 0 120px;
`

const FAQTitle = styled.h2`
  margin: 0 0 60px;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #ff7a9d;
  text-align: center;
`

const Grid = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`

const Card = styled.div`
  background: #0e0e10;
  border: 1px solid #FF7A9D;
  border-radius: 16px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`

const CardDesc = styled.p`
  margin: 0;
  font-family: Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #b7b7b7;
  line-height: 1.7;
  white-space: pre-line;
`

const HERO_DESC = `오직 DSM 학생들만을 위한 익명 소통과 맞춤형 연결 서비스로,
학교 커뮤니티 내 숨겨진 상호작용을 활성화하고
학생들 간의 자연스러운 교류를 돕는 서비스입니다.
단순한 메시지 전달을 넘어, 학생들이 자유롭게 의견을 나누고,
새로운 관계를 형성할 기회를 제공하는 것이 본 서비스의 목적입니다.`

export function Introduce() {
  return (
    <Root>
      <Hero>
        <Inner>
          <ImageWrap>
            <img src={ImgFalletter} alt="Falletter" />
          </ImageWrap>
          <TextWrap>
            <Label>FEATURED PROJECT</Label>
            <Title>Falletter</Title>
            <Desc>{HERO_DESC}</Desc>
            <LinkBtn href="https://notion.so" target="_blank" rel="noopener noreferrer">
              Falletter Notion
            </LinkBtn>
          </TextWrap>
        </Inner>
      </Hero>

      <Divider />

      <Details>
        <DetailsInner>
          <TitleRow>
            <TitleLine />
            <DetailsTitle>Project Details</DetailsTitle>
          </TitleRow>
          <PhoneImg src={ImgPhone} alt="Project Details" />
        </DetailsInner>
      </Details>

      <FAQ>
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
    </Root>
  )
}