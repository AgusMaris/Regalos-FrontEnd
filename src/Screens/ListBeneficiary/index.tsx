import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Background1 from '../../Components/Backgrounds/Background1'
import { Container } from '../../Components/Container'
import { salesFedStyle } from './style'
import axios from 'axios'
import { useAuth } from '../../Components/Providers/AuthProvider'
import { Beneficiary } from '../../schemas/Beneficiary'
import Api from '../../Api'

const API = 'http://192.168.0.3:3000/getbeneficiary'

const ListBeneficiaryScreen = ({ navigation }) => {
  const [beneficiary, setBeneficiary] = React.useState<Beneficiary[]>([])
  const { chooseBeneficiary } = useAuth()

  React.useEffect(() => {
    Api.Beneficiaries.getBeneficiaries().then((response) => {
      if (response) {
        setBeneficiary(response)
        console.log(response)
      }
    })
  }, [])

  const handleChooseBeneficiary = (item: Beneficiary) => {
    chooseBeneficiary(item)
    navigation.navigate('Home')
  }

  const BeneficiaryListItem = ({ beneficiary }: { beneficiary: Beneficiary }) => (
    <TouchableOpacity style={salesFedStyle.listItem} onPress={() => handleChooseBeneficiary(beneficiary)}>
      <Text style={salesFedStyle.listName}>{beneficiary.name}</Text>
      <Text style={salesFedStyle.listName}>{beneficiary.apellido}</Text>
    </TouchableOpacity>
  )

  return (
    <Container>
      <Background1 />
      <View style={{ paddingTop: 110, flex: 1 }}>
        <Text style={salesFedStyle.headerText}>Lista de Beneficiarios</Text>
        <SafeAreaView>
          <FlatList
            data={beneficiary}
            renderItem={({ item }) => <BeneficiaryListItem beneficiary={item} />}
          />
        </SafeAreaView>
      </View>
    </Container>
  )
}

export default ListBeneficiaryScreen
