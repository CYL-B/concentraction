/** List of queries and mutations sent tothe apollo server */
import { gql } from "@apollo/client";

/*MUTATION ADD USER*/
export const ADD_USER = gql`
  mutation AddUser($name: String!, $content: UserInput!) {
    addUser(name: $name, content: $content) {
      code
      success
      message
      token
      user {
        id
      }
    }
  }
`;

/*MUTATION LOGIN */

export const LOGIN = gql`
  mutation Login($content: UserInput!) {
    login(content: $content) {
      code
      success
      message
      token
      user {
        id
      }
    }
  }
`;

// /*MUTATION ADD TASK TO LIST*/
//when request is made, user token is passed in headers (apollo client), decoded in back and stored in context to access tasks list and add it to the list
export const ADD_TASK = gql`
  mutation AddTask($content: TaskContent!) {
    addTask(content: $content) {
      code
      success
      message
      task {
        id
        name
        priority
        category
        status
        startDate
        endDate
        desc
      }
    }
  }
`;

// /*QUERY GET TASKS*/
// //the name of the query GetUserTasks does not matter but what is called within it does : "user". The query user must be defined in the schema
// //retrieves the tasks of the user
export const GET_USER_TASKS = gql`
  query GetUserTasks {
    getTasks {
      code
      success
      message
      user {
        tasks {
          id
          name
          priority
          category
          status
          startDate
          endDate
          desc
        }
      }
    }
  }
`;

// /*QUERY GET OBJECTIVES*/

// //retrieves the objectives of the user
export const GET_USER_OBJECTIVES = gql`
  query GetUserObjectives {
    getObjectives {
      code
      success
      message
      user {
        objectives {
        title
    status
      }
    }
  }
`;
