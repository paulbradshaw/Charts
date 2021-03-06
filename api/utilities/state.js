define(function() {

var State = function(name, enter, leave) {
	this.name = name;
	
	if (enter) {
		this.enter = enter;
	} else {
		this.enter = function() {
			console.log("No enter() method has been defined for the state " + name);
		}
	}

	if (leave) {
		this.leave = leave;
	} else {
		this.leave = function() {
			console.log("No leave() method has been defined for the state " + name);
		}
	}
};

var StateMachine = function() {
	this.states = Array.prototype.slice.call(arguments);

	var setStateByName = function(stateName) {
		var stateFound = false;
		this.states.some(function(state, stateIndex) {
			if (state.name === stateName) {
				this.currentState = state;
				return stateFound = true;
			}
		}.bind(this));

		if (stateFound) {
			return true;
		} else {
			throw "" + stateName + " does not exist in this state machine.";
		}
	};

	this.start = function(stateName) {
		if (stateName) {
			setStateByName.call(this, stateName);
		} else {
			this.currentState = this.states[0];
		}
		
		this.currentState.enter();
	};

	this.transition = function(stateName, data) {
		var previousState = this.currentState.name;
        this.currentState.leave(stateName);
		setStateByName.call(this, stateName);
        this.currentState.enter(data, previousState);
	};

	this.isInState = function(stateName) {
		return (this.currentState.name === stateName);
	};
};

return {
	State: State,
	StateMachine: StateMachine
}

});