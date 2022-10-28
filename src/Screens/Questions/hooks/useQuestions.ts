import { Question, Results } from '../../../schemas/Question'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useReducer } from 'react'
import Questions from '../MockedQuestions.json'
import Api from '../../../Api'
const questionsData = Questions.data

type QuestionsState = {
  questions?: Question[]
  currentQuestion: number
  results: Results
  isLoading: boolean
}

type QuestionsActions =
  | { type: 'setQuestionsLoading' }
  | { type: 'setQuestions'; payload: Question[] }
  | {
      type: 'previousQuestion'
    }
  | {
      type: 'addResult'
      payload: {
        tags: string[]
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
      const currentResults = state.results
      action.payload.tags.forEach((tag) => {
        if (currentResults[tag]) {
          currentResults[tag] = currentResults[tag] + 1
        } else {
          currentResults[tag] = 1
        }
      })

      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        results: currentResults,
      }
    case 'reset':
      return {
        ...state,
        currentQuestion: 0,
        results: {},
      }
    case 'setQuestionsLoading':
      return {
        ...state,
        isLoading: true,
        questions: [],
      }
    case 'setQuestions':
      return {
        ...state,
        isLoading: false,
        questions: action.payload,
      }
    default:
      return state
  }
}

export default function useQuestions() {
  const [state, dispatch] = useReducer(QuestionsReducer, {
    questions: questionsData as Question[],
    isLoading: false,
    currentQuestion: 0,
    results: {},
  })

  useEffect(() => {
    //Initial fetch
    dispatch({ type: 'setQuestionsLoading' })
    Api.Questions.getQuestions().then((questions) => {
      if (questions) {
        console.log(questions)
        dispatch({ type: 'setQuestions', payload: questions })
      }
    })
  }, [])

  const resetQuestions = () => {
    dispatch({ type: 'reset' })
  }

  const addResult = (tags: string[]) => {
    dispatch({ type: 'addResult', payload: { tags } })
  }

  const submitQuestions = () => {
    Api.Gifts.getGifts('1', state.results)
  }

  return {
    resetQuestions,
    addResult,
    submitQuestions,
    isLoading: state.isLoading,
    questions: state.questions,
    results: state.results,
    currentQuestion: state.currentQuestion,
  }
}
