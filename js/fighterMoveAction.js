(function($) {
	$.FighterMoveAction = function(){
		var self = this;
		this.ModuleName = "FighterMoveAction";

		this.init = function(strLayoutId, strFighterId){
			var bIsMoveL = false;
			var bIsMoveT = false;

			$(document).keydown(function(e){
				var KeyCode = new $.KeyCode(e);
				var strLayoutL = $("#" + strLayoutId).offset().left;
				var strLayoutT = $("#" + strLayoutId).offset().top;
				var strFighterL = $("#" + strFighterId).offset().left;
				var strFighterT = $("#" + strFighterId).offset().top;
				var FigterX = strFighterL - strLayoutL + 20;
				var FigterY = strFighterT - strLayoutT + 20;
				var speed = 10;

				switch(KeyCode.keyCode){
					case 37: 
						$("#" + strFighterId).animate({'left':"-=" + speed}, 20, function(){
							if(FigterX-2*speed <= 0){
								$("#" + strFighterId).css("left", 0)
							}
						});
						break;
					case 39: 
						$("#" + strFighterId).animate({'left':"+=" + speed}, 20, function(){
							if(FigterX+2*speed >= 600){
								$("#" + strFighterId).css("left", 560)
							}
						});
						break;
					case 38: 
						$("#" + strFighterId).animate({'top':"-=" + speed}, 20, function(){
							if(FigterY-2*speed <= 0){
								$("#" + strFighterId).css("top", 0)
							}
						});
						break;
					case 40: 
						$("#" + strFighterId).animate({'top':"+=" + speed}, 20, function(){
							if(FigterY+2*speed >= 400){
								$("#" + strFighterId).css("top", 360)
							}
						});
						break;
				};

			// 	if(KeyCode.keyCode == 37){
			// 		$("#" + strFighterId).animate({'left':"-=" + speed}, 20, function(){
			// 			if(FigterX-2*speed <= 0){
			// 				$("#" + strFighterId).css("left", 0)
			// 			}
			// 		});
			// 	}
			// 	if(KeyCode.keyCode == 39){
			// 		$("#" + strFighterId).animate({'left':"+=" + speed}, 20, function(){
			// 			if(FigterX+2*speed >= 600){
			// 				$("#" + strFighterId).css("left", 560)
			// 			}
			// 		});
			// 	}
			// 	if(KeyCode.keyCode == 38){
			// 		$("#" + strFighterId).animate({'top':"-=" + speed}, 20, function(){
			// 			if(FigterY-2*speed <= 0){
			// 				$("#" + strFighterId).css("top", 0)
			// 			}
			// 		});
			// 	}
			// 	if(KeyCode.keyCode == 40){
			// 		$("#" + strFighterId).animate({'top':"+=" + speed}, 20, function(){
			// 			if(FigterY+2*speed >= 400){
			// 				$("#" + strFighterId).css("top", 360)
			// 			}
			// 		});
			// 	}
			// 
			// $(document).keydown(function(e){
			// 	var KeyCode = new $.KeyCode(e);
			// 	var strLayoutL = $("#" + strLayoutId).offset().left;
			// 	var strLayoutT = $("#" + strLayoutId).offset().top;
			// 	var strFighterL = $("#" + strFighterId).offset().left;
			// 	var strFighterT = $("#" + strFighterId).offset().top;
			// 	var FigterX = strFighterL - strLayoutL + 20;
			// 	var FigterY = strFighterT - strLayoutT + 20;
			// 	if(KeyCode.keyCode == 39){
			// 		bIsMoveL = true;
			// 		aaa(10, FigterX);
			// 	};
			// });
			// $(document).keyup(function(e){
			// 	var KeyCode = new $.KeyCode(e);
			// 	var strLayoutL = $("#" + strLayoutId).offset().left;
			// 	var strLayoutT = $("#" + strLayoutId).offset().top;
			// 	var strFighterL = $("#" + strFighterId).offset().left;
			// 	var strFighterT = $("#" + strFighterId).offset().top;
			// 	var FigterX = strFighterL - strLayoutL + 20;
			// 	var FigterY = strFighterT - strLayoutT + 20;
			// 	if(KeyCode.keyCode == 39){
			// 		bIsMoveL = false;
			// 		aaa(0, FigterX);
			// 	};
			// });

			// var aaa = function(speed, FigterX){
			// 	$("#" + strFighterId).animate({'left':"+=" + speed}, 20, function(){
			// 		if(FigterX+2*speed >= 600){
			// 			$("#" + strFighterId).css("left", 560)
			// 		}
			// 	});
			// }

			});
		};
	};
})(jQuery);
var FighterMoveAction = new $.FighterMoveAction();