const fs = require('fs'); 
const http = require('http');


const requestHandler = (req, res) => {
    const url = req.url; 
    const method = req.method; 

      if (url === '/') {
            
            res.setHeader('Content-Type', 'text/html');
             res.write(`<html>
                <head>
                    <title>Form</title>
                </head>
                <body>
                    <h1>Welcome!</h1>

                    <form action="/create-user" method="POST">
                        <input
                             type="text"
                             name="username"
                             placeholder="Enter your username">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `)
        return res.end();
       }
       
       if (url === '/users') {

            res.setHeader('Content-Type', 'text/html');
            res.write(`
            <html>
                <head>
                    <title>Users</title>
                </head>
                <body>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                    </ul>
                </body>
            </html>
        `)

        return res.end ();

       }

 

       if (url === '/create-user' && method === 'POST') {
        const body = []

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })

         req.on('end', () => {

            const parseBody = Buffer.concat(body).toString();
            const username = parseBody.split('=')[1];

            console.log(username);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
         }
         )

       }
}


exports.handler = requestHandler;
