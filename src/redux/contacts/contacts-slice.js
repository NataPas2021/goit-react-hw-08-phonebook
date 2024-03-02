import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, fetchContacts, addContact } from "./contacts-operations";
import { pending, rejected } from "shared/functions/redux";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
      builder
       .addCase(fetchContacts.pending, pending)
       .addCase(fetchContacts.fulfilled, (state, {payload}) => ({...state, isLoading: false, items: payload}))

       .addCase(addContact.pending, pending)
       .addCase(addContact.fulfilled, (state, {payload}) => ({...state, isLoading: false, items: [...state.items, payload]}))
       .addCase(fetchContacts.rejected, rejected)

       .addCase(deleteContact.pending, pending)
       .addCase(deleteContact.fulfilled, (state, {payload}) => ({...state, isLoading: false, items: state.items.filter((item) => item.id !== payload)}))
       .addCase(deleteContact.rejected, rejected)
    }
  })

export default contactsSlice.reducer;