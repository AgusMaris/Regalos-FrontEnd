import { createContext, useContext, useState } from 'react'
import createClient from '../../services/Auth'

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout?: () => void
  register?: (email: string, password: string) => Promise<void>
}

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const login = async (email: string, password: string) => {
    const res = await createClient.auth.signIn({
      email: email,
      password: password,
    })
    if (res.user !== null) {
      const user = {
        email: res.user.email as string,
        id: res.user.id,
        name: 'usuario de prueba',
      }
      console.log('user logged in', user)
      setUser(user)
    }
  }
  return (
    <AuthContext.Provider
      value={{
        login,
        user,
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
