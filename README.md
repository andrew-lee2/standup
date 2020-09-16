# Standup Tracker

Webapp for recording team standup durations to a database. 
There is also a frontend for plotting standup time over time and metrics about the 
average standup time and normalized times accounting for the number of people attending 
standup. 

Simply call the `startStandup` endpoint to start the timer and `endStandup` to end the 
with the number of attendees. 

For triggering the endpoints I recommend using [ITFFF](https://ifttt.com/maker_webhooks) via Google Home.

# Local Dev

Create `.env` and add the following env vars from the SQL database of your choice. 
TODO add more env variables:

 <ol>
 <li>DB_HOST</li>
 <li>DB_NAME</li>
 <li>DB_PORT</li>
 <li>DB_PASSWORD</li>
 <li>DB_USERNAME</li>
 </ol>

`npm install` to install the API then `node index.js` to run the server.

To run the frontend follow the instructions in `src/README.md`

# Heroku Deployment

See this [guide](https://devcenter.heroku.com/articles/deploying-nodejs) for deploying
to Heroku. You will need to add the above database environmental variables above as well.


