import styled from '@emotion/styled'

import Logo from 'components/Header/Logo'
import Button from 'components/shared/Button'
import { colors } from 'utils/constants'
import { mq } from 'styles/styles'
import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Flexbox from 'components/shared/Flexbox'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const Container = styled.footer({
  display: 'flex',
  alignItems: 'start',
  margin: '90px 0',
  padding: '15px',
})

const Content = styled.div({
  width: '90%',
  paddingLeft: '5rem',
})

const ContentMq = mq({
  padding: ['0', '0', '0', '0 0 0 5rem'],
})

const ContainerMq = mq({
  flexDirection: ['column', 'column', 'row', 'row'],
  alignItems: ['center', 'center', 'center', 'space-between'],
})

const navStyle = mq({
  display: 'flex',
  // flexWrap: 'wrap',
  flexDirection: ['column', 'column', 'row', 'row'],
  alignItems: ['center', 'center', 'flex-start', 'flex-start'],
  justifyContent: ['center', 'center', 'center', 'space-between'],
  marginTop: ['2rem', '2rem', 0, 0],
})

const Title = styled.h3({
  color: colors.black10,
  fontWeight: 700,
  fontSize: '16px',
  margin: '0 0 20px 0',
  padding: '0 0 10 0',
})

const navLinks = mq({
  minWidth: [180, 200, 120, 200],
  listStyleType: 'none',
  padding: '10px 0',
  marginRight: 15,
  display: 'flex',
  maxWidth: '3rem',
  flexDirection: 'column',
  color: colors.textGray,
  fontSize: '15px',
  '& > li': {
    padding: '8px 15px 8px 0',
  }
})

const copyrightStyle = mq({
  color: colors.textGray,
  fontSize: '13px',
  textAlign: ['center', 'center', 'left', 'left']
})

const Controller = mq({
  display: 'flex',
  gap: 10,
  padding: '92px 0 64px 0',
  color: colors.black10,
  fontSize: '16px',
  '& > button': {
    marginRight: '7px',
    background: colors.gray,
    color: colors.black10,
    border: `1px solid ${colors.gray}`,
    transition: 'all 1s',
    ':hover': {
      background: '#d7d9db',
    },
  },
  flexDirection: ['column', 'column', 'row', 'row'],
})

const buttons = [
  { title: 'Find RBT Training', src: '/images/nav_docs_dark.png', alt: 'docs' },
  {
    title: 'Parent Portal Login',
    src: '/images/nav_profile.png',
    alt: 'portal',
  },
  { title: 'Team PBS login', src: '/images/nav_profile.png', alt: 'docs' },
]

const LinkList: FC<{ url: string }> = ({ children, url }) => (
  <Link href={url}>
    <a>
      <li
        css={{
          padding: '8px 15px 8px 0',
        }}
      >
        {children}
      </li>
    </a>
  </Link>
)

const customerLinks = (
  <>
    <LinkList url='/policies'>Payment policy</LinkList>
    <LinkList url='/policies'>Refund policy</LinkList>
    <LinkList url='/policies'>Terms of use</LinkList>
    <LinkList url='/policies'>Privacy policy</LinkList>
    <LinkList url='/policies'>
      HIPAA Notice of privacy practices
    </LinkList>
  </>
)

const aboutLinks = (
  <>
    <LinkList url='/about-team-pbs'>About PBS Corporation</LinkList>
    <LinkList url='/what-is-applied-behavior-analysis'>
      About ABA
    </LinkList>
    <LinkList url='/team-pbs-videos'>Company Videos</LinkList>
    <LinkList url='/contact/region'>Contact Us</LinkList>
    <LinkList url='/resource-center'>Resources</LinkList>
  </>
)

const contactLinks = (
  <>
    <li>(855)TEAMPBS</li>
    <li>+1-855-832-6727</li>
  </>
)

const therapyLinks = (
  <>
    <LinkList url='/aba-services'>Eligibility</LinkList>
    <LinkList url='/request-aba-services'>
      Request ABA Therapy
    </LinkList>
  </>
)

const careersLinks = (
  <>
    <LinkList url='/careers'>Available Positions</LinkList>
    <LinkList url='/job-application'>Work With Us</LinkList>
  </>
)

const Footer = () => {
  const { width } = useWindowDimensions()
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)
  const [toggle4, setToggle4] = useState(false)
  const [toggle5, setToggle5] = useState(false)

  const clearAll = () => {
    setToggle1(false)
    setToggle2(false)
    setToggle3(false)
    setToggle4(false)
    setToggle5(false)
  }

  return (
    <Container css={ContainerMq}>
      <div css={{ marginBottom: 'auto' }}>
        <Logo
          isLogo
          src='/images/footer_logo.png'
          alt='logo'
          width='145'
          height='145'
          link='/'
        />
      </div>
      <Content css={ContentMq}>
        <div css={navStyle}>
          <ul
            css={navLinks}
            onClick={() => {
              clearAll()
              toggle1 ? setToggle1(false) : setToggle1(true)
            }}
          >
            <Title>Apply for ABA Therapy</Title>
            {width < 942 ? toggle1 && therapyLinks : therapyLinks}
          </ul>
          <ul
            css={navLinks}
            onClick={() => {
              clearAll()
              toggle2 ? setToggle2(false) : setToggle2(true)
            }}
          >
            <Title>About</Title>
            {width < 942 ? toggle2 && aboutLinks : aboutLinks}
          </ul>
          <ul
            css={navLinks}
            onClick={() => {
              clearAll()
              toggle3 ? setToggle3(false) : setToggle3(true)
            }}
          >
            <Title>Careers</Title>
            {width < 942 ? toggle3 && careersLinks : careersLinks}
          </ul>
          <ul
            css={navLinks}
            onClick={() => {
              clearAll()
              toggle4 ? setToggle4(false) : setToggle4(true)
            }}
          >
            <Title>Customer service</Title>
            {width < 942 ? toggle4 && customerLinks : customerLinks}
          </ul>
          <ul
            css={navLinks}
            onClick={() => {
              clearAll()
              toggle5 ? setToggle5(false) : setToggle5(true)
            }}
          >
            <Title>Contact</Title>
            {width < 942 ? toggle5 && contactLinks : contactLinks}
            <li>
              <Flexbox col items=''>
                <p
                  css={{
                    fontSize: '13px',
                    color: 'color: rgba(119,133,151,0.50)',
                    '~img:hover': { color: '#607a98' },
                  }}
                >
                  Follow PBS
                </p>
                <Flexbox
                  justify=''
                  gap='2rem'
                  margin='1rem 0'
                  css={{
                    '& img': { filter: 'grayscale(1) brightness(2)' },
                    '& img:hover': { filter: 'grayscale(1) brightness(1.5)' },
                  }}
                >
                  <Image
                    src='/images/fb.png'
                    alt='docs'
                    width={12}
                    height={24}
                  />
                  <Image
                    src='/images/in.png'
                    alt='docs'
                    width={21}
                    height={24}
                  />
                </Flexbox>
              </Flexbox>
            </li>
          </ul>
        </div>
        <div css={Controller}>
          {buttons.map((btn, index) => (
            <Button key={index}>
              <Logo src={btn.src} alt={btn.alt} width={15} height={15} />
              {btn.title}
            </Button>
          ))}
        </div>
        <p css={copyrightStyle}>
          &copy;Copyright 2021 PBS Corp. All right reserved.
        </p>
      </Content>
    </Container>
  )
}

export default Footer
