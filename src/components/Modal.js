import React from 'react'
import styled from 'styled-components'

import {useSpring} from 'react-spring'

import {typeScale} from '../utils'
import { animated } from 'react-spring'

const ModalContainer = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background-color: ${p => p.theme.formElementBackground};
    color: ${p => p.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
`

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`

const CloseIconWrapper = styled.button`
    width: 100%;
    height: 100%;
`

const CloseIcon = () => {
    return (
        <CloseIconWrapper>
            X
        </CloseIconWrapper>
    )
}

export const SignUpModal = ({show, onClose}) => {
    console.log({show})
    const animation = useSpring({
        opacity: show ? 1 : 0,
        transform: show ? `translateY(0)` : `translateY(-100%)`,
    })
    return (
        <animated.div style={animation}>
            <ModalContainer>
                <CloseIcon />
                <img src="https://placehold.it/400x400" alt="Sign up for an account" aria-hidden="true" />
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Click here to get started</SignUpText>
            </ModalContainer>
        </animated.div>
    )
}