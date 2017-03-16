(function($) {
	$.CanvasAchieve = function(){
		var self = this;
		this.ModuleName = "CanvasAchieve";

		this._initLayout = function(strMainAppId, oCreateFighterCallback){
			var strCanvasContainerId = "canvasContainer" + "_" + self.ModuleName;
			var strCanvasId = "canvas" + "_" + self.ModuleName;
			var strHtml = '<div id="canvasContainer_CanvasAchieve" class="moveAppFrame_canvas_container">\
				<canvas id="canvas_CanvasAchieve" class="moveAppFrame_canvas"></canvas>\
			</div>';
			// CString.format({strHtml, strCanvasContainerId, strCanvasId})
			$("#" + strMainAppId).append(strHtml);

			oCreateFighterCallback(strCanvasId);
		};

		this._createFighter = function(strCanvasId){
			
		};
	};
})(jQuery);
var CanvasAchieve = new $.CanvasAchieve();