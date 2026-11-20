import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithStore } from '../../testing/render'
import { createTestStore } from '../../testing/tests-environment'
import { LoginForm } from '../components/LoginForm'

describe('<LoginForm />', () => {
  it('affiche un message d’erreur quand le mot de passe est faux', async () => {
    const user = userEvent.setup()
    const store = createTestStore({
      dependencies: {
        authGateway: {
          login: async () => {
            throw new Error('Email ou mot de passe incorrect')
          },
        },
      },
    })
    renderWithStore(<LoginForm />, store)

    await user.type(screen.getByLabelText('Email'), 'alice@test.fr')
    await user.type(screen.getByLabelText('Mot de passe'), 'mauvais')
    await user.click(screen.getByRole('button', { name: 'Se connecter' }))

    expect(await screen.findByText('Email ou mot de passe incorrect')).toBeInTheDocument()
  })
})
