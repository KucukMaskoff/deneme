const reqEvent = (event) => require(`../event-util/${event}`);
module.exports = client => {
  client.on('events', reqEvent('events'));
}; 
