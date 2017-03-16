(function($) {
	$.WindowWidthAndHeight = function(){
		var self = this;
		this.ModuleName = "WindowWidthAndHeight";

		this.windowWidth = $(window).width();
		this.windowHeight = $(window).height();
	};
})(jQuery);
var WindowWidthAndHeight = new $.WindowWidthAndHeight();