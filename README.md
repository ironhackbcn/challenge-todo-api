# Tech challenge Ironhack Barcelona 2019 - Todo REST API

After forking and cloning this repository, run the following commands:
```
  cd challenge-todo-api
  npm install
  npm run watch
```

## Documentation
----
## Rest Endpoint:
`http://localhost:4000/api/v1`

## Todo API endpoints

### Get All Todos
----
  Returns json data with all todos.
  | URL | Method | Params | Data Params | Success response | Error response|
  |-|-|-|-|-|-|
  |`/todos`|GET|None|None|Status 200 [todos]||


**Get Todo**
----
  Returns json data about a single todo.
  | URL | Method | Params | Data Params | Success response | Error response|
  |-|-|-|-|-|-|
  |`/todos/:id`|GET|`id=[ObjectId]`|None|Status 200|Status 404|

**Create Todo**
----
  Returns json data about a the created todo.
  | URL | Method | Params | Data Params | Success response | Error response|
  |-|-|-|-|-|-|
  |`/todos`|POST|None|`title=[String]`|Status 200|Status 400 |

**Update Todo**
----
  Returns json data about a the updated todo.
  | URL | Method | Params | Data Params | Success response | Error response|
  |-|-|-|-|-|-|
  |`/todos/:id`|PUT|`id=[ObjectId]`|`title=[String]`|Status 200|Status 400 |


**Delete Todo**
----
  Returns json data about a the deleted todo.
  | URL | Method | Params | Data Params | Success response | Error response|
  |-|-|-|-|-|-|
  |`/todos/:id`|DELETE|`id=[ObjectId]`|none|Status 200|Status 400 |
