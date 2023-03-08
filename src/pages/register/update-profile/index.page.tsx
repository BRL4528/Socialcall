import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextArea } from '@ignite-ui/react'
import { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Container, Header } from '../styles'
import { FormAnnotation, ProfileBox } from './styles'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateFormData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateProfileSchema),
  })

  async function handleUpdateProfile(data: UpdateFormData) {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>

        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          esditar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text size="sm">Foto de perfil</Text>
        </label>

        <label>
          <Text size="sm">Sobre você</Text>
          <TextArea {...register('bio')} />
          <FormAnnotation size="sm">
            Fale um pouco sobre você. Isto será exibido em sua pagina pessoal.
          </FormAnnotation>
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finalizar
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
