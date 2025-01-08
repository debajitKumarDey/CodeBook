import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pages: localStorage.getItem('pages') ? JSON.parse(localStorage.getItem('pages')) : [ ]
}

export const bookSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {

    addToPages: (state,action) => {
     const page= action.payload
     state.pages.push(page)
     localStorage.setItem('pages',JSON.stringify(state.pages))
     toast.success('Page Created Sucessfully')
    },
    updateToPages: (state,action) => {
     const page= action.payload
     const index =state.pages.findIndex((item)=>
      item.id === page.id
     )
     if (index >= 0){
      state.pages[index]=page;
      localStorage.setItem('pages',JSON.stringify(state.pages))
      toast.success('Page Updated !')
     }
    },
    resetAllPages: (state, action) => {
     state.pages=[];
     localStorage.removeItem('pages')
    },
    removeFromPages: (state,action)=>{
      const pageId = action.payload
      const index =state.pages.findIndex((item)=>
        item.id === pageId
       )
       if(index>=0){
        state.pages.splice(index,1)
        localStorage.setItem('pages',JSON.stringify(state.pages));
        toast.success('Page Deleted !')
       }

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPages, updateToPages, resetAllPages, removeFromPages} = bookSlice.actions

export default bookSlice.reducer