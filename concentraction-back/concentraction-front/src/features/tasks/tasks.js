// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import produce from "immer";
// import { selectTasks } from "../../utils/selectors";

// //to update with apollo 
// export const fetchTasksOfTheDay = createAsyncThunk(
//   "tasks/fetchTasksOfTheDay", async () => {
//     const response = await fetch("http://localhost:8000/tasksOfDay");
//     const tasks = await response.json();
//     return tasks;
//   }
// )

// const initialStateDay = {
//   status : 'void',
//   tasksOfDay: []
// };


// const tasksOfDaySlice = createSlice({
//   name: "tasksOfDay",
//   initialState: initialStateDay,
//   reducers : {},
//   extraReducers: builder => {
//     builder
//     .addCase (fetchTasksOfTheDay.pending, state => {
//       state.status = 'pending';
//     })
//     .addCase (fetchTasksOfTheDay.fulfilled, (state, action) => {
//       const newEntities = {}
//       //creates an id for each element of the list
//       action.payload.forEach(task => {
//         newEntities[task.id] = task
//       })
//     state.tasksOfDay = newEntities
//     state.status = "resolved"
//     })
//     .addCase (fetchTasksOfTheDay.rejected, state => {
//       state.status = "rejected"
//     })
//   }
// });


// //code without toolkit

// // //actions qui modifient la propriété status du store
// // const FETCHING = "tasks/fetching";
// // const RESOLVED = "tasks/resolved";
// // const REJECTED = "tasks/rejected";

// // // la requête a été lancée
// // const tasksFetching = () => ({ type: FETCHING });

// // // la requête a retourné un résultat
// // const tasksResolved = (tasks) => ({ type: RESOLVED, payload: tasks });

// // //la requête a échoué
// // const tasksRejected = (error) => ({ type: REJECTED, payload: error });

// //reducer function
// // const initialState = {
// //   status: "void",
// //   data: null,
// //   error: null,
// // };

// //  function freelancesReducer(state, action) {
// //   return produce(state, (draft) => {
// //     switch (action.type) {
// //       case FETCHING: {
// //         if (draft.status === "void") {
// //           draft.status = "pending";
// //           return;
// //         }

// //         //nouvelle tentative après un rejet, on annule l'erreur et on réessaie
// //         if (draft.status === "rejected") {
// //           draft.status = "pending";
// //           draft.error = null;
// //           return;
// //         }
// //         //quand il existe déjà des données stockées au moment de fetch, il s'agit des les MAJ
// //         if (draft.status == "resolved") {
// //           draft.status = "updating";
// //           return;
// //         }
// //         return;
// //       }
// //       case RESOLVED: {
// //         if (draft.status == "pending" || draft.status == "updating") {
// //           draft.status = "resolved";
// //           draft.data = action.payload;
// //           return;
// //         }
// //         return;
// //       }
// //       case REJECTED: {
// //         if (draft.status == "pending" || draft.status == "updating") {
// //           draft.status = "rejected";
// //           draft.error = action.payload;
// //           draft.data = null;
// //           return;
// //         }
// //         return;
// //       }
// //       default:
// //         return;
// //     }
// //   });
// // }

// //fonction asynchrone qui récupère les données

// // async function useFetchTasks(store) {
// //   const status = selectTasks(store.getState()).status;
// //   if (status === "pending" || status === "updating") {
// //     return;
// //   }
// //   store.dispatch(tasksFetchingFetching());
// //   try {
// //     const response = await fetch("http://localhost:8000/tasks");
// //     const data = await response.json();
// //     store.dispatch(tasksResolved(data));
// //   } catch (error) {
// //     store.dispatch(tasksRejected(error));
// //   }
// // }

// const {actions, reducer} = tasksSlice;
// export const {tasksOfMonthFetching, tasksOfDayFetching} = actions;
// export default reducer;
