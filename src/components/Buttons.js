import styled from 'styled-components'
import { typeScale } from '../utils'
import { applyStyleModifiers } from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        padding: 16px;
    `,
    // warning: ({props}) => `
    //     background-color: ${props.theme.status.warningColor};
    //     color: ${props.theme.textColorInverted};

    //     $:hover, $:focus {
    //         background-color: ${props.theme.status.warningColorHover};
    //         outline: 3px solid ${props.theme.status.warningColorHover};
    //     }

    //     $:active {
    //         background-color: ${props.theme.status.warningColorActive};
    //     }
    // `,
}


const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 6px;
    min-width:100px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.2s linear, color 0.2s linear;
    outline: none;
    color: ${p => p.theme.textColor};

    &:hover {
        background-color: ${p => p.theme.primaryColorHover};
        color: ${p => p.theme.textColorInverted};
    }

    &:focus {
        background-color: ${p => p.theme.primaryColorHover};
        color: ${p => p.theme.textColorInverted};
        outline: 3px solid ${p => p.theme.primaryColorHover};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${p => p.theme.primaryColorActive};
        border-color: ${p => p.theme.primaryColorActive};
        color: ${p => p.theme.textColorInverted};
    }

    &:disabled {
        background-color: ${p => p.theme.disabled};
        color: ${p => p.theme.textColorInverted};
        user-select: none;
        cursor: not-allowed;
    }
`


export const PrimaryButton = styled(Button)`
    background-color: ${p => p.theme.primaryColor};
    border: 1px solid ${p => p.theme.primaryColor};
    border: none;
    color: white;

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
    background-color: none;
    border: 1px solid ${p => p.theme.primaryColor};
    color: ${p => p.theme.primaryColor};

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${p => p.theme.primaryColor};

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export default PrimaryButton;