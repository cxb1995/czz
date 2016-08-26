function Goods() {

}

Goods.prototype.load = function() {
	$.getJSON('file:///C:/Users/Administrator/Desktop/vipDemo/czz/唯品会/json/goods.json', function(data) {
		console.log(data)
		var jingxuan = data.jingxuan

		for(var i = 0; i < jingxuan.length; i++) {

			var aGood = jingxuan[i]

			$("<div class='aGood'>").css({
				width: '570px',
				height: '350px',
				float: 'left',
				border: '1px red solid'
			}).appendTo($('.goods'))
		}
	})
}
