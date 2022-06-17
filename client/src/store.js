import { configureStore } from "@reduxjs/toolkit"
import contactFormReducer from "./features/form/contactFormSlice"

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
  },
})
