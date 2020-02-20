require('dotenv').config();
const Pool = require('pg').Pool;


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'standup',
    password: process.env.DB_PASS,
    port: 5432,
});

const getDateToday = (now) => {
    const dd = String(now.getUTCDate()).padStart(2, '0');
    const mm = String(now.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = now.getUTCFullYear();

    return `${yyyy}-${mm}-${dd}`
};

const getTimeNowUTC = (now) => {
    const hh = now.getUTCHours();
    const mm = now.getUTCMinutes();
    const ss = now.getUTCSeconds();

    return `${hh}:${mm}:${ss}`
};

const startStandup = (request, response) => {
    const now = new Date();
    const todaysDate = getDateToday(now);
    const timeNow = getTimeNowUTC(now);

    pool.query('INSERT INTO standup_times (start_date, start_time) VALUES ($1, $2)', [todaysDate, timeNow], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Standup added`)
    })
};

// TODO do this
const endStandup = (request, response) => {
    const num_attendees = parseInt(request.params.attendees);
    const now = new Date();
    const todaysDate = getDateToday(now);
    const timeNow = getTimeNowUTC(now);

    pool.query(
        `UPDATE standup_times SET end_date = $1, end_time = $2, num_attendees = $3 WHERE id IN(SELECT max(id) FROM standup_times)`,
        [todaysDate, timeNow, num_attendees],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Standup ended`)
        }
    )
};

const getStandupTimes = (request, response) => {
    pool.query('SELECT * FROM standup_times ORDER BY start_date, start_time DESC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

module.exports = {
    startStandup,
    endStandup,
    getStandupTimes,
};