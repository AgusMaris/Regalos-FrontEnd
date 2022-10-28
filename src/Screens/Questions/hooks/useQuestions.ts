import { Question, Result } from '../../../schemas/Question'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useReducer } from 'react'
import Questions from '../MockedQuestions.json'
const questionsData = Questions.data

type QuestionsState = {
  questions: Question[]
  currentQuestion: number
  results: Result[]
}

type QuestionsActions =
  | {
      type: 'previousQuestion'
    }
  | {
      type: 'addResult'
      payload: {
        answerId: string
      }
    }
  | {
      type: 'reset'
    }

const QuestionsReducer = (state: QuestionsState, action: QuestionsActions): QuestionsState => {
  switch (action.type) {
    case 'previousQuestion':
      return {
        ...state,
        currentQuestion: state.currentQuestion - 1,
      }
    case 'addResult':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        results: [...state.results, { ...action.payload, id: uuidv4() }],
      }
    case 'reset':
      return {
        ...state,
        currentQuestion: 0,
        results: [],
      }
    default:
      return state
  }
}

export default function useQuestions() {
  const [state, dispatch] = useReducer(QuestionsReducer, {
    questions: questionsData,
    currentQuestion: 0,
    results: [],
  })

  useEffect(() => {
    //Initial fetch
  }, [])

  const resetQuestions = () => {
    dispatch({ type: 'reset' })
  }

  const addResult = (answerId: string) => {
    dispatch({ type: 'addResult', payload: { answerId } })
  }

  return {
    resetQuestions,
    addResult,
    questions: state.questions,
    currentQuestion: state.currentQuestion,
  }
}
