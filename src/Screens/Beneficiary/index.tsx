import { View, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native'

import { BeneficiaryStyle } from './style'
import colors from '../../Assets/colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import Background1 from "../../Components/Backgrounds/Background1"
import { User } from 'parse'
import { useAuth } from '../../Components/Providers/AuthProvider'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

type Props = {
  setAuth: () => void
}

const BeneficiaryScreen = ({ navigation }) => {
  
  const {user} = useAuth()  
  const _onAddBeneficiaryPressed = () => {
    navigation.navigate('AddBeneficiary')
  }


  const _onListBeneficiaryPressed = () => {
    navigation.navigate('ListBeneficiary')
  }

  const _goToVendorTools =()=>{
    navigation.navigate('Home')
  }
  console.log(user?.type)

  return (
    <View  >
      <Background1></Background1>
      <Text style={{color:'white',textAlign: "center", fontWeight: "bold", fontSize: 24,position:'absolute',alignSelf:'center',marginTop:40}}>Hola, {user?.name}</Text>
      <View style={{ flexBasis:'33%', justifyContent:'space-between',height:HEIGHT/2, width:WIDTH, alignSelf:'center',position:'absolute',alignContent:'space-between', marginTop:200}}>
      <View
      >
        <TouchableOpacity onPress={_onAddBeneficiaryPressed} style={{ flexDirection: 'row', alignSelf:'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
            }}
          >
            Agregar Beneficiario
          </Text>

          <AntDesign name="adduser" size={35} />
        </TouchableOpacity>
      </View>

        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={_onListBeneficiaryPressed} style={{ flexDirection: 'row' }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                alignContent: 'center',
              }}
            >
              Lista de Beneficiarios
            </Text>
            <AntDesign name="contacts" size={35} />
            </TouchableOpacity>
            </View>
            {user?.type == "Vendedor" ? (
                  <>
                <View
                          style={{
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                <TouchableOpacity onPress={_goToVendorTools} style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 30,
                    alignSelf: 'center',
                  }}
                >
                  Herramientas de Vendedor
                </Text>
                </TouchableOpacity>
                </View></>):(<><View></View></>)}
        </View>
    </View>
  )
}

export default BeneficiaryScreen
