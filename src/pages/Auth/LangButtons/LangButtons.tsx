import { useState } from 'react'
import { LinkButton, Wrapper } from './styles'

export const LangButtons = () => {
    const [active, setActive] = useState("ru");

    return (
        <Wrapper>
            <LinkButton variant="text" className={active === "ru" ? "active" : ""}>RU </LinkButton>
            <LinkButton variant="text" className={active === "en" ? "active" : ""}>EN </LinkButton>
        </Wrapper>
    )
}

export default LangButtons