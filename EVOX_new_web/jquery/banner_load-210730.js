  $(document).ready(function(){
     var pathname = window.location.pathname;
      var navtop3 = $("#header").outerHeight();
      var bannertop = $("#navbar").outerHeight();
      $("#navbar").css("top","0px");
      var bannertop = bannertop + navtop3;
              if(location.pathname == "/tw/contact-us" || location.pathname == "/tw/pricing" || location.pathname == "/tw/solutions/digital-transformation" || location.pathname == "/tw/submit-ticket/"){
                $("#bannerloading").html("");
                // 非不得已，修改聯絡我們沒有banner
                $("#header").css("top","0px");
                $("#content").css("padding", navtop3 + "px 0 0 0");
                // $("#content").css("margin","0px auto 0 auto");
                // $("#content").css("padding",navtop3 + bannertop + "px 0 0 0");
              }
              // else if(location.pathname == "/tw/pricing" || location.pathname == "/tw/solutions/teleworking"){
              //   window.onscroll = function() {scrollFunction()};
              //   var navtop3 = $("#header").outerHeight();
              //   var bannertop = $("#navbar").outerHeight();
              //   $("#header").css("top", bannertop+"px");
              //   $("#content").css("padding",navtop3 + bannertop + "px 0 0 0");
              //   $("#bannerloading").html("<div id='navbar' class='web-notification-banner'><p>防疫期間，EVOX 與企業攜手共度難關，六月底前申辦享專案折扣！<a href='/tw/contact-us'>立即聯絡 </a></p></div>");
              // }
              else{
                 window.onscroll = function() {scrollFunction();};
                $("#bannerloading").html("<div id='navbar' class='web-notification-banner'><p>EVOX 如何幫助企業跨出數位轉型第一步？<a class='' href='/tw/solutions/digital-transformation'>了解更多  </a> </p></div>");
                // $("#bannerloading").html("<div id='navbar' class='web-notification-banner'><p>【線上講堂】有感提升你的顧客體驗！<a class='' href='https://blog.evoxglobal.com/tw/exhibition-seminar/evox-connect-webinar'>立即參加 </a> </p></div>");
                // $("#header").css("top", bannertop+"px");
                // $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
                // $("#content").css("padding",navtop3+"px 0 0 ");
                // $("#header").css("top", bannertop+"px");
                // $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
              }; 
              
              var navtop3 = $("#header").outerHeight();
              var bannertop = $("#navbar").outerHeight();
              console.log("子頁網址：" + pathname);
              console.log("header高度：" + navtop3);
              console.log("Banner高度：" + bannertop);
              $("#header").css("top", bannertop+"px");
              $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
              
  });
    $( window ).on("resize", function() {
     var pathname = window.location.pathname;
      var navtop3 = $("#header").outerHeight();
      var bannertop = $("#navbar").outerHeight();
      var bannertop = bannertop + navtop3;
              if(location.pathname == "/tw/contact-us" || location.pathname == "/tw/pricing" || location.pathname == "/tw/solutions/digital-transformation" || location.pathname == "/tw/submit-ticket/"){
                $("#bannerloading").html("");
                // 非不得已，修改聯絡我們沒有banner
                $("#header").css("top","0px");
                $("#content").css("padding", navtop3 + "px 0 0 0");
                // $("#content").css("margin","0px auto 0 auto");
                // $("#content").css("padding",navtop3 + bannertop + "px 0 0 0");
              }
              // else if(location.pathname == "/tw/pricing" || location.pathname == "/tw/solutions/teleworking"){
              //   // var navtop3 = $("#header").outerHeight();
              //   // var bannertop = $("#navbar").outerHeight();
              //   window.onscroll = function() {scrollFunction();};
              //   $("#bannerloading").html("<div id='navbar' class='web-notification-banner'><p>防疫期間，EVOX 與企業攜手共度難關，六月底前申辦享專案折扣！<a href='/tw/contact-us'>立即聯絡 </a></p></div>");
              //   $("#header").css("top", bannertop+"px");
              //   $("#content").css("padding",navtop3 + bannertop + "px 0 0 0");
              // }
              else{
                // window.onscroll = function() {scrollFunction();};
                $("#bannerloading").html("<div id='navbar' class='web-notification-banner'><p>EVOX 如何幫助企業跨出數位轉型第一步？<a class='' href='/tw/solutions/digital-transformation'>了解更多  </a> </p></div>");
                
                // $("#bannerloading").html("<div id='navbar' class='web-notification-banner'><p>【線上講堂】有感提升你的顧客體驗！<a class='' href='https://blog.evoxglobal.com/tw/exhibition-seminar/evox-connect-webinar'>立即參加 </a> </p></div>");
                // $("#header").css("top", bannertop+"px");
                // $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
                // $("#content").css("padding",navtop3+"px 0 0 ");
                // $("#header").css("top", bannertop+"px");
                // $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
              }; 
              
              var navtop3 = $("#header").outerHeight();
              var bannertop = $("#navbar").outerHeight();
              console.log("子頁網址：" + pathname);
              console.log("header高度：" + navtop3);
              console.log("Banner高度：" + bannertop);
              $("#header").css("top", bannertop+"px");
              $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
              
  });
    function scrollFunction() {
        var pathname = window.location.pathname;
       var navtop3 = $("#header").outerHeight();
       var bannertop = $("#navbar").outerHeight();
       var headertop = $("#header").offset().top;
                  if(headertop > 100){
                    // console.log("高度小於80了！");
                    $("#navbar").css("top","-120px");
                    $("#navbar").css("z-index","-9999");
                    $("#header").css("top","0px");
                    $("#content").css("padding",navtop3+"px 0 0 0");     
                  }
                  if(headertop < 38){
                    $("#header").css("top", bannertop+"px");
                    $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
                    $("#navbar").css("top","0px");
                    $("#navbar").css("z-index","10");
                    // $("#header").css("top", bannertop+"px");
                    // $("#content").css("padding",navtop3 + bannertop + "px 0 0 0");
                  }
                  // console.log("子頁網址：" + pathname);
                  // console.log("header高度：" + navtop3);
                  // console.log("Banner高度：" + bannertop);
    }

