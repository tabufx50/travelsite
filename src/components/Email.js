import React from 'react'
import styled from 'styled-components'
import EmailBg from '../assets/images/email-2.jpg'
import {Button} from './Button'

const Email = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>Get Access to Exclusive Offers </h1>
                <p>Sign up for our newsletter below to get $100 off your first trip!</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your email" id="email" />
                        </label>
                        <Button>Sign Up</Button>
                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
background: linear-gradient(
180deg, 
rgba(0,0,0,0.5) 0%, 
rgba(0,0,0,0.5) 35%, 
rgba(0,0,0,0.1) 100%
), url(${EmailBg}) no-repeat center;
`
const EmailContent = styled.div`

`
const FormWrap = styled.div`

`
