import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderWithStore } from '../../testing/render'
import { createTestStore } from '../../testing/tests-environment'
import { ProfilePage } from '../components/ProfilePage'

const alice = { id: '1', name: 'Alice', email: 'alice@test.fr' }

describe('<ProfilePage />', () => {
  it('met à jour le profil et affiche une confirmation', async () => {
    const user = userEvent.setup()
    // alice est déjà connectée
    const store = createTestStore({
      initialState: { auth: { user: alice } },
      dependencies: { profileGateway: { updateProfile: async (updated) => updated } },
    })
    renderWithStore(<ProfilePage />, store)

    const nameField = screen.getByLabelText('Nom')
    await user.clear(nameField)
    await user.type(nameField, 'Alice Martin')
    await user.click(screen.getByRole('button', { name: 'Enregistrer' }))

    expect(await screen.findByText('Profil mis à jour')).toBeInTheDocument()
    expect(store.getState().auth.user?.name).toBe('Alice Martin')
  })
})
