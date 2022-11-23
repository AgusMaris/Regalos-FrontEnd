import { render } from '@testing-library/react-native'
import AuthProvider, { AuthContext } from './src/Components/Providers/AuthProvider'

const AllTheProviders = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        beneficiary: { name: 'agustin', apellido: 'agustin', id: 1 },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
