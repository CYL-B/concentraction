//tagged templage literal to wrap graphql strings, converts graphql into a format that Apollo expects
import gql from "graphql-tag";

export const typeDefs = gql`
  "Get User when connected or created"
  type Query {
    user: User!
  }

  type Mutation {
    "create an account for new user"
    signup(name: String!, password: String!, mail: String!): AuthPayload
    "update user's information"
    updateUser(id: ID!, name: String!, password: String!, mail: String!): User
    "login an existing user"
    login(email: String!, password: String!): AuthPayload
    "create a new task"
    addTask(
      name: String!
      priority: String
      category: String!
      status: String!
      startDate: Date
      endDate: Date
      desc: String
    ): Task!
    "delete a task"
    deleteTask(id: ID!): Task!

    "update a task"
    updateTask(
      id: ID!
      name: String!
      priority: String
      category: String!
      status: String!
      startDate: Date
      endDate: Date
      desc: String
    ): Task!
  }

  type Subscription {
    updateTask: Task
  }

  "Identification of a user"
  type AuthPayload {
    token: String
    user: User
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
    name: String!
    priority: Priority
    category: Category!
    status: Status!
    startDate: Date
    endDate: Date
    desc: String
  }

  "Schema designed to describe objective"
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
