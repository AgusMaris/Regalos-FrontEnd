import { createContext, useContext, useState } from 'react'
import { Beneficiary } from '../../schemas/Beneficiary'
import createClient from '../../services/Auth'

type User = {
  id: string
  name: string
  email: string
  isAdmin?: boolean
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout?: () => void
  register?: (email: string, password: string) => Promise<void>
  chooseBeneficiary: (beneficiary: Beneficiary) => void
  beneficiary: Beneficiary | null
}

type AuthProviderProps = {
  children: React.ReactNode
}

const userIsAdmin = (email: string, password: string) => email === 'admin@admin.com' && password === 'admin'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [chosenBeneficiary, setChosenBeneficiary] = useState<Beneficiary | null>(null)
  const login = async (email: string, password: string) => {
    if (userIsAdmin(email, password)) {
      setUser({
        email,
        id: 'admin',
        name: 'admin',
        isAdmin: true,
      })
      return
    }
    const res = await createClient.auth.signIn({
      email: email,
      password: password,
    })
    if (res.user !== null) {
      const user = {
        email: res.user.email as string,
        id: res.user.id,
        name: res.user.user_metadata.nombre,
        lastName: res.user.user_metadata.apellido,
        type:res.user.user_metadata.tipo
      }
      console.log('user logged in', user)
      setUser(user)
    }
  }

  const chooseBeneficiary = (beneficiary: Beneficiary) => {
    setChosenBeneficiary(beneficiary)
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        beneficiary: chosenBeneficiary,
        chooseBeneficiary,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
