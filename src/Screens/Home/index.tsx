import { View, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { HomeScreenProps } from './types'
import colors from '../../Assets/colors'
import { white } from 'react-native-paper/lib/typescript/styles/colors'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width


type Props = {
  setAuth: () => void
}


const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const results = {}
  const findRandom = ()=>{
    navigation.navigate('GiftResults', { score: results })
  }
  return (
    <View >
     <Text style={{fontSize: 30, fontWeight: 'bold',color: colors.primary,marginBottom: 10,alignSelf:'center',marginTop:20}}>Busquemos tu Regalo!😉</Text>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <View style={{elevation:2,padding:10, borderRadius:1,margin:20}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Questions')}>
              <Image source={require('./utils/questionmode.png')} style={{width:120,height:120}}></Image>
              <Text style={{alignSelf:'center'}}>Llenar Formulario</Text>
            </TouchableOpacity>
          </View>

        <View style={{elevation:2,padding:10, borderRadius:1,margin:20}}>
          <TouchableOpacity onPress={()=>{ findRandom()}}>
              <Image source={require('./utils/fastmode.png')} style={{width:120,height:120}}></Image>
              <Text style={{alignSelf:'center'}}>Regalo Aleatorio</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <View style={{elevation:2,padding:10, borderRadius:1,margin:20}}>
            <TouchableOpacity onPress={()=>{ findRandom()}}>
                <Image source={require('./utils/fastmode.png')} style={{width:120,height:120}}></Image>
                <Text style={{alignSelf:'center'}}>Cargar Productos</Text>
            </TouchableOpacity>
          </View>

          <View style={{elevation:2,padding:10, borderRadius:1,margin:20}}>
            <TouchableOpacity onPress={()=>{ findRandom()}}>
                <Image source={require('./utils/fastmode.png')} style={{width:120,height:120}}></Image>
                <Text style={{alignSelf:'center'}}>Cargar Productos</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={{elevation:2,padding:10, borderRadius:1,margin:20,alignSelf:'center'}}>
            <TouchableOpacity onPress={()=>{ findRandom()}}>
                <Image source={require('./utils/product.png')} style={{width:100,height:100}}></Image>
                <Text style={{alignSelf:'center'}}>Cargar Productos</Text>
            </TouchableOpacity>
          </View>

    </View>
  )
}

export default HomeScreen
