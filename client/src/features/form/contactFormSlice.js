import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const url = "/api/v1/questions"

const initialState = {
  showContactForm: false,
  isLoading: false,
  questionItem: { questionText: "", questionID: null },
}

export const getQuestion = createAsyncThunk(
  "contactForm/getQuestion",
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url)
      console.log("resp", resp)
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
      console.log("ACTION", action)
      state.isLoading = false
      console.log("PAYLOAD", action.payload)
      state.questionItem = action.payload
    },
    [getQuestion.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

// console.log(contactFormSlice)

export const { toggleShowForm } = contactFormSlice.actions

export default contactFormSlice.reducer
