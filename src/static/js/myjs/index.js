	var messageList=[];
	function getMessage(){
		$.get("base/getShowMessage.do",{date:new Date().getTime()},function(d){
			var data=d.resultData.list;
			messageList=data;
			var data2=d.resultData.tongji;
		  	$("#faqi").text(data2.faqi);
		  $("#shouli").text(data2.shouli);
		$("#count").text(data2.count);
			
			setTimeout(showMessage,500);
			 
		},"json");
	}
	function showMessage(){
		console.log(messageList);
		if(messageList.length>0){
			var obj=messageList.shift();
			console.log(obj);
			$.messager.lays(300, 200);
			$.messager.show(obj);
			//'<font color=red>'+obj.title+'</font>',
           // obj.content,
          //  obj.closeTime
		 	setTimeout(showMessage,parseInt(obj.closeTime)+2000);
			 
		}
	}
	$(function() {
		if (typeof ($.cookie('menusf')) == "undefined") {
			$("#menusf").attr("checked", true);
			$("#sidebar").attr("class", "menu-min");
		} else {
			$("#sidebar").attr("class", "");
		}
		$.messager.lays(300, 200);
		 $.messager.anim('show', 1000);
	 	
		getMessage();
		 window.setInterval(getMessage,1000*60*5);//5分钟刷新1次
		 /**
		 $.get("base/getMessageCount.do",{"date":new Date().getTime()},function(d){
			  // 使用刚指定的配置项和数据显示图表。
	 	  		
	    },"json");
		 */
  });
		function cmainFrame(){
			var hmain = document.getElementById("mainFrame");
			var bheight = document.documentElement.clientHeight;
			hmain .style.width = '100%';
			hmain .style.height = (bheight  - 51) + 'px';
			var bkbgjz = document.getElementById("bkbgjz");
			bkbgjz .style.height = (bheight  - 41) + 'px';
			
		}
		cmainFrame();
		window.onresize=function(){  
			cmainFrame();
		};
		jzts();