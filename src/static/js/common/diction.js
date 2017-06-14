/**
 查询到数据字典数据，并提供相应的函数
*/
var dicts={
		data:{},
		outfieldOrg:[],
		setOptions:function(bianma,obj,length){
			
		 if(bianma!='')
			{
			 if(length==null){
				 length=0;
			 }
			  if(obj.length>0){
				  obj[0].options.length=length;	
					 var list=this.data[bianma];
					 
					  for(var i=0;i<list.length;i++){
						  obj[0].options[i+length]=new Option(list[i].name,list[i].bianma);
					 } 
			  }
			 
			  
			
			}
			 
		},
		getName:function(bianma,value){
			
			var name="";
			if(bianma!='')
			{
				var list=this.data[bianma];
				for(var i=0;i<list.length;i++){
					if(list[i].bianma==value){
						name=list[i].name;
						break;
					}
				}	
			} 
			
			return name;
		},getData:function(bianma){
			 return this.data[bianma];
		}
};

$.get("dictionaries/list",{date:new Date().getTime()},function(d){
	dicts.data=d;
},"json");

$.get("base/getCurrentUserInfo.do",{"date":new Date().getTime()},function(m){
  	if(m != null){
  		dicts.user=m;
  	} 
   },"json");
$.get("base/outfieldDepartment.do",function(d){
	dicts.outfieldOrg=d;

},"json");
function getDicts(){
	return dicts;
}