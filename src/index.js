import React from 'react'
import ReactDOM from 'react-dom'
import {PrimaryButton, SecondaryButton, TertiaryButton, SignUpModal} from './components'
import {GlobalStyle} from './utils'
import {ThemeProvider} from 'styled-components'
import {defaultTheme, darkTheme} from './utils'

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)
    console.log({showModal})
    return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <div style={{
            background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
        }}>
            <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>Change Theme</PrimaryButton>
            <PrimaryButton onClick={() => setShowModal(!showModal)}>Show Modal</PrimaryButton>
            <div>
                <h2>Primary Buttons</h2>
                <PrimaryButton>Primary Button</PrimaryButton>
                <PrimaryButton modifiers={['small']}>Primary Button</PrimaryButton>
                <PrimaryButton modifiers={['large']}>Primary Button</PrimaryButton>
                <PrimaryButton disabled>Primary Button</PrimaryButton>
            </div>
            <div>
                <h2>Secondary Buttons</h2>
                <SecondaryButton>Secondary Button</SecondaryButton>
                <SecondaryButton modifiers={['small']}>Secondary Button</SecondaryButton>
                <SecondaryButton modifiers={['large']}>Secondary Button</SecondaryButton>
                <SecondaryButton disabled>Secondary Button</SecondaryButton>
            </div>
            <div>
            <h2>Tertiary Buttons</h2>
                <TertiaryButton>Tertiary Button</TertiaryButton>
                <TertiaryButton disabled>Tertiary Button</TertiaryButton>
            </div>

            <hr />
            <SignUpModal show={showModal} onClose={setShowModal} />
        </div>
        <GlobalStyle />
    </ThemeProvider>
)
    }

ReactDOM.render(<App />, document.querySelector('#root'))