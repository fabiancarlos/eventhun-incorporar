
$(function(){

	EventhunIn = {

		getNextEvents: function(params){
			var page = '&page='+params.page;
			var container = params.container;
			var template_view = params.template;
			var root_host = 'eventhun.com.br/';
			var callback = '&callback=?';
			var url_root = 'http://'+root_host+'/plugin/page/events/?'+page+callback;

			$.get(url_root, function(data, status, xhr) {
				console.log('Eventhun next events.', data);

				var template = $(template_view).html();

				_.each(data,function(item,key){		
    				$(container).append(_.template(template,item));
				});

			}, 'jsonp');
		}
	}

});
