# BlogApplication

API for Blog Apllication with express and mongoDB

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## API References

### USER

#### Register user

```http
  POST /register
```

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `username` | `string` | **Required**. Your email    |
| `password` | `string` | **Required**. Your password |

_Response (201 - Created)_

```
{
    "_id": <given id by system>,
    "username": <your username>,
    "password": <your password>,
}
```

_Response (400 - Validate Error)_

```
{
    "message": [
       <validation errors>
    ]
}
```

_Response (400 - Duplicate Username)_

```
{
    "message": "User already exist"
}
```

---

#### Login user

```http
  POST /login
```

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `username` | `string` | **Required**. Your username |
| `password` | `string` | **Required**. Your password |

_Response (200 - Ok)_

```
{
    "access_token": <your access_token>
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "User not registered"
}
```

_Response (401 - password incorrect)_

```
{
    "message": "Password is incorrect"
}
```

---

#### Get all Article

```http
  GET /article
```

_Response (200 - Ok)_

```
[
    {
    "_id": "61af1bb4cf27c72f28ddb951",
    "title": "my first articles",
    "authors": "handi angga w",
    "tags": [
        "news",
        "first"
    ],
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "time": "2021-12-07T09:00:11.502Z",
    "image": "https://www.domainesia.com/asset/uploads/2021/05/MongoDB-Logo.wine_-3.png",
    "Comment": {
        "authors": "61af5914a05482aa5949dffa",
        "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "time": "2021-12-07T14:13:53.647Z"
    }
]

```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

#### Create Article

```http
  POST /article
```

| access_token   | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `access_token` | `string` | **Required**. access token |

| Body    | Type     | Description                      |
| :------ | :------- | :------------------------------- |
| `title` | `string` | **Required**. Your Article title |
| `tag`   | `string` | **Required**. Your Article tag   |
| `body`  | `string` | **Required**. Your Article body  |
| `image` | `string` | **Required**. Your Article image |

_Response (201 - Created)_

```
{
    "acknowledged": true,
    "insertedId": "61af1faf0eaa1b92a0e5cee1"
}
```

_Response (400 - Validate Error)_

```
{
    "message": [
       <validation errors>
    ]
}
```

---

#### Edit Article

```http
  PUT /article/:id
```

| access_token   | Type     | Description                      |
| :------------- | :------- | :------------------------------- |
| `access_token` | `string` | **Required**. Dinas access token |

| Body    | Type     | Description                      |
| :------ | :------- | :------------------------------- |
| `title` | `string` | **Required**. Your Article title |
| `tag`   | `string` | **Required**. Your Article tag   |
| `body`  | `string` | **Required**. Your Article body  |
| `image` | `string` | **Required**. Your Article image |

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `id`      | `string` | **Required**. Article id |

_Response (200 - Ok)_

```
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```

_Response (400 - Validate Error)_

```
{
    "message": [
       <validation errors>
    ]
}
```

_Response (404 - Not Found)_

```
{
    "message": "Article not found"
}
```

---

#### Delete Article

```http
  Delete /article/:id
```

| access_token   | Type     | Description                      |
| :------------- | :------- | :------------------------------- |
| `access_token` | `string` | **Required**. Dinas access token |

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `id`      | `string` | **Required**. Article id |

_Response (200 - Ok)_

```
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```

_Response (404 - Not Found)_

```
{
    "message": "Article not found"
}
```

---

#### Create Article

```http
  POST /comment/:articleId
```

| access_token   | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `access_token` | `string` | **Required**. access token |

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `id`      | `string` | **Required**. Article id |

| Body   | Type     | Description                     |
| :----- | :------- | :------------------------------ |
| `body` | `string` | **Required**. Your Article body |

_Response (201 - Created)_

```
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```

_Response (400 - Validate Error)_

```
{
    "message": [
       <validation errors>
    ]
}
```
