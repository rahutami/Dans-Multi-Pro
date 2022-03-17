# Backend Test for Dans Multi Pro

## About Project

This project is made to complete recruitment process for Dans Multi Pro. It is made using **Node.js** and **express** for the server and **sqlite** for the database.

## How to Run

Make sure to install all dependencies

```Terminal
npm install
```

List of commands:

```Terminal
npm start - to start project
npm run dev - to start project in dev mode
```

Server then will be run on: http://localhost:3000/

## Endpoints

There are 3 endpoints in this project

1. POST `/auth/login`  
   This endpoint is used by user to log in. This endpoint requires username and password to be passed through the request body.

   Request Body Example:

   ```JSON
   {
       "username": "gayuhtami",
       "password": "tami1234"
   }
   ```

   This endpoint will return a message and a JWT token if successful, the JWT token can later be used to access the rest of the endpoints below.

   Response Body Example:

   ```JSON
   {
    "message": "Login succesful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdheXVodGFtaSIsInBhc3N3b3JkIjoidGFtaTEyMzQiLCJpYXQiOjE2NDc0OTEyMDV9.bk7UTutjYXBje8xQh-MZ6qmpuIGnyDq23O6dOTF-0fw"
    }
   ```

   Here are the list of username and password pairs that can be used to log in:  
   |Username |Password |
   |:------- |:------- |
   |gayuhtami |tami1234 |
   |admin |admin1234 |

2. GET `/jobs`  
   This is an endpoint that will return list of jobs available. Filtering can be done by adding these query parameters to the endpoint:

   | Key         | Value   | Required |
   | :---------- | :------ | :------- |
   | description | String  | FALSE    |
   | location    | String  | FALSE    |
   | full_time   | Boolean | FALSE    |

   Url example: http://localhost:3000/jobs?description=python&location=berlin

   Response body example:

   ```JSON
   [
       {
           "id": "f4a7c47f-c8ac-49fa-b15b-4ab37bfd2307",
           "type": "Full Time",
           "url": "https://jobs.github.com/positions/f4a7c47f-c8ac-49fa-b15b-4ab37bfd2307",
           "created_at": "Tue May 18 09:52:30 UTC 2021",
           "company": "Blindside",
           "company_url": "https://www.blindside.pro",
           "location": "Berlin",
           "title": "Flutter Developer",
           "description": "<p>Blindside is a sports tech start up from Berlin-Adlershof. Professional and amateur coaches and clubs boost their practices with our web and mobile app. We are striving to become the global sport platform, on which coaches exchange their experience, get inspired, and enable their athletes to develop in the best way possible.</p>\n<p>We are currently optimizing our mobile app, reinforcing our infrastructure and in the initial stages of a sports training analytics engine. We ship code often with continuous deployment and do most of our work in Python, Flutter/Dart, and React.</p>\n<p>As our focus shifts more heavily toward mobile development, Blindside are looking for an experienced mobile developer with professional working experience using Flutter.</p>\n<p><strong>Tasks</strong></p>\n<ul>\n<li>You will be immersed into a highly autonomous environment.</li>\n<li>You will design new features and build &amp; maintain within our existing codebase in Flutter</li>\n<li>You will constantly be learning new skills. Researching, conducting trial &amp; error experiments as well as maintaining full ownership of your code, from concept to deployment.</li>\n<li>In your first month, you will be familiarized with our team and have already resolved some bugs and small requests. Your code has gone live multiple times in the first month.</li>\n<li>In the following months, your knowledge of our codebase has drastically increased and you are offering your help in fundamental software architecture decisions. You also feel confident enough to suggest improvement to the team's workflow when you see it doesn't work.</li>\n<li>At the end of your first year, you have successfully contributed to a wide range of projects, even spanning across multiple elements of our system, from backend to mobile. You have established yourself as a self starter and clearly spoken member of our team.</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>Strong technical background (5+ years) in mobile development (Android or iOS), preferably professional experience working in Flutter</li>\n<li>Ideally you have experience in other areas of software development outside of mobile (backend, frontend, infrastructure, etc.)</li>\n<li>You can comfortably propose technical solutions to business problems and clearly communicate them to your colleagues.</li>\n<li>You are transparent, mindful and empathetic towards your teammates.</li>\n<li>You can easily express your ideas in written and spoken English</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>The opportunity to establish yourself as a core member of the development team</li>\n<li>An international team with a wide range of backgrounds</li>\n<li>A salary that matches industry standards</li>\n<li>A respectful atmosphere with a focus on professionalism</li>\n<li>A family-friendly work environment</li>\n<li>State of the art equipment to ensure that you can focus on the right things</li>\n<li>Daily paid lunch at our local canteen</li>\n<li>Yearly budget for individual professional development</li>\n</ul>\n",
           "how_to_apply": "<p><a href=\"https://blindside.join.com/jobs/2248922-flutter-developer?pid=357a3b4531918760973f&amp;oid=1b7223ae-85f3-44df-b767-57095fc2735d&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=flutter%2Bdeveloper\">https://blindside.join.com/jobs/2248922-flutter-developer?pid=357a3b4531918760973f&amp;oid=1b7223ae-85f3-44df-b767-57095fc2735d&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=flutter%2Bdeveloper</a></p>\n",
           "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzZqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--23cbad69864ba3e2e6614bda12beda0b08c03c68/blindside.jpg"
       }
   ]
   ```

