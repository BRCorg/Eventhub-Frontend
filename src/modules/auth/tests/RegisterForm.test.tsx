import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithStore } from '../../testing/render'
import { RegisterForm } from '../components/RegisterForm'

describe('<RegisterForm />', () => {
  it("n'active le bouton S'inscrire que quand le formulaire est bien rempli", async () => {
    const user = userEvent.setup()
    renderWithStore(<RegisterForm />)
    const button = screen.getByRole('button', { name: "S'inscrire" })

    expect(button).toBeDisabled()

    await user.type(screen.getByLabelText('Nom'), 'Bob')
    await user.type(screen.getByLabelText('Email'), 'bob@test.fr')
    await user.type(screen.getByLabelText('Mot de passe'), 'Motdepasse1!')

    expect(button).toBeEnabled()
  })
})
