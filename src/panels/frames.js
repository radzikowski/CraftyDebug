(function(){

    var styles =   '#crafty-debug ul.frames .separator {float:left;height:35px;width:2px;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAjCAYAAAC+Rtu3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA01pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVFNkE1NjA2QTM0QTExRTFBQUIyRDY5NkYxQTk4Q0RBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVFNkE1NjA3QTM0QTExRTFBQUIyRDY5NkYxQTk4Q0RBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUU2QTU2MDRBMzRBMTFFMUFBQjJENjk2RjFBOThDREEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUU2QTU2MDVBMzRBMTFFMUFBQjJENjk2RjFBOThDREEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4M0cCrAAAAG0lEQVR42mLasWOH2v///9WYGKBglEEkAyDAAMfmBbi3ocYXAAAAAElFTkSuQmCC");}\n'+
    			   '#crafty-debug ul.frames {float:right}\n'+
                   '#crafty-debug ul.frames img{float:left}\n'+
                   '#crafty-debug ul.frames .frame{padding:0px 5px;}\n'+
                   '#crafty-debug ul.frames .frame .text{color: #FFF; padding:5px 5px 0px 0px;}\n'+
                   '#crafty-debug ul.frames .frame .frames-amount{color:#FFF; padding:5px 0px 0px 0px;}\n'+
                   '#crafty-debug ul.frames {list-style-type: none;padding: 0;margin: 0;}\n'+
				   '#crafty-debug ul.frames li{display: inline-block;white-space: nowrap;color: #2F2F2F;min-height: 28px;padding: 0px;float: left;cursor: default;}\n'+
                   '#crafty-debug ul.frames li:hover {box-shadow: rgba(0, 0, 0, 0.3) 0 0 5px;}\n'+
				   '#crafty-debug ul.frames li a{padding: 4px 10px 9px 10px;color: #FFF; display:block; text-decoration: none}\n'+
				   '#crafty-debug ul.frames li a .text {float:left; padding-top: 8px;}\n'+
                   '#crafty-debug ul.frames div {float:left}\n'+
                   '#crafty-debug ul.frames #fps .text{color:#FFF; padding:12px;}\n'+
                   '#crafty-debug ul.frames .forward a{float:left; color:#9eacff; padding:0px; text-decoration:underline;}\n'+
                   '#crafty-debug ul.menu .close {cursor:pointer;float:right;width:10px; height:10px;}\n' 
                   ;

						

    var framesMenu =   '<ul class="frames">'+
    						'<div class="separator"></div>'+
                        	'<li class="bar-item play" style="display:none" data-item="play"><a href="#"><img style="padding: 6px 8px 8px 0px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAYAAAAiYZ4HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA01pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwRkI5RTFGQTNFQTExRTE4NTAyOTM2Q0Y4OTkzN0MzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwRkI5RTIwQTNFQTExRTE4NTAyOTM2Q0Y4OTkzN0MzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTBGQjlFMURBM0VBMTFFMTg1MDI5MzZDRjg5OTM3QzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTBGQjlFMUVBM0VBMTFFMTg1MDI5MzZDRjg5OTM3QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6jeHhlAAAAaklEQVR42pSS0Q2AIAxEizvoZjqFi2knkyXqQUJihLTHJY+/1ysEMbMLrEAYylHygH1GaLnBNiOEbSPBbfOEYVskdG3JqkYlg3MRPqlCrqRtpUjI4GAvreyzdlM9Qdmv4U79C+HUL68AAwBh/ES+tx65fgAAAABJRU5ErkJggg==" /><div class="text">Play</div><div class="clear"></div></a><div class="separator"></div></li>'+
							'<li class="bar-item pause" data-item="pause"><a href="#"><img style="padding: 6px 8px 8px 0px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA01pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY3REEyMDVDQTM0MjExRTFBNTBEODZDQTk1NDJCQkFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY3REEyMDVEQTM0MjExRTFBNTBEODZDQTk1NDJCQkFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjdEQTIwNUFBMzQyMTFFMUE1MEQ4NkNBOTU0MkJCQUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjdEQTIwNUJBMzQyMTFFMUE1MEQ4NkNBOTU0MkJCQUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7poMa/AAAAHUlEQVR42mL8DwQMqIARSqOIM44qHFVIe4UAAQYAUI5P0QnNe/0AAAAASUVORK5CYII=" /><div class="text">Pause</div><div class="clear"></div></a></li><div class="separator"></div>'+
                            '<li id="fps"><div class="text"></div><div class="separator"></div></li>'+
                            '<li class="bar-item frame" data-item="frame">'+
                            	'<img style="padding: 11px 8px 8px 0px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA01pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTFEMDA1QTM0MzExRTE4REU2OTU4OUVCOUVCRUJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAwRTFEMDA2QTM0MzExRTE4REU2OTU4OUVCOUVCRUJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDBFMUQwMDNBMzQzMTFFMThERTY5NTg5RUI5RUJFQkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDBFMUQwMDRBMzQzMTFFMThERTY5NTg5RUI5RUJFQkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz75G/w3AAAAV0lEQVR42mL8//8/Aw6AUwIGGHFpVlBQwKv5wYMHDEwMFAB0mwk6FegiuM0s2CTwORUZUORsFmSnoptMyEUU2Uyxs0kCQK8xDryzQYnkPzHqBpdmgAADAKzfJ6rbwMyYAAAAAElFTkSuQmCC" />'+
                                '<div>'+
                                	'<div class="text">Frame</div><div class="frames-amount">1</div>'+
                                    '<div class="clear"></div>'+
                                    '<div class="forward">'+
                                    	'<a href="#" data-frames="1" style="margin-right: 10px;">Forward 1</a>'+
                                        '<a href="#" data-frames="10">Forward 10</a>'+
                                        '<div class="clear"></div>'+
                                    '</div>'+
                                '</div>'+
                            '</li>'+
                        '</ul>';

    /*********** Extends ***********/
    Crafty.debugBar['fps_previous'] = [];

    Crafty.debugBar['_computeFPS'] = function() {
            if (Crafty.debugBar.fps_previous.length > 60) {
                Crafty.debugBar.fps_previous.splice(0, 1);
            }
            var start = (new Date).getTime();
            Crafty.debugBar.fps_previous.push(start);
            var sum = 0;

            for (var id = 0; id < Crafty.debugBar.fps_previous.length - 1; id++) {
                sum += Crafty.debugBar.fps_previous[id + 1] - Crafty.debugBar.fps_previous[id];
            }

            var diff = 1000.0 / (sum / Crafty.debugBar.fps_previous.length);

            $('#fps .text').html(diff.toFixed() + " fps");
    }


    /*********** Renders ***********/
    

    Crafty.debugBar.renders['renderFramesView'] = function(e) {
        //$('#crafty-debug #assets-box .list ul#assets-box-list').append('<li>'+e.key+'</li>');
    };

    /*********** Events ***********/

    Crafty.bind("EnterFrame", function(e){
        Crafty.debugBar._computeFPS();
        $('#crafty-debug ul.frames .frame .frames-amount').html(e.frame);
    });

    $('#crafty-debug ul.frames .forward a').live('click', function(e){
    	var amount = $(this).data('frames');
    	Crafty.timer.simulateFrames(amount);
    });

	$('#crafty-debug ul.frames .bar-item.play, #crafty-debug ul.frames .bar-item.pause').live('click', function(){
		Crafty.pause();
		if (Crafty.isPaused()) {
			$('#fps').hide();
			$('#crafty-debug ul.frames .bar-item.play').show();
		} else {
			$('#fps').show();
			$('#crafty-debug ul.frames .bar-item.pause').show();
		}
		$(this).hide();
	});


    
    /*********** Register Panel ***********/

    Crafty.debugBar.registerPanel({
        'name' : 'frames',
        'description' : 'Frames per second',
        'styles': styles,
        'panelBox' : framesMenu,
    });

})();                                                                  

