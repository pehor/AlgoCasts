// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	constructor(){
		this.store = {}
	}
  // Register an event handler
  on(eventName, callback) {
  	if (!this.store[eventName]) {
  		this.store[eventName] = []
  	}
  	this.store[eventName].push(callback)
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
  	if(!this.store[eventName]) return
  	this.store[eventName].forEach((handler) => {
  		handler()
  	})
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
	if(!this.store[eventName]) return
	this.store[eventName] = []
  }
}

module.exports = Events;
