/**
 * 城市选择控件
 * 先创建界面，再添加事件
   作者：吴中旺。
   1.1版本
 */
$(function(){
	var input={};
	var div=[
	         '<div class="row citypicker" style="background:#ffffff;width:300px;margin-left: 10px;display: none;position:absolute; ;z-index: 9999">',
             '<div class="portlet-body">',
                         '<ul class="nav nav-tabs"><li class="active"><a href="#provincedata" id="toprovince"  data-toggle="tab"> 省份 </a>  </li>',
                         '<li>  <a href="#citydata" id="tocity" data-toggle="tab"> 城市 </a>',
                           '</li>  <li>  <a href="#areadata" id="toarea" data-toggle="tab"> 区县 </a> </li>  </ul>',
                        ' <div class="tab-content">',
                            ' <div class="tab-pane fade active in" id="provincedata">',
                               '   <button name="310000" class=" btn btn-success col-sm-2">上海</button>',
                                '     <button name="320000" class="btn btn-success col-sm-2">江苏</button>',
									'   <button name="420000" class="btn btn-success col-sm-2">湖北</button>',
									  ' <button name="330000" class="btn btn-success col-sm-2">浙江</button>',
									   '<button name="120000" class=" btn btn-success col-sm-2">天津</button>',
								      ' <button name="110000" class="  btn btn-success col-sm-2">北京</button>',
								        '<button name="810000" class="btn btn-success col-sm-2">香港</button>',
								        '   <button name="500000" class="btn btn-success col-sm-2">重庆</button>',
										' <button name="460000" class="btn btn-success col-sm-2">海南</button>',
										' <button name="410000" class="btn btn-success col-sm-2">河南</button>',
										  ' <button name="510000" class="btn btn-success col-sm-2">四川</button>',
										 '<button name="650000" class="btn btn-success col-sm-2">新疆</button>',
										' <button name="150000" class="btn btn-success col-sm-2">内蒙古</button>',
										  ' <button name="540000" class="btn btn-success col-sm-2">西藏</button>',
										 '<button name="360000" class="btn btn-success col-sm-2">江西</button>',
									'<button name="710000" class="btn btn-success col-sm-2">台湾</button>',
								       '<button name="340000" class="btn btn-success col-sm-2">安徽</button>',
										 '<button name="520000" class="btn btn-success col-sm-2">贵州</button>',
										  '<button name="210000" class="btn btn-success col-sm-2">辽宁</button>',
										  '<button name="820000" class="btn btn-success col-sm-2">澳门</button>',
										' <button name="220000" class="btn btn-success col-sm-2">吉林</button>',
										 ' <button name="620000" class="btn btn-success col-sm-2">甘肃</button>',
										  '<button name="450000" class="btn btn-success col-sm-2">广西</button>',
										 '<button name="130000" class="btn btn-success col-sm-2">河北</button>',
											'<button name="370000" class="btn btn-success col-sm-2">山东</button>',
										  ' <button name="430000" class="btn btn-success col-sm-2">湖南</button>',
										 '<button name="140000" class="btn btn-success col-sm-2">山西</button>',
									      '<button name="440000" class="btn btn-success col-sm-2">广东</button>',
										 '<button name="230000" class="btn btn-success col-sm-2">黑龙江</button>',
										 '<button name="610000" class="btn btn-success col-sm-2">陕西</button>',
										 '<button name="530000" class="btn btn-success col-sm-2">云南</button>',
										'<button name="640000" class="btn btn-success col-sm-2">宁夏</button>',
										 '<button name="350000" class="btn btn-success col-sm-2">福建</button>',
										' <button name="630000" class="btn btn-success col-sm-2">青海</button>',
								   '</div> <div class="tab-pane fade" id="citydata">  </div>  <div class="tab-pane fade" id="areadata">',
                              '  </div>  </div> </div>  </div>'
	         ];
	$('body').append(div.join(''));
	$(document).click(function(event){
	    var _con = $(".citypicker");
	   // console.log(event.target.className);
	    if(event.target.className.indexOf("cityinput")==-1){
	    	if(!_con.is(event.target) && (_con.has(event.target).length ==0)){
		    	 
		        _con.hide();
		        
		    }
	    }else{	    	 
	    	var left=$(event.target).offset().left;
			var top=$(event.target).offset().top;
			//console.log(left+"---"+top+"---");
			_con.css("left",left+"px").css("top",(top+35)+"px");
			input=$(event.target);
			//console.log(_con.offset())
			_con.show();			
	    }
	    
	});
	var province,city,area;
	var citys={};
	$(".citypicker #provincedata button").click(function(){
		var b=$(this);
		province=b.text();
		 input.val(province);
		citys.province=b.attr("name");
		citys.provinceName=province;
		input.attr("alt",JSON.stringify(citys));
		 $(".citypicker #tocity")[0].click();
		 $("#citydata").html("数据查询中,请稍后.......");
		$.get("../../base/getCity.do",{"code":b.attr("name")},function(data){
			var html="";
			 $.each(data,function(i,v){
				html+="<button name='"+v.code+"' class='btn btn-success col-sm-3' >"+v.simple_name+"</button> ";
			});
			$(".citypicker #citydata").html(html);
			
			
			
		},"json");
		
	});
	$(".citypicker #citydata").delegate("button","click",function(){
		var b2=$(this);
		$(".citypicker #toarea")[0].click();
		city=b2.text();
		
		input.val(province+"-"+city);
		 
		citys.city= b2.attr("name");
		citys.cityName=city;
		input.attr("alt",JSON.stringify(citys));
		 $("#areadata").html("数据查询中,请稍后.......");
		 $.get("../../base/getCity.do",{"code":b2.attr("name")},function(data){
				var html2="";
				$.each(data,function(i,v){
					html2+="<button name='"+v.code+"' class='btn btn-success col-sm-3' >"+v.simple_name+"</button> ";
				});
				$(".citypicker #areadata").html(html2);
				
				
			},"json");
		 
	});
	$(".citypicker #areadata ").delegate("button","click",function(){
		var b3=$(this);
		area=b3.text();
		citys.area=b3.attr("name");
		citys.areaName= area;
		input.val(province+"-"+city+"-"+area);
		input.attr("alt",JSON.stringify(citys));
		
		//console.log(input.attr("alt"));
		  $(".citypicker").hide();
		 $("#toprovince")[0].click();
		 input.focus();
	});
	
});