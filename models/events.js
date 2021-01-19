const connection =require("../db/connection");

exports.selectEvents = async () => {
const events = await connection
.select('events.*')
.from('events');

return events;
};