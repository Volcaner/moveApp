(function($) {
	$.DivAchieve = function(){
		var self = this;
		this.ModuleName = "DivAchieve";

		this._initLayout = function(strMainAppId, oCreateFighterCallback){
			var strDivContainerId = "divContainer" + "_" + self.ModuleName;
			var strDivId = "div" + "_" + self.ModuleName;
			var strFighterId = "fighter" + "_" + self.ModuleName;
			var strHtml = '<div id="divContainer_DivAchieve" class="moveAppFrame_div_container">\
				<div id="div_DivAchieve" class="moveAppFrame_div">\
					<div id="fighter_DivAchieve" class="moveAppFrame_div_fighter"></div>\
				</div>\
			</div>';
			$("#" + strMainAppId).append(strHtml);

			// figter w h 
			$("#" + strFighterId).css("width", "40px");
			$("#" + strFighterId).css("height", "40px");
			$("#" + strFighterId).css("border-radius", "20px 20px");

			oCreateFighterCallback(strDivId, strFighterId);
		};

		this._createFighter = function(strDivId, strFighterId){
			var FighterMoveAction = new $.FighterMoveAction();
			FighterMoveAction.init(strDivId, strFighterId);
		};
	};
})(jQuery);
var DivAchieve = new $.DivAchieve();