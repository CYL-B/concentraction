//tagged templage literal to wrap graphql strings, converts graphql into a format that Apollo expects
import gql from "graphql-tag";

export const typeDefs = gql`
  "Get User when connected or created"
  type Query {
    user: User!
  }

  type Mutation {
    "create an account for new user, returns AuthPayload"
    signup(name: String!, content: UserInput!): AuthPayloadResponse!
    "update user's information, returns user"
    updateUser(id: ID!, name: String, password: String, mail: String): UpdateUserResponse!
    "login an existing user, returns AuthPayload"
    login(content:UserInput!): AuthPayloadResponse!
    "create a new task"
    addTask(content:
      TaskContent!
    ): AddTaskResponse
    "delete a task"
    deleteTask(id: ID!): Task!

    "update a task"
    updateTask(
      id: ID!
      content: TaskContent!
    ): UpdateTaskResponse!
  }

  "Information to provide as argument of user"
  input UserInput {
    email: String!
    password: String!
  }

  "Information to provide as argument of task"
  input TaskContent {
    name: String!
    priority: Priority
    category: Category!
    status: Status!
    startDate: Date
    endDate: Date
    desc: String
  }


  "Identification of a user"
  type AuthPayloadResponse {
    "Similar to HTTP status code"
    code:Int!
    "Indicates if the request was successful"
    success: Boolean!
    "Human readable message for the UI"
    message: String!
    token: String
    "User created or logged in"
    user: User
  }

  
  "User response"
  type UpdateUserResponse {
    code:Int!
    success: Boolean!
    message: String!
    user: User
  }
  
  "Add task response"
  type AddTaskResponse {
    code:Int!
    success: Boolean!
    message: String!
    task: Task
  }
  "Update task response"
  type UpdateTaskResponse {
    code:Int!
    success: Boolean!
    message: String!
    task: Task
  }



  "Schema designed to describe an user, its tasks and objectives"
  type User {
    id: ID!
    name: String!
    password: String!
    mail: String!
    "Tasks assigned to the specific USER"
    tasks: [Task]
    "Objectives assigned to the specific USER"
    objectives: [Objective]
  }

  "Schema designed to describe a task"
  type Task {
    id: ID!
    name: String!
    priority: Priority
    category: Category!
    status: Status!
    startDate: Date
    endDate: Date
    desc: String
  }

  "Schema designed to describe an objective"
  type Objective {
    title: String!
    status: Boolean!
  }

  "Schema designed to describe category"
  type Category {
    name: String
  }

  "Schema designed to describe list"
  type List {
    name: Category
    tasks: [Task]
  }
"Restricts the values for property Priority"
  enum Priority {
    LOW
    MEDIUM
    HIGH
  }
"Restricts the values for property Status"
  enum Status {
    TO
    DO
    ON
    GOING
    DONE
  }
  
  "Custom scalar defined in resolver"
  scalar Date
`;
