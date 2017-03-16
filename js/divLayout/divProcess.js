(function($) {
	$.DivProcess = function(){
		var self = this;
		this.ModuleName = "DivProcess";

		var achieve = undefined;

		this.init = function(strMainAppId){
			// 初始化 achieve
			achieve = new $.DivAchieve();

			// initLayout
			_initLayout(strMainAppId, function(strDivId, strFighterId){
				_createFighter(strDivId, strFighterId);
			});
		};

		var _initLayout = function(strMainAppId, oCreateFighterCallback){
			achieve._initLayout(strMainAppId, oCreateFighterCallback);
		};
		var _createFighter = function(strDivId, strFighterId){
			achieve._createFighter(strDivId, strFighterId);
		};
	};
})(jQuery);
var DivProcess = new $.DivProcess();