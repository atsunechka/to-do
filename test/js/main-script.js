function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }
    function Fridge(power){
    	Machine.apply(this, arguments);
    	var food = [];
    	this.addFood = function(){
    		if (!this._enabled){
    			throw new Error('Холодильник выключен');
    		};
    		if (food.length + arguments.length >= this._power/100){
    			throw new Error("Нельзя добавить больше еды");
    		}
    		for (var i=0; i<arguments.lenght; i++){
    			food.push(arguments[i]);
    		}
    	};
    	function getFood(){
    		return food.slice();
    	}	
    };
    function CoffeeMachine(power) {
      Machine.apply(this, arguments);

      var waterAmount = 0;
      var timerId;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        alert('Кофе готов!');
      }

      var parentDisable = this.disable;
      this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
      }

      this.run = function() {
        if (!this._enabled) {
          throw new Error("Кофеварка выключена");
        }
        timerId = setTimeout(onReady, 1000);
      };

    }

var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен