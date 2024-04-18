// TO DO 完成前整合進同一個文件

	// page-loader start  
	// --------------------------------------------------------------------------

	// pageLoading({

	// 	  // background color of the progress bar
	// 	  barColor:'#58B805',

	// 	  // top position of the progress bar
	// 	  barTop:'50%',

	// 	  // top position of the percentage text
	// 	  textTop:'55%', 

	// 	  // background color of the loading overlay
	// 	  backColor:'rgba(245, 245, 245, 1)',

	// 	  // background color of the progress bar
	// 	  backBarColor:'#D9EFBE', 

	// 	  // text inside the progress bar
	// 	  text:'Loading <b>{process} %</b>',

	// 	  // show of hide the percentage text
	// 	  textVisible:true, 

	// 	  loadOut:true  
		  
	// });

$(document).ready(function(){		
	
	// --------------------------------------------------------------------------

	

	// // Add smooth scrolling to all links
	//  $("a").on('click', function(event) {
	 	
	//  	// let hash=window.location.hash;
	//  	// window.location.hash = hash;
	//  // Make sure this.hash has a value before overriding default behavior
	// 	    if (this.hash !== "") {
	// 	        // Prevent default anchor click behavior
	// 	        event.preventDefault();
	//              // Store hash
	// 	        var hash = this.hash;
	// 	        // var hash = window.location.hash.substr(1);
	// 	        console.log('Hash:'+hash);
	// 	        var windowsize = $window.width();
	// 		 	var hashHight = Math.floor($(hash).offset().top);
	// 			var innerHeight = Math.floor($('.header-inner').height());
	// 			var intinnerHight = parseInt(innerHeight);
	// 			var inthashHight = parseInt(hashHight);
	// 			var totalHight = inthashHight - intinnerHight;
	// 			console.log('hashHight:'+hashHight);
	// 			console.log('innerHeigh'+ innerHeight);
	// 			console.log('滑動高度：'+ totalHight);
		        
	// 	        // Using jQuery's animate() method to add smooth page scroll
	// 	       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		        
	// 	        // $( 'html, body' ).scrollTop( 300 );
	// 	        // console.log('滑動高度：'+ $(hash).offset().top + innerHeigh - 120);
	// 	        if (windowsize < 460) {
	//         		// console.log("手機視窗");
	//         		$('html, body').stop().animate({
	// 	            scrollTop: totalHight
	// 	            }, 800, function() {
	// 	                    // Add hash (#) to URL when done scrolling (default click behavior)
	// 			            window.location.hash = hash;
	// 			    });
	//         	}else{
	//         		$('html, body').animate({
	// 	            scrollTop: $(hash).offset().top
	// 	            }, 800, function() {
	// 	                    // Add hash (#) to URL when done scrolling (default click behavior)
	// 			            window.location.hash = hash;
	// 			    });
	//         	}
		        
	// 		} // End if
	// 	});

	$("a[href^='#']").click(function(e) {
				e.preventDefault();
				
				var position = $($(this).attr("href")).offset().top;

				$("body, html").animate({
					scrollTop: position
				}, 800 /* speed */ );
			});
	// --------------------------------------------------------------------------

	// 移除浮水印 (TO DO Lincense)
	
	// Initialising fullPage.js
	// new fullpage('#fullpage', {
	//   navigation: true,
	  
	//   // Required for ScrollMagic to work
	//   scrollBar: true
	// });
	// fullpage

	new fullpage('#fullpage', {
		navigation: false,
		sectionSelector: '.section',
    	scrollOverflow: true
		// verticalCentered: true,
		paddingTop: '0px',
		// anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fivePage','sixPage','sevenPage','eighthPage','nicePage','partnerPage', 'industryPage','footerPage'],
		// menu: '#myMenu',
		// Required for ScrollMagic to work
	  	scrollBar: true,
	  	offsetSections: true,
		offsetSectionsKey: 'Y29kZXBlbi5pb196MDZiMlptYzJWMFUyVmpkR2x2Ym5NPWhPNA==',
        responsiveWidth: 640,
        licenseKey: 'L60V6-99ML8-TK29I-13J58-KMNQQ'
	});

	// --------------------------------------------------------------------------

	// ScrollMagic
	var controller = new ScrollMagic.Controller()

	// --------------------------------------------------------------------------

	// section 0 trigger
	var zero = new ScrollMagic.Scene({
	  triggerElement: '#home',
	  duration: "100%",
	})
	// .setClassToggle('.fullpage', 'background-section0')
	.setClassToggle('.image-box-0', 'image-change');
	
	// .addTo(controller);


	// section 0 dot-menu hide trigger
	var zerodotmenuhide = new ScrollMagic.Scene({
	  triggerElement: '#home',
	  duration: "100%",
	})

	.setClassToggle('.dot-menu', 'dot-hide');
	// .addTo(controller);


	// section 0 mouse trigger
	var zeromouse = new ScrollMagic.Scene({
	  triggerElement: '#home',
	  duration: "100%",
	})
	.setClassToggle('.mouse-down','mouse-scroll-active');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu00 = new ScrollMagic.Scene({
	  triggerElement: '#home',
	  duration: "100%",
	})
	.setClassToggle('.firstPage', 'active');

	controller.addScene([zero,zerodotmenuhide,zeromouse,rightdotmenu00]);

	// --------------------------------------------------------------------------
	
	// section 1 trigger
	var first = new ScrollMagic.Scene({
	  triggerElement: '#benefit',
	  duration: "100%",
	})
	.setClassToggle('.fullpage', 'background-section1');
	// .addTo(controller);

	// section hide-tittle-01 trigger
	var sevencontent = new ScrollMagic.Scene({
	  triggerElement: '#benefit',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-01 trigger
	var dropmenu01 = new ScrollMagic.Scene({
	  triggerElement: '#benefit',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu01 = new ScrollMagic.Scene({
	  triggerElement: '#benefit',
	  duration: "100%",
	})
	.setClassToggle('.secondPage', 'active');
	

	// $(window).location.hash = '#section99';

	

	controller.addScene([first,sevencontent,dropmenu01,rightdotmenu01]);

	// --------------------------------------------------------------------------

	// section 2 trigger
	var second = new ScrollMagic.Scene({
	  triggerElement: '#save-carbon',
	  duration: "100%",
	})

	// .setClassToggle('.fullpage', 'background-section2')
	.setClassToggle('.image-box-1', 'image-change');	
	// .addTo(controller);

	// section hide-tittle-02 trigger
	var sevencontent2 = new ScrollMagic.Scene({
	  triggerElement: '#save-carbon',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-02 trigger
	var dropmenu02 = new ScrollMagic.Scene({
	  triggerElement: '#save-carbon',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu02 = new ScrollMagic.Scene({
	  triggerElement: '#save-carbon',
	  duration: "100%",
	})
	.setClassToggle('.thirdPage', 'active');

	controller.addScene([second,sevencontent2,dropmenu02,rightdotmenu02]);

	// --------------------------------------------------------------------------

	// section 3 trigger
	var third = new ScrollMagic.Scene({
	  triggerElement: '#global-operation',
	  duration: "100%",
	})
	
	// .setClassToggle('.fullpage', 'background-section3')
	.setClassToggle('.image-box-2', 'image-change');
	// .addTo(controller);

	// section hide-tittle-03 trigger
	var sevencontent3 = new ScrollMagic.Scene({
	  triggerElement: '#global-operation',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-03 trigger
	var dropmenu03 = new ScrollMagic.Scene({
	  triggerElement: '#global-operation',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu03 = new ScrollMagic.Scene({
	  triggerElement: '#global-operation',
	  duration: "100%",
	})
	.setClassToggle('.fourthPage', 'active');

	controller.addScene([third,sevencontent3,dropmenu03,rightdotmenu03]);

	// --------------------------------------------------------------------------

	// section 4 trigger
	var four = new ScrollMagic.Scene({
	  triggerElement: '#information-security',
	  duration: "100%",
	})
	
	// .setClassToggle('.fullpage', 'background-section4')
	.setClassToggle('.image-box-3', 'image-change');
	// .addTo(controller);

	// section hide-tittle-04 trigger
	var sevencontent4 = new ScrollMagic.Scene({
	  triggerElement: '#information-security',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-04 trigger
	var dropmenu04 = new ScrollMagic.Scene({
	  triggerElement: '#information-security',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu04 = new ScrollMagic.Scene({
	  triggerElement: '#information-security',
	  duration: "100%",
	})
	.setClassToggle('.fivePage', 'active');

	controller.addScene([four,sevencontent4,dropmenu04,rightdotmenu04]);

	// --------------------------------------------------------------------------
	
	// section 5 trigger
	var five = new ScrollMagic.Scene({
	  triggerElement: '#customer-satisfaction',
	  duration: "100%",
	})
	
	// .setClassToggle('.fullpage', 'background-section5')
	.setClassToggle('.image-box-4', 'image-change');
	// .addTo(controller);

	// section hide-tittle-05 trigger
	var sevencontent5 = new ScrollMagic.Scene({
	  triggerElement: '#customer-satisfaction',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-05 trigger
	var dropmenu05 = new ScrollMagic.Scene({
	  triggerElement: '#customer-satisfaction',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu05 = new ScrollMagic.Scene({
	  triggerElement: '#customer-satisfaction',
	  duration: "100%",
	})
	.setClassToggle('.sixPage', 'active');

	controller.addScene([five,sevencontent5,dropmenu05,rightdotmenu05]);

	// --------------------------------------------------------------------------

	// section 6 trigger
	var six = new ScrollMagic.Scene({
	  triggerElement: '#increase-sales',
	  duration: "100%",
	})
	
	// .setClassToggle('.fullpage', 'background-section6')
	.setClassToggle('.image-box-5', 'image-change');
	// .addTo(controller);

	// section hide-tittle-06 trigger
	var sevencontent6 = new ScrollMagic.Scene({
	  triggerElement: '#increase-sales',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-06 trigger
	var dropmenu06 = new ScrollMagic.Scene({
	  triggerElement: '#increase-sales',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu06 = new ScrollMagic.Scene({
	  triggerElement: '#increase-sales',
	  duration: "100%",
	})
	.setClassToggle('.sevenPage', 'active');

	controller.addScene([six,sevencontent6,dropmenu06,rightdotmenu06]);

	// --------------------------------------------------------------------------

	// section 7 trigger
	var seven = new ScrollMagic.Scene({
	  triggerElement: '#business-management',
	  duration: "100%",
	})
	
	// .setClassToggle('.fullpage', 'background-section7')
	.setClassToggle('.image-box-6', 'image-change');
	// .addTo(controller);

	// section hide-tittle-07 trigger
	var sevencontent7 = new ScrollMagic.Scene({
	  triggerElement: '#business-management',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-07 trigger
	var dropmenu07 = new ScrollMagic.Scene({
	  triggerElement: '#business-management',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');	
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu07 = new ScrollMagic.Scene({
	  triggerElement: '#business-management',
	  duration: "100%",
	})
	.setClassToggle('.eighthPage', 'active');

	controller.addScene([seven,sevencontent7,dropmenu07,rightdotmenu07]);

	// --------------------------------------------------------------------------

	// section 8 trigger
	var eight = new ScrollMagic.Scene({
	  triggerElement: '#low-costs',
	  duration: "100%",
	})
	
	// .setClassToggle('.fullpage', 'background-section8')
	.setClassToggle('.image-box-7', 'image-change');
	// .addTo(controller);

	// section hide-tittle-08 trigger
	var sevencontent8 = new ScrollMagic.Scene({
	  triggerElement: '#low-costs',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-08 trigger
	var dropmenu08 = new ScrollMagic.Scene({
	  triggerElement: '#low-costs',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu08 = new ScrollMagic.Scene({
	  triggerElement: '#low-costs',
	  duration: "100%",
	})
	.setClassToggle('.nicePage', 'active');

	controller.addScene([eight,sevencontent8,dropmenu08,rightdotmenu08]);

	// --------------------------------------------------------------------------


	// section 9 客戶故事 trigger
	// var nice = new ScrollMagic.Scene({
	//   triggerElement: '#section9',
	//   duration: "100%",
	// })
	// .addTo(controller);

	// section hide-tittle-09 trigger
	var sevencontent9 = new ScrollMagic.Scene({
	  triggerElement: '#customer-story',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-09 trigger
	var dropmenu09 = new ScrollMagic.Scene({
	  triggerElement: '#customer-story',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu09 = new ScrollMagic.Scene({
	  triggerElement: '#customer-story',
	  duration: "100%",
	})
	.setClassToggle('.partnerPage', 'active');

	controller.addScene([sevencontent9,dropmenu09,rightdotmenu09]);

	// --------------------------------------------------------------------------

	// section 10 產業類別 trigger
	// var ten = new ScrollMagic.Scene({
	//   triggerElement: '#section10',
	//   duration: "100%",
	// })
	// .addTo(controller);

	// section hide-tittle-10 trigger
	var sevencontent10 = new ScrollMagic.Scene({
	  triggerElement: '#industries',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-10 trigger
	var dropmenu10 = new ScrollMagic.Scene({
	  triggerElement: '#industries',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu10 = new ScrollMagic.Scene({
	  triggerElement: '#industries',
	  duration: "100%",
	})
	.setClassToggle('.industryPage', 'active');

	controller.addScene([sevencontent10,dropmenu10,rightdotmenu10]);

	// --------------------------------------------------------------------------

	// section 11 Footer trigger
	var eleven = new ScrollMagic.Scene({
	  triggerElement: '#contact-us',
	  duration: "100%",
	})
	.setClassToggle('.dot-menu', 'dot-hide')
	.addTo(controller);

	// section hide-tittle-11 trigger
	var sevencontent11 = new ScrollMagic.Scene({
	  triggerElement: '#contact-us',
	  duration: "100%",
	})
	// 隱藏header選單
	.setClassToggle('.moveable-menu', 'header-hide');
	// .addTo(controller);

	// section show-drop-menu-11 trigger
	var dropmenu11 = new ScrollMagic.Scene({
	  triggerElement: '#contact-us',
	  duration: "100%",
	})
	//顯示條
	.setClassToggle('.header-menu-show', 'move-menu-down');
	// .addTo(controller);

	// 左側選單顯示
	var rightdotmenu11 = new ScrollMagic.Scene({
	  triggerElement: '#contact-us',
	  duration: "100%",
	})
	.setClassToggle('.footerPage', 'active');

	controller.addScene([eleven,sevencontent11,dropmenu11,rightdotmenu11]);

	
	// --------------------------------------------------------------------------

	

	// image-resize

		// 定義
		var $window = $(window);
		var $rotationBox = $('#rotation');
		// 視窗變形
		$window.bind('resize', function(){
    
		    if ($rotationBox.hasClass('hide')){
		      $rotationBox.css({top: -1 * $window.height()});
		    }
		    
		    $('.bg-top').each(function(){
		      resizeImages($(this));
		    });

		    $('.mobile-bg-top').each(function(){
		      mobileresizeImages($(this));
		    });
	    
	  });

	// 確認 browser 尺寸

		function checkWidth() {
	        var windowsize = $window.width();
	        if (windowsize < 460) {
	        	console.log("手機視窗");
	        }
	    }
	    // Execute on load
	    checkWidth();
	    // Bind event listener
	    $(window).resize(checkWidth);

	// 圖片處理
	  function resizeImages(images){
    
	    var newWidth = $window.width();
	    var newHeight = $window.height();

	    images.each(function(){
	      var $img = $(this);
	      $img.width(newWidth);

	      $img.css({
	        'width' : 'auto'
	      });

	      $img.height(newHeight);

	      if ($img.width() < newWidth){
	        $img.css({
	          'width' : '100%',
	          'height' : 'auto'
	        });
	        
	        if ($img.height() < newHeight){
	          $img.height(newHeight);
	        }
	      }
	    });
	  }

	  
	  function loadImages(){
	    var $images = $('.bg-top');
	    
	    $images.each(function(){
	      var $img = $(this);
	      var src = $img.attr('src');
	      
	      if ($img[0].complete){
	        resizeImages($img);
	      }else{
	        $img.load(function(){
	          resizeImages($img);
	        }).attr('src', src);
	      }
	    });
	  }
	  loadImages();

	  function mobileresizeImages(m_images){
    
	    var m_newWidth = $window.width();
	    var m_newHeight = $window.height();

	    m_images.each(function(){
	      var $m_img = $(this);
	      $m_img.width(m_newWidth);
	      
	      $m_img.css({
	      	'width' : '100%',
	        'height' : 'auto'
	        // 'width' : 'auto',
	        // 'height' : '100vh'
	      });
	      
	      $m_img.height(m_newHeight);

	      if ($m_img.height() < m_newHeight){
	        $m_img.height(m_newHeight);
	        
	        if ($m_img.width() < m_newWidth){
	          
	          $m_img.css({
	          'width' : 'auto',
	          'height' : '100%'
	        });
	        }
	      }
	    });
	  }

	  function m_loadImages(){
	    var $m_images = $('.mobile-bg-top');
	    
	    $m_images.each(function(){
	      var $m_img = $(this);
	      var msrc = $m_img.attr('src');
	      
	      if ($m_img[0].complete){
	        mobileresizeImages($m_img);
	      }else{
	        $m_img.load(function(){
	          mobileresizeImages($m_img);
	        }).attr('src', msrc);
	      }
	    });
	  }
	  m_loadImages();
	  $( ".fp-watermark" ).remove();
	});	
