import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    data: [],
  },
  reducers: {
    addPage: (state, action) => {
      state.data.push(action.payload);
      alert("Cadastrado com sucesso.");
    },
    addTask: (state, action) => {
      state.data.forEach((x, i) => {
        if (i === action.payload.index) {
          x.tasks.push({ description: action.payload.description });
        }
      });

      alert("Tarefa cadastrada");
    },
    editTask: (state, action) => {
        state.data.tasks.forEach((x, i) => {
            if (i === action.payload.index) {
              x.description = action.payload.description
            }
          });
    
          alert("Tarefa cadastrada");
    },
  },
});

export const { addPage, addTask } = pageSlice.actions;
export default pageSlice.reducer;
