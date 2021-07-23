/** @jsxImportSource @emotion/react */

import Layout from 'components/Layout/Layout'
import References from 'components/SelectYourRegion/Card/References/References'
import Resume from 'components/SelectYourRegion/Card/Resume/Resume'
import {
  Article,
  Circle,
  ContainerForm,
  Info,
  Text,
  TableGrid,
  Tbody,
  Button as ButtonStyle,
  Row,
  Td,
} from 'components/SelectYourRegion/styles'
import Button from 'components/shared/Button'
import Flexbox from 'components/shared/Flexbox'
import Input from 'components/shared/Input'
import Select from 'components/shared/Select'
import { colors } from 'utils/constants'
import { appointments, week_days } from 'components/SelectYourRegion/mocks'
import Checkbox from 'components/shared/Checkbox'

const image = {
  src: '/images/pages/RequestAbaServices/req_services_banner.png',
  alt: 'eligibility banner',
}

const text = {
  title: 'Request Team PBS Services',
  description:
    'Please complete the fields below and we will be in touch within two business days.',
}

const metaDesc = {
  name: 'description',
  content:
    'Need our help? Select your region and get in touch with an ABA provider near you. Take advantage of an interactive map on our website!',
}

// const style = {
//   processTitle: {
//     color: colors.white,
//     fontSize: 35,
//     marginTop: '8rem',
//   },
// }

const states = [
  'FL',
  'AK',
  'BS',
  'RD',
  'WE',
  'DA',
  'SE',
  'BS',
  'MA',
  'AE',
  'RW',
  'ED',
]
const counties = [
  'Select',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
  'lorem',
]
const status = [
  'Single',
  'Married',
  'Divorced',
]

