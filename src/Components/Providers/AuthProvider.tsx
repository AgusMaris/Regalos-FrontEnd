import { createContext, useContext, useState } from 'react'
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
}

type AuthProviderProps = {
  children: React.ReactNode
}

const userIsAdmin = (email: string, password: string) => email === 'admin@admin.com' && password === 'admin'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
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
        name: 'usuario de prueba',
      }
      console.log('user logged in', user)
      setUser(user)
    }
    console.log(res)
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
