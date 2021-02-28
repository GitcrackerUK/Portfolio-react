import JumboSectionHeader from 'components/common/JumboSectionHeader'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import { P, Bold } from 'components/common/typography'
import { boxShadow12, ImgCover } from 'styled.js'
import { SendFormData } from 'components/G-Contact/axiosCreate'
import Button from 'components/common/Button'
import styled from 'styled-components'
import React, { useState } from 'react'
import { SkyScraper } from 'img'

const Wrapper = styled.div`
  background-image: url(${SkyScraper});
  ${ImgCover} // properties for parallax background
  width:100%;
  padding: 1px;
  @media (max-width: 992px) {
    background-attachment: scroll; //property for mobile non-parallax
    width: 100%;
  }
`
const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 100px auto;
  ${boxShadow12}
  padding:10px;
  width: 80%;
  @media (max-width: 992px) {
    width: 95%;
  }
`
const InnerWrapper = styled.div`
  width: 540px;
  margin: auto;
  @media (max-width: 992px) {
    width: 90%;
  }
`
const ContactInfo = styled.div``

const ContactInfoRow = styled.div`
  display: flex;
  @media (max-width: 992px) {
    display: block;
    width: 100%;
  }
  margin: 0 auto 5px auto;
`
const ContactInfoItem = styled.div`
  margin: 0 20px 0px 0px;
`

const Form = styled.form`
  display: block;
  margin: auto;
  width: 100%;
`
const ButtonWrapper = styled.div`
  justify-content: space-between;
  margin: 5px auto;
  display: flex;
  padding: 10px;
  width: 250px;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
  }
`
const StTextField = styled(TextField)`
  margin: 5px 10px !important;
  width: 250px;
  @media (max-width: 992px) {
    width: 90%;
  }
`
const StTextareaAutosize = styled(TextareaAutosize)`
  display: block;
  width: 90%;
  margin: 20px auto !important;
`
export default function Contact() {
  let [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Website: '',
    Company: '',
    Message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  function handleSubmit() {
    SendFormData.post('/', formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    handleClear()
  }

  function handleClear() {
    setFormData({
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      Website: '',
      Company: '',
      Message: '',
    })
  }
  return (
    <Wrapper id="contact">
      <WhiteBox>
        <InnerWrapper>
          <JumboSectionHeader>Contact</JumboSectionHeader>
          <P>
            If you would like to contact me regarding any queries please don't{' '}
            <br /> hesitate and drop me an email or call me directly on my
            mobile. <br /> I'm always more than happy to speak and answer any
            questions.
          </P>
          <hr />
          <ContactInfo>
            <ContactInfoRow>
              <ContactInfoItem>
                <Bold>Email:</Bold>{' '}
              </ContactInfoItem>{' '}
              <ContactInfoItem>p.f.siwek@gmail.com </ContactInfoItem>
            </ContactInfoRow>

            <ContactInfoRow>
              <ContactInfoItem>
                <Bold>Mobile:</Bold>{' '}
              </ContactInfoItem>{' '}
              <ContactInfoItem>07463765514 </ContactInfoItem>
            </ContactInfoRow>

            <ContactInfoRow>
              <ContactInfoItem>
                <Bold>LinkedIn:</Bold>
              </ContactInfoItem>
              <ContactInfoItem>
                <a
                  target="blank"
                  href="http://www.linkedin.com/in/pawel-siwek-78432119b"
                >
                  Profile
                </a>
              </ContactInfoItem>
            </ContactInfoRow>
          </ContactInfo>
          <Form noValidate autoComplete="on">
            <StTextField
              type="text"
              value={formData.FirstName}
              name="FirstName"
              onChange={handleChange}
              required
              id="standard-basic"
              label="First Name"
            />
            <StTextField
              type="text"
              value={formData.LastName}
              name="LastName"
              id="standard-basic"
              label="Last Name"
              onChange={handleChange}
            />
            <StTextField
              type="email"
              value={formData.Email}
              name="Email"
              id="standard-basic"
              label="Email"
              required
              onChange={handleChange}
            />
            <StTextField
              type="number"
              value={formData.Phone}
              name="Phone"
              id="standard-basic"
              label="Phone"
              onChange={handleChange}
            />
            <StTextField
              type="text"
              value={formData.Website}
              name="Website"
              id="standard-basic"
              label="Website"
              onChange={handleChange}
            />
            <StTextField
              type="text"
              value={formData.Company}
              name="Company"
              id="standard-basic"
              label="Company"
              onChange={handleChange}
            />
            <StTextareaAutosize
              type="text"
              value={formData.Message}
              name="Message"
              aria-label="minimum height"
              rowsMin={4}
              id="outlined-basic"
              placeholder="Message"
              variant="outlined"
              required
              onChange={handleChange}
            />
            <ButtonWrapper>
              <Button contact onClick={handleSubmit} value="Send">
                Send
              </Button>
              <Button contact onClick={handleClear}>
                Clear
              </Button>
            </ButtonWrapper>
          </Form>
        </InnerWrapper>
      </WhiteBox>
    </Wrapper>
  )
}
