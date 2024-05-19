/** List of queries and mutations sent tothe apollo server */
import {
    gql
  } from "@apollo/client";

  /*MUTATION ADD USER*/
  export const ADD_USER = gql`mutation AddUser($name:name!, $user: UserInput!) {addUser(name: $name, user: $user) {user {id name email, password}}}`;
  

// /*MUTATION ADD TASK TO LIST*/
//provide user token or id to access tasks list and add it to the list
export const ADD_TASK = gql`mutation AddTask($content: TaskContent!) {addTask(content: $content) {task {name priority category status startDate endDate desc}}}
}
}`;

// /*QUERY GET TASKS*/
// //the name of the query GetUserTasks does not matter but what is called within it does : "user". The query user must be defined in the schema
// //retrieves the tasks of the user
// export const GET_USER_TASKS = gql`query GetUserTasks($id: ID!) {user(id: $id) {tasks {id title date description status}}}`;