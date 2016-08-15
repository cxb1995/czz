function MoreTabView(){
	TabView.call(this)
}

MoreTabView.prototype = Object.create(TabView.prototype)
MoreTabView.prototype.constructor = MoreTabView

MoreTabView.prototype.load = function(index){
	
	var moreTab = document.querySelector('.more-show')
	
	var right = moreTab.getBoundingClientRect().right - $('.more-modal').innerWidth()
	
	TabView.prototype.load.call(this,index)
	
		if(this.$tab){
		
		this.$tab.show().css('left',right)
		
		return
	}
	
	this.$tab = $('.more-modal').css({'left':right}).show().hover(function(){
		
		$(this).show()
		
	},function(){
		
		$(this).hide()
	})
	
	
	
	
}


