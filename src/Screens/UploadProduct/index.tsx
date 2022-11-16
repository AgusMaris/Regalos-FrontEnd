import React, { useRef, useState } from "react"
import { View, Text,  StyleSheet, Dimensions, FlatList, TouchableOpacity } from "react-native"
import colors from "../../Assets/colors"
import Background2 from "../../Components/Backgrounds/Background1"
import { TextInput, Button, Card} from 'react-native-paper'
import CardContent from "react-native-paper/lib/typescript/components/Card/CardContent"
import Api from '../../Api'
import { black } from "react-native-paper/lib/typescript/styles/colors"
import { useAuth } from "../../Components/Providers/AuthProvider"
import { User } from "parse"
import Ionicons from '@expo/vector-icons/Ionicons'





const UploadProductScreen = ({navigation})=>{

    const {user} = useAuth()
    const [prod,setProd] = useState({})
    const [data,setData] = useState([])
    const [label,setLabel] = useState("")
    const inputRef = useRef<React.RefObject<typeof TextInput>>(null)
    const handleUploadGift = ()=>{   
        Api.Gifts.uploadGift(prod,data,user?.id)
    }

    const onBackPress = () => {
        navigation.goBack()
      }
    const handleRemoveData = (name:string)=>{
        setData(data.filter(v=> v!=name))
    }
    const agregarData = (value:string)=>{
        setData([...data,value.slice(0, -1)]) 
        setLabel("")
    }

    const handleLabel = (value:string)=>{
        setLabel(value)
        if(value.endsWith(',') && data.length < 3)
        {
            agregarData(value)
        }
    }

    return(
        <View>
            <Background2></Background2>
            <Text
                style={{
                position: 'absolute',
                right: 25,
                color: '#fff',
                fontSize: 32,
                fontWeight: 'bold',
                top: 40,
                }}
            >
                Cargar Producto
            </Text>
        <TouchableOpacity style={{ position: 'absolute', left: 15, top: 40 }} onPress={onBackPress}>
            <Ionicons name="arrow-back-sharp" size={32} color="#fff" />
        </TouchableOpacity>
    <View >
       <View style={{ width: '80%',
                    height: '75%',
                    backgroundColor: colors.white,
                    elevation: 5,
                    margin: 40,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    borderRadius: 10,
                    top: Dimensions.get('window').height / 5,
                }}>

        <View style={style.inputContainer}>
            <TextInput
                style={style.input}
                label="Nombre"
                returnKeyType="done"
                placeholder={'Nombre'}
                activeUnderlineColor={colors.primary}
                onChangeText={(value)=> setProd({...prod,name:value})}
            />

            <TextInput
                style={style.input}
                label="URL Imagen"
                returnKeyType="done"
                placeholder={'URL Imagen'}
                activeUnderlineColor={colors.primary}
                onChangeText={(value)=> setProd({...prod,image:value})}

            />

            <TextInput
                style={style.input}
                label="Precio"
                returnKeyType="done"
                placeholder={'Precio'}
                keyboardType='number-pad'
                activeUnderlineColor={colors.primary}
                onChangeText={(value)=> setProd({...prod,price:value})}

            />
            <View >
                <TextInput
                    style={style.input}
                    label="Etiqueta"
                    value={label}
                    returnKeyType="done"
                    placeholder={'Deporte,'}
                    activeUnderlineColor={colors.primary}
                    onChangeText={(label) => handleLabel(label)}
                    onSubmitEditing={e => agregarData(e.nativeEvent.text)}
                />

                <View style={{flexDirection:'row'}}>
                        {data.map(v=> (<View key={v} style={{alignItems:"center",flexDirection:"row",flexBasis:'30%',borderRadius:5,borderWidth:1,backgroundColor:colors.primary, marginHorizontal:'1%'}}>
                            <Text style={{maxWidth:'70%',color:'white'}} numberOfLines={1}>{v}</Text>
                            <TouchableOpacity style={{flex:1,alignItems:'flex-end',marginRight:5}} onPress={()=>handleRemoveData(v)}>
                                <Text style={{color:'white'}}>  x</Text>
                            </TouchableOpacity>
                            </View>))}
                </View>
                    
            </View>

          <Button mode="contained" style={style.cardButton} onPress={handleUploadGift}>
            CARGAR PRODUCTO
          </Button>
        </View>
        </View>
        </View>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
    margin: 3,
    height: 45,
    marginVertical:15,
    backgroundColor: '#C0D1CD',
  },
  inputContainer:{
    alignSelf:"center",
    width:260,
    height:'100%',
    justifyContent:"center",
  },
  cardButton: {
    backgroundColor: colors.primary,
    margin: 3,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginTop:30
  }
})

export default UploadProductScreen
