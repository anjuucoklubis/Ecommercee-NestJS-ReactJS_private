# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username" : "anju",
  "password" : "password",
  "name" : "Anju Lubis"
}
```

Response Body (Success) : 

```json
{
  "data" : {
    "username" : "anju",
    "name" : "Anju Lubis"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username" : "anju",
  "password" : "password"
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "anju",
    "name" : "Anju Lubis",
    "token" : "session_id_generated"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :
- Authorization: token

Response Body (Success) :

```json
{
  "data" : {
    "username" : "anju",
    "name" : "Anju Lubis"
  }
}
```

Response Body (Failed) :

```json
{
  "errors" : "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :
- Authorization: token

Request Body :

```json
{
  "password" : "anju", // optional, if want to change password
  "name" : "Anju Lubis" // optional, if want to change name
}
```

Response Body (Success) :

```json
{
  "data" : {
    "username" : "anju",
    "name" : "Anju Lubis"
  }
}
```

## Logout User

Endpoint : DELETE /api/users/current

Headers :
- Authorization: token

Response Body (Success) :

```json
{
  "data" : true
}
```