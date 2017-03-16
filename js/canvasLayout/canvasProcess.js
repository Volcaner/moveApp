(function($) {
	$.CanvasProcess = function(){
		var self = this;
		this.ModuleName = "CanvasProcess";

		var achieve = undefined;

		this.init = function(strMainAppId){
			// 初始化 achieve
			achieve = new $.CanvasAchieve();

			// initLayout
			_initLayout(strMainAppId, function(strCanvasId){
				_createFighter(strCanvasId);
			});
		};

		var _initLayout = function(strMainAppId, oCreateFighterCallback){
			achieve._initLayout(strMainAppId, oCreateFighterCallback);
		};
		var _createFighter = function(strCanvasId){
			achieve._createFighter(strCanvasId);
		};
	};
})(jQuery);
var CanvasProcess = new $.CanvasProcess();