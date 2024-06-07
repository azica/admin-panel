import { Button } from 'components/FormElements'
import { Description, Title, Wrapper } from './style'

export const Referral = () => {
    return (
        <Wrapper>
            <Title variant='h6'>
                Учитесь бесплатно
            </Title>
            <Description>
                Приводите друзей с детьми заниматься в Sirius Future
                и получайте подарки!
            </Description>
            <Button variant="contained" color="info" size="small">
                Узнать
            </Button>
        </Wrapper>
    )
}