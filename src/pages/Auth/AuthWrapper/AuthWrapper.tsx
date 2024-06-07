import { ReactNode } from "react"
import { Content, LogoWrap, Wrapper } from './styles'

import { Logo } from 'assets/icons'
import { LangButtons } from "../LangButtons"

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Wrapper>
            <Content>
                <LogoWrap>
                    <Logo />
                </LogoWrap>
                {children}
            </Content>
            <LangButtons />
        </Wrapper>
    )
}

export default AuthWrapper