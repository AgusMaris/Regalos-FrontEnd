import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Container } from '../../Components/Container'
import Background2 from '../../Components/Backgrounds/Background2'
import { StatsScreenProps, TagsCountState } from './types'
import { PieChart } from 'react-native-chart-kit'
import PieChartSkeleton from './components/PieChartSkeleton/PieChartSkeleton'
import useTagsStats from './hooks/useTagsStats'
import colors from '../../Assets/colors'
import { Button } from '../../Components/Buttons'
import { useAuth } from '../../Components/Providers/AuthProvider'
import Background1 from '../../Components/Backgrounds/Background1'
import { capitalize } from '../../utils/functions'

type ChartData = {
  name: string
  value: number
  color: string
  legendFontColor: string
  legendFontSize: number
}

const colorsArr = ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087', '#f95d6a', '#ff7c43', '#ffa600']

let data = [
  {
    name: 'videojuegos',
    value: 50,
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  {
    name: 'deportes',
    value: 50,
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  },
  {
    name: 'música',
    value: 25,
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
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
  propsForLabels: {
    fontSize: 24,
  },
  propsForVerticalLabels: {
    fontSize: 24,
  },
  propsForHorizontalLabels: {
    fontSize: 24,
  },
}
const StatsScreen = (props: StatsScreenProps) => {
  const { tagsStats } = useTagsStats()
  const [limit, setLimit] = useState(7)

  const mappedData = !tagsStats.data
    ? []
    : Object.entries(tagsStats.data)
        .map(([key, value], index) => {
          return {
            name: key,
            value,
            color: colorsArr[index % colorsArr.length],
            legendFontColor: '#7F7F7F',
          }
        })
        .slice(0, limit + 1)
        .map((_, index) => {
          if (index === limit) {
            const value = Object.entries(tagsStats.data)
              .slice(limit + 1)
              .reduce((acc, [key, val]) => acc + val, 0)
            console.log(value)

            return {
              ..._,
              name: 'Otros',
              value,
            }
          }
          return _
        })

  const handleViewMore = () => {
    setLimit((prevLimit) => prevLimit + 1)
  }

  const getPercentage = (value: number) => {
    const total = Object.values(tagsStats.data).reduce((acc, val) => acc + val, 0)
    return (value / total) * 100
  }

  return (
    <Container>
      <Background1 />
      <View style={{ position: 'absolute', right: 25, top: 40 }}>
        <Text style={{ color: colors.white, fontSize: 25, fontWeight: '800' }}>Estadísticas</Text>
      </View>
      <View style={{ marginTop: '40%' }}>
        <Text style={{ color: colors.primary, fontSize: 25, textAlign: 'center', fontWeight: '700' }}>
          Porcentaje de etiquetas presentes en regalos comprados
        </Text>
        {tagsStats.isLoading && <PieChartSkeleton />}
        {tagsStats.data && (
          <PieChart
            data={mappedData}
            width={screenWidth}
            height={300}
            chartConfig={chartConfig}
            accessor={'value'}
            backgroundColor={'transparent'}
            paddingLeft={'75'}
            hasLegend={false}
          />
        )}
      </View>
      <View>
        {mappedData.map((d) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <View
              style={{ width: 15, height: 15, backgroundColor: d.color, borderRadius: 100, marginRight: 10 }}
            />
            <Text>
              {capitalize(d.name)} {getPercentage(d.value).toFixed(2)}%
            </Text>
          </View>
        ))}
      </View>
    </Container>
  )
}

export default StatsScreen
