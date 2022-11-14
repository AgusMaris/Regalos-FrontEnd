import { Alert, Modal, SafeAreaView, View, StyleSheet, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { Card, TextInput, Button } from 'react-native-paper'
import React, { useState } from 'react'
import { registerStyle } from './style'
import { emailValidator, passwordValidator, confirmpasswordValidator } from '../../utils/register'
import colors from '../../Assets/colors'
import { SelectList } from 'react-native-dropdown-select-list'
import supabase from '../../services/Auth'
import { useAuth } from '../../Components/Providers/AuthProvider'


type Props = {
  setAuth: () => void
}

const DATA=["Vendedor","Buscador","Administrador"]
const HEIGHT = Dimensions.get('window').height

const RegisterScreen = ({ setAuth, navigation }: Props) => {

  const [user,setUser] = useState({
    email:'',
    password:'',
    nombre:'',
    apellido:'',
    tipo:''
  })

  const { login } = useAuth()
  const [modal,setModal] = useState(false)
  const [modalType, setModalType] = useState("")
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmpassword, setConfirmPassword] = useState({ value: '', error: '' })
  const _onRegisterPressed = async () => {
    console.log(user)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const confirmpasswordError = confirmpasswordValidator(confirmpassword.value, password.value)
    const { nuser, session, error } = await supabase.auth.signUp(
      {
        email: user.email,
        password: user.password,
      },
      {
        data: { 
          nombre:user.nombre,
          apellido:user.apellido,
          tipo:user.tipo
        }
      }
      )
      if(session != null){
        try {
          login(user.email, user.password)
          console.log(email,password)
        } catch (error) {
          console.error(error)
        }
      }
      }
  

  const handleModalType = async (type:string)=>{
    setModal(!modal)
    setUser({...user,tipo:type})
    console.log(type)
  }
  return (
    <SafeAreaView style={registerStyle.content}>
      <View style={registerStyle.view}>
        <Card.Content style={{ justifyContent: 'space-around', flex: 1 }}>
          <Card.Title
            title="Registro"
            titleStyle={{ color: colors.primary, fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}
          ></Card.Title>

        <TextInput
            style={registerStyle.input}
            label="Nombre"
            returnKeyType="done"
            onChangeText={(text) =>setUser({...user,nombre:text})}
            activeUnderlineColor={colors.primary}
          />

        <TextInput
            style={registerStyle.input}
            label="Apellido"
            returnKeyType="done"
            onChangeText={(text) => setUser({...user,apellido:text})}
            error={!!confirmpassword.error}
            activeUnderlineColor={colors.primary}
          />

          <TextInput
            style={registerStyle.input}
            label="Email"
            returnKeyType="next"
            placeholder={'Email'}
            onChangeText={(text) => setUser({...user,email:text})}
            error={!!email.error}
            autoCapitalize={'none'}
            activeUnderlineColor={colors.primary}
          />
          <TextInput
            style={registerStyle.input}
            label="Contraseña"
            returnKeyType="done"
            placeholder={'Contraseña'}
            secureTextEntry
            onChangeText={(text) => setUser({ ...user,password:text})}
            error={!!password.error}
            activeUnderlineColor={colors.primary}
          />

          <Button mode="contained" onPress={()=>setModal(!modal)} style={registerStyle.cardButton2}>
            <Text style={{color:colors.primary}}>TIPO DE USUARIO</Text>
          </Button>
          <Modal
            animationType="fade"
            style={{ flex: 1 }}
            visible={modal}
            transparent
            >
            <View style={style.itemContainer}>
              <View style={{width:200, marginTop:HEIGHT/3, alignSelf:'center'}}>
              <FlatList
              data={DATA}
              keyExtractor={item => item}
              renderItem={({item}) => (
              <View>
                <TouchableOpacity onPress={()=>handleModalType(item)}>
                  <View style={{ backgroundColor: "white" , padding:20,alignItems:'center',borderWidth:0.2}}>
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>              
              </View>
              )}
              >
              </FlatList>
              </View>
            </View>
          </Modal>
          <Button mode="contained" onPress={_onRegisterPressed} style={registerStyle.cardButton}>
            Registrarse
          </Button>
        </Card.Content>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  itemContainer:{
    backgroundColor: '#00000077',
    flex:1

  }
});

export default RegisterScreen
