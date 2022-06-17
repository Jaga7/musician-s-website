import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const url = "/api/v1/questions"

const initialState = {
  showContactForm: false,
  isLoading: false,
  questionItem: { questionText: "", questionID: null },
  questionAnsweredCorrectly: false,
}

export const getQuestion = createAsyncThunk(
  "contactForm/getQuestion",
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url)
      return resp.data.result
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong")
    }
  }
)

export const answerQuestion = createAsyncThunk(
  "contactForm/answerQuestion",
  async (questionAndAnswer, thunkAPI) => {
    try {
      const resp = await axios.post(
        `${url}?question=${questionAndAnswer.question}&answer=${questionAndAnswer.answer}`
      )
      return resp.data.result
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong")
    }
  }
)

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  reducers: {
    toggleShowForm: (state) => {
      state.showContactForm = !state.showContactForm
    },
  },
  extraReducers: {
    [getQuestion.pending]: (state) => {
      state.isLoading = true
    },
    [getQuestion.fulfilled]: (state, action) => {
      state.isLoading = false
      state.questionItem = action.payload
    },
    [getQuestion.rejected]: (state) => {
      state.isLoading = false
    },
    [answerQuestion.pending]: (state) => {
      state.isLoading = true
    },
    [answerQuestion.fulfilled]: (state, action) => {
      state.isLoading = false
      state.questionAnsweredCorrectly = action.payload
    },
    [answerQuestion.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export const { toggleShowForm } = contactFormSlice.actions

export default contactFormSlice.reducer
