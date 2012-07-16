/**
 * jquery-filterList
 *
 * This is a jquery plugin that filter given list by a keyword.
 * @author Mustafa Atik <muatik>
 * @link https://github.com/muatik/jquery-filterList.git
 *
 * */
(function($){

	// making jquery contains case insensitive
	jQuery.expr[':'].Contains = function(a, i, m) {
		return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0; 
	};
	
	$.fn.filterList=function(settings){
		
		var settings=$.extend({
			'container':null
		}, settings);
		
		this.each(function(){
			
			var list=$(this);

			if(list.hasClass('_filterList'))
				return;
			
			var tbox=$('<input class="_filterListTBox" type="text"  />');
			
			tbox.bind('keyup change',function(){
				var keyword=$(this).val();
				if(keyword==''){
					list.find('*').slideDown();
				}else{
					var m=list.find(':Contains('+keyword+')').slideUp();
					list.find('*').not(m).slideDown();
				}
			});

			if(!settings.container)
				$(tbox).prependTo(list);
			else
				$(tbox).prependTo(settings.container);
			
		});

	}

})(jQuery);
