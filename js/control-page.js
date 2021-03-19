
$(document).ready(function(){
						   
   calendarBl();
   banerTop();
   //menuLict();
   flagsList();
   counterShop();
   
   popUp_Wind();
   popUp_Color();
   
   userMenu();
   buttUp();
   
   
  // packageBoxInform();
 
   
   
   
   
   function calendarBl(){
		
		$('#widgetField').on("click", function(){
				 opn($(this));
			 });
		
		//$('.calendarDate').live({
		$('.calendarDate').on("mouseleave",function(){  
				 $('.calendarDate').removeClass('active');
				 $('.infBl-calendar-box').find('#widgetCalendar').fadeOut(300);
			 });

		function opn(th){
			 if($('.calendarDate').hasClass('active')){
				 $('.calendarDate').removeClass('active');
				 $('.infBl-calendar-box').find('#widgetCalendar').fadeOut(300);
				 
			 }else{
				 $('.calendarDate').addClass('active');
				 $('.infBl-calendar-box').find('#widgetCalendar').fadeIn(300);
			 }
		}
	
   }
   
   
   
   
   function counterShop(){
	   
	   	$('.counter-shop .counter-text').bind("change keyup input click", function() {
		   if (this.value.match(/[^0-9]/g)) {
			   this.value = this.value.replace(/[^0-9]/g, '');
		   }
		});
		
		var textInf = '';
	   
	   	$('.butt-counter-more').on("click",function(){	 
				textInf = $(this).parents('.counter-shop').find('.counter-text').val();
				textInf++;
				$(this).parents('.counter-shop').find('.counter-text').val(textInf);
				
		    });	
		
		$('.butt-counter-less').on("click",function(){	
			    textInf = $(this).parents('.counter-shop').find('.counter-text').val();
				if(textInf > 1){
				   textInf--;
				   $(this).parents('.counter-shop').find('.counter-text').val(textInf);
				}
		    });
   }
   
   
   
   
   function userMenu(){
	    var ind = 0;
	   	$('.user-menu-list ul li').on("click",function(){	 
			    
				$(this).parents('ul').find('li').removeClass('active');
				$(this).addClass('active');
				ind = $(this).index();
				
				$('.user-inform-data .uid').removeClass('active');
				$('.user-inform-data .uid').eq(ind).addClass('active');
			    
		    });
   }
   
   
   
   
   function packageBoxInform(){
	   
	    var timeEffect = 300;
	   
	   	$('.packageBox').live({  
		    mouseover: function(){
				
				$('.sliderPackage .iosSlider').css('overflow','visible');
				$(this).stop(true);
				$(this).find('.popUp-inf').fadeIn(timeEffect);
				 
		    },
			mouseout: function(){	
			
			    $('.sliderPackage .iosSlider').css('overflow','hidden');
			    $(this).find('.popUp-inf').fadeOut(timeEffect);
			 
		    }
	    });
	   
   }
   
   
   
   
   function flagsList(){
	   
	    var classDefault = '', classActive = '';
		
	   	$('.flagsDefault').on("click",function(){	 
			
				 if($(this).parents('.flags__bl').hasClass('active')){
					 $(this).parents('.flags__bl').removeClass('active');
			     }else{
					 $(this).parents('.flags__bl').addClass('active');
			     } 
		    });
		
		$('.flags__bl ul li a').on("click",function(){	 
			     
				 $(this).parents('.flags__bl').removeClass('active');

				 classDefault = $(this).parents('.flags__bl').find('.flagsDefault a').attr('class');
				 classActive = $(this).attr('class');

				 $(this).parents('.flags__bl').find('.flagsDefault a').attr('class', classActive);
				 $(this).attr('class', classDefault); 
		    });
				
		/*
		$(document).click(function(e){
	         if(!$(e.target).filter('.flags__bl').hasClass('active')){
				
				$(this).parents('.flags__bl').removeClass('active');
				
	         }     
	    });
		*/
				
   }
   



   function menuLict(){ 
	    var ind = 0;
	   	$('.menuLict ul li').live({  
		    click: function(){	 
				 $(this).parents('ul').find('li').removeClass('active');
				 $(this).addClass('active');
				 
				 ind = $(this).index();
		    }
	    });			
   } 
   
   
   
   
   function banerTop(){ 
	    var ind = 0;
	   	$('.close-banerTop a').on("click",function(){	 
				
				$(this).parents('.advertisingField').remove();
				
		    });			
   } 
  
  
  
  
  
   function popUp_Wind(){
	   
	   	$('.item-packageBox').on("click", function(){	 
				 $('.popUp__wind').addClass('active');
		    });	
	   
	   	$('.popUp__wind .butt-close').on("click",function(){	 
				 $(this).parents('.popUp__wind').removeClass('active');
		    });	

		$(document).click(function(e){
	         if($(e.target).filter('.popUp__wind').hasClass('active')){
				 $('.popUp__wind').removeClass('active');
	         }     
	    });	
   }
   
   
   
   
   function popUp_Color(){
	   
	   	$('.footer .foot-ic').on("click",function(){	 
				 $('.popUp__color').addClass('active');
		    });	

	   	$('.popUp__color .butt-close').on("click",function(){	 
				 $(this).parents('.popUp__color').removeClass('active');
		    });	

		$(document).click(function(e){
	         if($(e.target).filter('.popUp__color').hasClass('active')){
				 $('.popUp__color').removeClass('active');
	         }     
	    });	
   }
   
   
   
   
   function buttUp(){
	   	$('.butt-up').on("click",function(){	 
				$('body,html').animate({scrollTop: 0}, 500);
		    });	
   }





});
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   
						   