# Day 1: HTTP — The Language of the Web

- The computers need some way to communicate, so they agreed on some **Protocols**, one of these mose protocols is the "HTTP Protocol"


## HTTP

- HTTP (HyperText Transfer Protocol) is the protocol the web runs on. It defines one thing: how a client asks a server for something, and how the server gives it back.


### Pattern:


Client ================> Server
           Request

Client <================= Server
           Response



## What requests and responses look like

- Each request or response consists of 
 - Request line: Defines method, path, and HTTP Version. 
 - Headers: Metadata about how the request looks like.
 - Request Body: request itself.
- The same for response.


## Popular methods:

- GET: Give me this resource
- POST: Create this new thing
- PUT: Replace this entire thing with what I send
- PATCH: Update specific fields of this thing
- DELETE: Remove this thing

## Types of methods:

- Idempotent: means the effect is the same whether you send it once or 100 times

- non Idempotent: The opposite. 


## Status Codes — The Server's Response Signal

- 1xx — Informational
- 2xx — Success
- 3xx — Redirection
- 4xx — Client Error
- 5xx — Server Error


## Request Headers:
- Host: Tells the server which domain (one server can host many domains)
- Content-Type: Tells the server what format the body is in
- Authorization: Proves who you are
- Cookie: Sends previously stored session data
- Accept: Tells the server what format you want back
 

## Response Headers:
- Content-Type:Tells the client what format the response body is
- Set-Cookie: Tells the browser to store a cookie and send it on future requests
- Cache-Control: Tells the browser (and proxies) how long to cache this response
- Location: Used with 201 (where the new resource lives) and 3xx (where to redirect)
- Access-Control-Allow-Origin: CORS — tells the browser "yes, this other domain is allowed to call me"


## Why HTTP:

- HTTP is stateless. The server treats every request independently. It doesn't remember you from one request to the next.

- To save the state if needed we store it in the client via set-cookie 