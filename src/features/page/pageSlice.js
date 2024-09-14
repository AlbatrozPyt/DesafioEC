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
      alert("Página adicionada com sucesso.");
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

      alert("Tarefa adicionada com sucesso.");
    },
    editTask: (state, action) => {
      state.data.forEach((page, indexPage) => {
        if (indexPage === action.payload.currentPage) {
          page.tasks.forEach((task, indexTask) => {
            if (action.payload.index === indexTask) {
              task.description = action.payload.description;
            }
          })
        }
      });

      alert("Tarefa atualizado com sucesso.");
    },
    deleteTask: (state, action) => {
      state.data.forEach((page, indexPage) => {
        if (indexPage === action.payload.currentPage) {
          page.tasks.forEach((task, indexTask) => {
            if (indexTask === action.payload.index) {
              page.tasks.splice(indexTask, 1);
            }
          })
        }
      })
    },
    moveTask: (state, action) => {
      state.data.forEach((x, pageIndex) => {
        if (action.payload.initialPage === pageIndex) {
          x.tasks.splice(action.payload.indexTask, 1);
        }

        if (action.payload.finalPage === pageIndex) {
          x.tasks.push(action.payload.item);
        }
      })
    }
  },
});

export const { addPage, addTask, editTask, deletePage, deleteTask, moveTask } = pageSlice.actions;
export default pageSlice.reducer;