3. GET `/jobs/:id`  
   This is an endpoint that will return a job's detail by its id.

   Url example: http://localhost:3000/jobs/f4a7c47f-c8ac-49fa-b15b-4ab37bfd2307

   Response body example:

   ```JSON
   {
       "id": "f4a7c47f-c8ac-49fa-b15b-4ab37bfd2307",
       "type": "Full Time",
       "url": "https://jobs.github.com/positions/f4a7c47f-c8ac-49fa-b15b-4ab37bfd2307",
       "created_at": "Tue May 18 09:52:30 UTC 2021",
       "company": "Blindside",
       "company_url": "https://www.blindside.pro",
       "location": "Berlin",
       "title": "Flutter Developer",
       "description": "<p>Blindside is a sports tech start up from Berlin-Adlershof. Professional and amateur coaches and clubs boost their practices with our web and mobile app. We are striving to become the global sport platform, on which coaches exchange their experience, get inspired, and enable their athletes to develop in the best way possible.</p>\n<p>We are currently optimizing our mobile app, reinforcing our infrastructure and in the initial stages of a sports training analytics engine. We ship code often with continuous deployment and do most of our work in Python, Flutter/Dart, and React.</p>\n<p>As our focus shifts more heavily toward mobile development, Blindside are looking for an experienced mobile developer with professional working experience using Flutter.</p>\n<p><strong>Tasks</strong></p>\n<ul>\n<li>You will be immersed into a highly autonomous environment.</li>\n<li>You will design new features and build &amp; maintain within our existing codebase in Flutter</li>\n<li>You will constantly be learning new skills. Researching, conducting trial &amp; error experiments as well as maintaining full ownership of your code, from concept to deployment.</li>\n<li>In your first month, you will be familiarized with our team and have already resolved some bugs and small requests. Your code has gone live multiple times in the first month.</li>\n<li>In the following months, your knowledge of our codebase has drastically increased and you are offering your help in fundamental software architecture decisions. You also feel confident enough to suggest improvement to the team's workflow when you see it doesn't work.</li>\n<li>At the end of your first year, you have successfully contributed to a wide range of projects, even spanning across multiple elements of our system, from backend to mobile. You have established yourself as a self starter and clearly spoken member of our team.</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>Strong technical background (5+ years) in mobile development (Android or iOS), preferably professional experience working in Flutter</li>\n<li>Ideally you have experience in other areas of software development outside of mobile (backend, frontend, infrastructure, etc.)</li>\n<li>You can comfortably propose technical solutions to business problems and clearly communicate them to your colleagues.</li>\n<li>You are transparent, mindful and empathetic towards your teammates.</li>\n<li>You can easily express your ideas in written and spoken English</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>The opportunity to establish yourself as a core member of the development team</li>\n<li>An international team with a wide range of backgrounds</li>\n<li>A salary that matches industry standards</li>\n<li>A respectful atmosphere with a focus on professionalism</li>\n<li>A family-friendly work environment</li>\n<li>State of the art equipment to ensure that you can focus on the right things</li>\n<li>Daily paid lunch at our local canteen</li>\n<li>Yearly budget for individual professional development</li>\n</ul>\n",
       "how_to_apply": "<p><a href=\"https://blindside.join.com/jobs/2248922-flutter-developer?pid=357a3b4531918760973f&amp;oid=1b7223ae-85f3-44df-b767-57095fc2735d&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=flutter%2Bdeveloper\">https://blindside.join.com/jobs/2248922-flutter-developer?pid=357a3b4531918760973f&amp;oid=1b7223ae-85f3-44df-b767-57095fc2735d&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=flutter%2Bdeveloper</a></p>\n",
       "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzZqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--23cbad69864ba3e2e6614bda12beda0b08c03c68/blindside.jpg"
   }
   ```
   
   **Header for Authorization**
   |Key           | Value           |
   |:---          | :----           |
   |Authorization | Bearer {token}  |