const RequestAbaServices = () => (
  <Layout
    title='Request Team PBS Services | PBS Corporation'
    meta={metaDesc}
    image={image}
    text={text}
    height='500px'
  >
    <Flexbox padding='5rem 0' col background={colors.blueMild}>
      <div className={`flex bg-white justify-between w-3/5 relative p-10 mb-2`}>
        <Circle>1</Circle>
        <Info>
          <h3 className='font-bold text-2xl pb-3'>Client Information</h3>
          <Text>This is the person who will be receiving services</Text>
        </Info>
        <ContainerForm>
          <Flexbox col gap='0.5rem' items='flex-center'>
            <Input label='First Name' id='first_name' />
            <Input label='Middle Name' id='middle_name' />
            <Input label='Last Name' id='last_name' />
            <Input
              label='Date of Birth'
              id='date_birth'
              half
              second
              type='date'
            />
            <Input label='Gender' id='gender' />
            <Input label='Referred By' id='referred' />
          </Flexbox>
        </ContainerForm>
      </div>
      <div className={`flex bg-white justify-between w-3/5 relative p-10 mb-2`}>
        <Circle>2</Circle>
        <Info>
          <h3 className='font-bold text-2xl pb-3'>
            Parent/Guardian Information
          </h3>
          <Text>Parent details</Text>
        </Info>
        <ContainerForm>
          <Flexbox col gap='0.5rem' items='flex-center'>
            <Input label='Email' id='email' />
            <Input label='First Name' id='first_name' />
            <Input label='Middle Name' id='middle_name' />
            <Input label='Last Name' id='last_name' />
            <Input label='Date of Birth' id='date_birth' half type='date' />
            <div css={{ height: '20px' }} />
            <Input label='Street Address' id='street' />
            <Flexbox margin='0 0 0 67px' justify='center'>
              <Input label='City' id='city' half />
              <div css={{ width: '40%', margin: '0 67px 0 0' }}>
                <Input label='ZIP' id='zip' placeholder='XXXXX' />
              </div>
            </Flexbox>
            <Flexbox justify='flex-start'>
              <p
                css={{
                  color: colors.textGray,
                  width: '40%',
                  whiteSpace: 'nowrap',
                  textAlign: 'right',
                  marginLeft: -83,
                }}
              >
                State
              </p>
              <Select id='states' half list={states} />
            </Flexbox>
            <Flexbox justify='flex-start'>
              <p
                css={{
                  color: colors.textGray,
                  width: '40%',
                  whiteSpace: 'nowrap',
                  textAlign: 'right',
                  marginLeft: -5,
                }}
              >
                County
              </p>
              <Select id='counties' list={counties} />
            </Flexbox>
            <div css={{ height: '20px' }} />
            <Input
              label='Home Phone'
              id='home_phone'
              half
              placeholder='(___)___ ____'
            />
            <Input
              label='Work Phone'
              id='work_phone'
              half
              placeholder='(___)___ ____'
            />
            <Input
              label='Mobile Phone'
              id='mobile_phone'
              half
              placeholder='(___)___ ____'
            />
            <p
              css={{
                margin: '1rem 0',
                color: colors.textGray,
                textAlign: 'justify',
                fontSize: 14,
              }}
            >
              By providing your mobile phone number, you agree to opt-in to
              receive{' '}
              <a css={{ color: colors.lightBlue, cursor: 'pointer' }}>
                PBS Notifications
              </a>{' '}
              text messages. Message frequency varies per user. Message and data
              rates may apply. Text STOP to opt out or HELP for help.
            </p>
            <Flexbox justify='' items=''>
              <p
                css={{
                  color: colors.textGray,
                  width: '40%',
                  whiteSpace: 'nowrap',
                  textAlign: 'right',
                  marginLeft: -5,
                }}
              >
                Marital Status
              </p>
              <Flexbox col items=''>
                <Select id='status' list={status} />
                <p
                  css={{
                    margin: '.2rem 0 0 2rem',
                    color: colors.textGray,
                    fontSize: 12,
                  }}
                >
                  Used only for internal communications & billing purpose
                </p>
              </Flexbox>
            </Flexbox>
            <div css={{ width: 420, margin: '1rem 0 1rem auto' }}>
              <Button width='100%' inverse>+ Add Parent/Caregiver</Button>
            </div>
          </Flexbox>
        </ContainerForm>
      </div>
      <div className='flex flex-col bg-white justify-between w-3/5 relative p-10 mb-2'>
        <Circle>3</Circle>
        <Info>
          <h3 className='font-bold text-2xl pb-3'>Your Availability</h3>
          <Text>What days and times would work best for you?</Text>
        </Info>
        <ContainerForm>
        <Flexbox col padding='2.5rem 0 0 0'>    
        <Article className='flex justify-between items-center gap-4 p-2'>
              <p css={{ color: colors.darkGray }} className='text-sm'>
                Click to select date & time. Click & drag to select multiple dates &
                times. Click day to select all times available.
              </p>
              <div className='flex gap-2'>
                <ButtonStyle gray>Check all</ButtonStyle>
                <ButtonStyle gray>Clear</ButtonStyle>
              </div>
            </Article>      
          <TableGrid css={{  }}>
            <thead>
              <tr className='flex border'>
                {week_days.map((day) => (
                  <td className='ml-4 font-bold w-full'>{day}</td>
                ))}
              </tr>
            </thead>
            <Tbody>
              {appointments.map((item) => (
                <Row>
                  <Td>{item}</Td>
                  <Td />
                  <Td />
                  <Td />
                  <Td />
                  <Td />
                  <Td />
                  <Td />
                </Row>
              ))}
            </Tbody>
            <Article css={{ minWidth: '50vw' }} className='flex justify-between items-center gap-4 p-2'>
              <p className='text-sm'>
                Tutorial: <br />
                Click once to select/unselect box. <br />
                Click and drag to select more box at once. <br />
                Click day to select all times available <br />
              </p>
            </Article>
          </TableGrid>
        </Flexbox>
        </ContainerForm>
      </div>
      <div className={`flex bg-white justify-between w-3/5 relative p-10 mb-2`}>
        <Circle>4</Circle>
        <Info>
          <h3 className='font-bold text-2xl pb-3'>Payment Source</h3>
          <Text>How would you like to pay for services?</Text>
        </Info>
        <ContainerForm>
          <Checkbox
            id='permission'
            label='By clicking this box you are giving PBS Corp permission to use or disclose your protected health information (PHI) for treatment, payment and health care operations purposes.'
          />
        </ContainerForm>
      </div>
      <div className={`flex bg-white justify-between w-3/5 relative p-10 mb-2`}>
        <Circle>5</Circle>
        <Info>
          <h3 className='font-bold text-2xl pb-3'>Diagnosis</h3>
          <Text>Upload your diagnosis images</Text>
        </Info>
        <ContainerForm>
          <Resume />
        </ContainerForm>
      </div>
      <div className={`flex bg-white justify-between w-3/5 relative p-10 mb-2`}>
        <Circle>6</Circle>
        <Info>
          <h3 className='font-bold text-2xl pb-3'>Language</h3>
          <Text>Primary language spoken</Text>
        </Info>
        <ContainerForm>
          <References />
        </ContainerForm>
      </div>
      <div css={{ height: '76px', '& button': { height: '100%', fontSize: '18px' } }}>
        <Button type='submit'>Submit Service Request Application</Button>
      </div>
    </Flexbox>
  </Layout>
)

export default RequestAbaServices
