import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Container } from '../../Components/Container'
import Background2 from '../../Components/Backgrounds/Background2'
import { StatsScreenProps, TagsCountState } from './types'
import { PieChart } from 'react-native-chart-kit'
import PieChartSkeleton from './components/PieChartSkeleton/PieChartSkeleton'
import useTagsStats from './hooks/useTagsStats'
import colors from '../../Assets/colors'

type ChartData = {
  name: string
  value: number
  color: string
  legendFontColor: string
  legendFontSize: number
}

const colorsArr = ['#DB2955', '#6200B3', '#9F86C0', '#2C8C99', '#42D9C8']

let data = [
  {
    name: 'videojuegos',
    value: 50,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'deportes',
    value: 50,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'música',
    value: 25,
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
] as Array<Omit<ChartData, 'color'>>

data = data.map((_, index) => {
  return {
    ..._,
    color: colorsArr[index % colorsArr.length],
  }
})

const screenWidth = Dimensions.get('window').width
const chartConfig = {
  color: (opacity = 1) => `rgba(255, 255, 146, ${opacity})`,
}
const StatsScreen = (props: StatsScreenProps) => {
  const { tagsStats } = useTagsStats()
  const mappedData = !tagsStats.data
    ? []
    : Object.entries(tagsStats.data).map(([key, value], index) => {
        return {
          name: key,
          value,
          color: colorsArr[index % colorsArr.length],
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        }
      })

  return (
    <Container>
      <Background2 />
      <View style={{ position: 'absolute', right: 25, top: 40 }}>
        <Text style={{ color: colors.white, fontSize: 25, fontWeight: '800' }}>Estadísticas</Text>
      </View>
      <View style={{ marginTop: 200 }}>
        <Text style={{ color: colors.primary, fontSize: 25, textAlign: 'center', fontWeight: '700' }}>
          Porcentaje de etiquetas presentes en regalos comprados
        </Text>
        {tagsStats.isLoading && <PieChartSkeleton />}
        {tagsStats.data && (
          <PieChart
            data={mappedData}
            width={screenWidth}
            height={260}
            chartConfig={chartConfig}
            accessor={'value'}
            backgroundColor={'transparent'}
            paddingLeft={'0'}
          />
        )}
      </View>
    </Container>
  )
}

export default StatsScreen
