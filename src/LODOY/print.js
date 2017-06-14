 var LODOP=null;
 // var dicts=window.opener.parent.getDicts();
    function CreateFullBill(){
			
	 		// if(w != null){
				// console.log(w);

			LODOP.PRINT_INITA(-8,-9,1060,572,"光影供应链运单打印");
			LODOP.ADD_PRINT_SETUP_BKIMG("<img border='0' src='static/login/mian.jpg'>");
			LODOP.SET_SHOW_MODE("BKIMG_LEFT",55);
			LODOP.SET_SHOW_MODE("BKIMG_WIDTH","241.56mm");
			LODOP.SET_SHOW_MODE("BKIMG_HEIGHT","138.11mm");
			LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW",true);
			
			LODOP.ADD_PRINT_TEXT(98,193,105,25,"电饭锅");
			// if(w.customerCode!=null){

				LODOP.ADD_PRINT_TEXT(103,390,100,20,"电饭锅");
			// }
			LODOP.ADD_PRINT_TEXT(149,363,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(179,144,55,20,"电饭锅");
			// if(w.pickupCity!=null){
				 
				LODOP.ADD_PRINT_TEXT(179,223,46,20,"电饭锅");
			// }
			LODOP.ADD_PRINT_TEXT(180,289,60,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(202,168,347,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(252,195,120,40,"电饭锅");
			// if(w.receiveCustomerCode!=null){
            //
			// 	LODOP.ADD_PRINT_TEXT(248,393,100,20,w.receiveCustomerCode);
			// }
			LODOP.ADD_PRINT_TEXT(294,356,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(296,156,100,20,"电饭锅");
			
			LODOP.ADD_PRINT_TEXT(323,149,63,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(324,223,54,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(324,295,58,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(350,168,367,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(391,165,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(390,400,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(421,176,115,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(421,400,100,20,"电饭锅");
			// LODOP.ADD_PRINT_TEXT(450,200,100,20,dicts.getName("VALUEADDED_PACKAGE_TYPE","电饭锅"));
			LODOP.ADD_PRINT_TEXT(446,400,100,20,"电饭锅");
			//LODOP.ADD_PRINT_TEXT(244,588,100,20,"计费重量");
		//LODOP.ADD_PRINT_TEXT(273,572,100,20,"费率");
			LODOP.ADD_PRINT_TEXT(303,571,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(350,568,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(113,590,58,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(141,588,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(177,587,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(212,587,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(109,783,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(142,782,100,20,"电饭锅");
			// if(w.pickupFee!=null)
			LODOP.ADD_PRINT_TEXT(185,781,100,20,"送货费："+"电饭锅");
			
			// if(w.packingPrice!=null)
			LODOP.ADD_PRINT_TEXT(207,781,100,20,"打包价："+"电饭锅");
			
			// if(w.inWarehouseFee!=null)
			LODOP.ADD_PRINT_TEXT(165,782,100,20,"入仓费："+"电饭锅");
			// if(w.paymentType=='CH'){
				LODOP.ADD_PRINT_TEXT(274,704,100,20,"√现付");
			// }else if(w.paymentType=='RB'){

				LODOP.ADD_PRINT_TEXT(344,704,100,20,"√回单付");
			// }else if(w.paymentType=='DB'){

				LODOP.ADD_PRINT_TEXT(325,704,100,20,"√月结");
			// }
			
			LODOP.ADD_PRINT_TEXT(295,798,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(488,508,273,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(484,789,100,20,"电饭锅");
			// if(w.businessType=='STOCK_ALLOCATE'){

				LODOP.ADD_PRINT_TEXT(492,140,100,20,"√");
			// }else if(w.businessType=='NORMAL'){

				LODOP.ADD_PRINT_TEXT(488,292,100,20,"√");
			// }else if(w.businessType=='RETURN'){
               LODOP.ADD_PRINT_TEXT(492,431,100,20,"√");
			// }else if(w.businessType=='RC'){
               LODOP.ADD_PRINT_TEXT(1492,470,100,20,"√普货");
			// }
			LODOP.ADD_PRINT_TEXT(44,580,100,20,"电饭锅");
			LODOP.ADD_PRINT_TEXT(42,674,100,20,"电饭锅");
	 		// }else{
	 		// 	bootbox.alert("运单信息不存在");
	 		// }
		}
