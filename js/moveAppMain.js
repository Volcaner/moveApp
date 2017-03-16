(function($) {
	$.MoveAppMain = function(){
		var self = this;
		this.ModuleName = "MoveAppMain";

		var WINDOWWIDTH = "";
		var WINDOWHEIGHT = "";

		this.strMainAppId = "moveAppFrame";

		this.init = function(){
			WINDOWWIDTH = WindowWidthAndHeight.windowWidth;
			WINDOWHEIGHT = WindowWidthAndHeight.windowHeight;

			$("#" + self.strMainAppId).css("width", "100%")
			$("#" + self.strMainAppId).css("height", WINDOWHEIGHT)

			// 方案一：create canvas
			// _createCanvas();

			// 方案二：create div
			_createDiv();
		};

		var _createCanvas = function(){
			var CanvasProcess = new $.CanvasProcess();
			CanvasProcess.init(self.strMainAppId);
		};

		var _createDiv = function(){
			var DivProcess = new $.DivProcess();
			DivProcess.init(self.strMainAppId);
		};
	};
})(jQuery);
var MoveAppMain = new $.MoveAppMain();