import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithStore } from '../../testing/render'
import { createTestStore } from '../../testing/tests-environment'
import { LogoutButton } from '../components/LogoutButton'

const alice = { id: '1', name: 'Alice', email: 'alice@test.fr' }

describe('<LogoutButton />', () => {
  it("n'apparaît pas quand personne n'est connecté", () => {
    renderWithStore(<LogoutButton />)

    expect(screen.queryByRole('button', { name: 'Se déconnecter' })).not.toBeInTheDocument()
  })

  it("déconnecte l'utilisateur au clic", async () => {
    const user = userEvent.setup()
    const store = createTestStore({ initialState: { auth: { user: alice } } })
    renderWithStore(<LogoutButton />, store)

    await user.click(screen.getByRole('button', { name: 'Se déconnecter' }))

    expect(store.getState().auth.user).toBeNull()
  })
})
