
import styled from '@emotion/styled'

import Logo from 'components/Header/Logo'
import Button from 'components/shared/Button'
import { colors } from 'utils/constants'
import { mq } from 'styles/styles'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Flexbox from 'components/shared/Flexbox'

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
  padding: ['0', '0', '0', '0 0 0 5rem']
})

const ContainerMq = mq({
  flexDirection: ['column', 'column', 'row', 'row'],
  alignItems: ['center', 'center', 'center', 'space-between'],
})

const Nav = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginTop: '2rem',
})

const NavMq = mq({
  flexDirection: ['row', 'row', 'row', 'row'],
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

const NavLinks = styled.ul({
  listStyleType: 'none',
  padding: '10px 0',
  marginRight: 15,
  display: 'flex',
  flexDirection: 'column',
  color: colors.textGray,
  fontSize: '15px',
  '& > li': {
    padding: '8px 15px 8px 0',
  },
})

const NavLinksMq = mq({
  minWidth: [200, 200, 200, 200]
})

const Copyright = styled.p({
  color: colors.textGray,
  fontSize: '13px',
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
    }
  },
  flexDirection: ['column', 'column', 'row', 'row'],
})

const buttons = [
  { title: 'Find RBT Training', src: '/images/nav_docs_dark.png', alt: 'docs' },
  { title: 'Parent Portal Login', src: '/images/nav_profile.png', alt: 'portal' },
  { title: 'Team PBS login', src: '/images/nav_profile.png', alt: 'docs' },
]

const LinkList: FC<{ url: string }> = ({ children, url }) => (
  <Link href={url}>
    <a>
      <li css={{
    padding: '8px 15px 8px 0',
  }}>{children}</li>
    </a>
  </Link>
)

const Footer = () => (
  <Container css={ContainerMq}>
    <div css={{ marginBottom: 'auto' }}>
      <Logo isLogo src='/images/footer_logo.png' alt='logo' width='145' height='145' link='/' />
    </div>
    <Content css={ContentMq}>
      <Nav css={NavMq}>
        <NavLinks css={NavLinksMq}>
          <Title>Apply for ABA Therapy</Title>
          <LinkList url='/aba-services'>Eligibility</LinkList>
          <LinkList url='/request-aba-services'>Request ABA Therapy</LinkList>
        </NavLinks>
        <NavLinks css={NavLinksMq}>
          <Title>About</Title>
          <LinkList url='/about-team-pbs'>About PBS Corporation</LinkList>
          <LinkList url='/what-is-applied-behavior-analysis'>About ABA</LinkList>
          <LinkList url='/team-pbs-videos'>Company Videos</LinkList>
          <LinkList url='/contact/region'>Contact Us</LinkList>
          <LinkList url='/resource-center'>Resources</LinkList>
        </NavLinks>
        <NavLinks css={NavLinksMq}>
          <Title>Careers</Title>
          <LinkList url='/careers'>Available Positions</LinkList>
          <LinkList url='/job-application'>Work With Us</LinkList>
        </NavLinks>
        <NavLinks css={NavLinksMq}>
          <Title>Customer service</Title>
          <LinkList url='/policies'>Payment policy</LinkList>
          <LinkList url='/policies'>Refund policy</LinkList>
          <LinkList url='/policies'>Terms of use</LinkList>
          <LinkList url='/policies'>Privacy policy</LinkList>
          <LinkList url='/policies'>HIPAA Notice of privacy practices</LinkList>
        </NavLinks>
        <NavLinks css={NavLinksMq}>
          <Title>Contact</Title>
          <li>(855)TEAMPBS</li>
          <li>+1-855-832-6727</li>
          <li>
            <Flexbox col items=''>
              <p css={{ fontSize: '13px', color: 'color: rgba(119,133,151,0.50)', '~img:hover': { color: '#607a98' } }}>Follow PBS</p>
              <Flexbox justify='' gap='2rem' margin='1rem 0' css={{ '& img': { filter: 'grayscale(1) brightness(2)' }, '& img:hover': { filter: 'grayscale(1) brightness(1.5)' } }}>
                <Image src='/images/fb.png' alt='docs' width={12} height={24} />
                <Image src='/images/in.png' alt='docs' width={21} height={24} />
              </Flexbox>
            </Flexbox>
          </li>
        </NavLinks>
      </Nav>
      <div css={Controller}>
        {buttons.map((btn, index) => (
          <Button key={index}>
            <Logo
              src={btn.src}
              alt={btn.alt}
              width={15}
              height={15}
            />
            {btn.title}
          </Button>
        ))}
      </div>
      <Copyright>&copy;Copyright 2021 PBS Corp. All right reserved.</Copyright>
    </Content>
  </Container>
)

export default Footer
