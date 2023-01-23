import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'

import { ArrowRight } from 'phosphor-react'

import { Header, Container } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function Connet() {
  // async function handleRegister(data: RegisterFormData) {

  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>

        <Text>
          Conecte o seu clanedário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
