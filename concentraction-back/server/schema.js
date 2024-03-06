//tagged templage literal to wrap graphql strings, converts graphql into a format that Apollo expects
import gql from 'graphql-tag';

export const typeDefs = gql`
"Get User when connected or created"
type Query {
user: User!
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


type Mutation {
createUser(name: String!, password: String!, mail: String!): User
deleteUser(id: ID!): Boolean
updateUser (id: ID!, name: String!, password: String!, mail: String!): User
}

"Schema designed to describe a task"
type Task {
  name: String!
  priority: String
  category: Category!
  status: String!
  desc: String
}

"Schema designed to describe objective"
  type Objective {
  title: String!
  status: Boolean!
}

"Schema designed to describe objective"
type Category {
  name: String
}

"Schema designed to describe objective"
type List {
  name: Category
  tasks: [Task]
}`

