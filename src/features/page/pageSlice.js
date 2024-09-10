import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    data: [],
  },
  reducers: {
    // Manipulação das páginas
    addPage: (state, action) => {
      state.data.push(action.payload);
      alert("Cadastrado com sucesso.");
    },
    deletePage: (state, action) => {
      state.data.forEach((x, i) => {
        if (action.payload === i) {
          state.data.splice(i, 1);
        }
      })
    },

    // Manipulação das tarefas
    addTask: (state, action) => {
      state.data.forEach((x, i) => {
        if (i === action.payload.index) {
          x.tasks.push({ description: action.payload.description });
        }
      });

      alert("Tarefa cadastrada");
    },
    editTask: (state, action) => {
      state.data.forEach((x) => {
        x.tasks.forEach((e, i) => {
          if (action.payload.index === i) {
            e.description = action.payload.description;
          }
        })
      });

      alert("Tarefa cadastrada");
    },
    deleteTask: (state, action) => {
      state.data.forEach(x => {
        x.tasks.forEach((e, i) => {
          if (action.payload === i) {
            x.tasks.splice(i, 1);
          }
        });
      })
    }
  },
});

export const { addPage, addTask, editTask, deletePage, deleteTask } = pageSlice.actions;
export default pageSlice.reducer;
