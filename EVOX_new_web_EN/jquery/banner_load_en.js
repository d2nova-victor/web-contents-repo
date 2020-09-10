
           $( document ).ready(function() {
            var pathname = window.location.pathname;
            var navtop3 = $("#header").outerHeight();
            var bannertop = $("#navbar").outerHeight();
            console.log(pathname);
            
              if(location.pathname == "/en/contact-us" || location.pathname == "/en/solutions/teleworking" || location.pathname == "/en/pricing"){
                $("#bannerloading").html("");
                // 非不得已，修改聯絡我們沒有banner
                $("#header").css("top","0px");
                $("#content").css("margin","0px auto 0 auto");
                // $("#content").css("padding","0px 0 0 0");
                $("#content").css("padding", navtop3 + "px 0 0 0");
              }else{
                $("#bannerloading").html("<div id='navbar' class='web-notification-banner'><p>Is your business ready for telework? <a class='' href='/en/solutions/teleworking'>Learn more </a> </p></div>");
                $("#header").css("top","52px");
                // $("#content").css("padding",navtop3+"px 0 0 ");
                $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
              }; 
              // before jun 30 event
              // if(location.pathname == "/en/pricing" || location.pathname == "/en/solutions/teleworking"){
              //   window.onscroll = function() {scrollFunction4()};
              //   $("#bannerloading").html("<div id='navbar' class='web-notification-banner'><p>EVOX is committed to helping business continuity during the outbreak with special discounts until Jun 30!<a href='/en/contact-us'> Contact us now </a></p></div>");
              //   $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
              // };
              var navtop3 = $("#header").outerHeight();
              var bannertop = $("#navbar").outerHeight();
              console.log("子頁網址：" + pathname);
              console.log("header高度：" + navtop3);
              console.log("Banner高度：" + bannertop);
              $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
            });

          // document.addEventListener('DOMContentLoaded', function(event) {
          //     if(location.pathname == "/en/contact-us"){
          //       document.getElementById("bannerloading").innerHTML = " ";
          //       // 非不得已，修改聯絡我們沒有banner
          //       document.getElementById("header").style.top = "0px";
          //       document.getElementById("content").style.margin = "0px auto 0 auto";
          //       document.getElementById("content").style.padding = "0px 0 0 0";
          //     }else{
          //       document.getElementById("bannerloading").innerHTML = "<div id='navbar' class='web-notification-banner'><p>Is your business ready for telework? <a class='' href='/en/solutions/teleworking'>Learn more </a> </p></div>";
          //       document.getElementById("header").style.top = "55px";
          //       document.getElementById("content").style.margin = "57px auto 0 auto";
          //     };
          //     if(location.pathname == "/en/pricing" || location.pathname == "/tw/solutions/teleworking"){
          //        document.getElementById("header").style.top = "55px";
          //        window.onscroll = function() {scrollFunction4()};
          //        document.getElementById("bannerloading").innerHTML = "<div id='navbar' class='web-notification-banner'><p>EVOX is committed to helping business continuity during the outbreak with special discounts until Jun 30!<a href='/en/contact-us'> Contact us now </a></p></div>";
          //     };
          //   })
            window.onscroll = function() {scrollFunction3()};
              
            // function firstFunction() {
            //   var navtop = document.getElementById("header");
            //   var topbanner = document.getElementById("navbar");
            //   // var diffheight = navtop.offsetHeight - topbanner.offsetHeight;
            //   var navtop4 = $("#navbar").outerHeight();
            //   var navtop3 = $("#header").outerHeight();
            //   var bannertop = $("#navbar").outerHeight();
            //   $("#header").css("top",navtop4+"px");
            //   $("#content").css("padding", navtop3 + bannertop + "px 0 0 0");
            //   // $("#content").css("padding",navtop4+ 23 +"px 0 0 0");
            //   // document.getElementById("header").style.top = topbanner.offsetHeight + "px";
            //   // document.getElementById("content").style.padding =  topbanner.offsetHeight  + 23 + "px 0 0 0";
            // }

            function scrollFunction3() {
              var navtop = document.getElementById("header");
              var topbanner = document.getElementById("navbar");
              // var diffheight = navtop.offsetHeight - topbanner.offsetHeight;
              var navtop4 = $("#navbar").outerHeight();
              var navtop2 = $("#header").outerHeight();
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
              $("#navbar").css("top","-120px");
              $("#header").css("top","0px");
              $("#content").css("padding",navtop2 + navtop4 + "px 0 0 0");
              // document.getElementById("navbar").style.top = "-120px";
              // document.getElementById("header").style.top = "0px";
              // document.getElementById("content").style.padding = "47px 0 0 0";
              
            } else {
              $("#navbar").css("top","0px");
              $("#header").css("top",navtop4+"px");
              // $("#content").css("top",navtop2+23+"px 0 0 0");
                // document.getElementById("navbar").style.top = "0px";
                // document.getElementById("header").style.top = topbanner.offsetHeight + "px";
                // document.getElementById("content").style.padding =  topbanner.offsetHeight + 23 + "px 0 0 0";
             
              if($(window).width() <= 480 ){
                $("#navbar").css("top","0px");
                // $("#content").css("top",navtop2+23+"px 0 0 0");
                $("#content").css("padding",navtop2 + navtop4 + "px 0 0 0");
                // document.getElementById("navbar").style.top = "0px";
                // document.getElementById("content").style.padding = navtop.offsetHeight + 23 + "px 0 0 0";
              };
            }
          }
            // }
            // before jun 30 event
          //   if(location.pathname == "/en/pricing" || location.pathname == "/en/solutions/teleworking"){
          //     window.onload=function(){
          //       var navtop = document.getElementById("header");
          //       var topbanner = document.getElementById("navbar");
          //       // var diffheight = navtop.offsetHeight - topbanner.offsetHeight +40;
          //       var navtop5 = $("#navbar").outerHeight();
          //       $("#header").css("top",navtop5+"px");
          //       // document.getElementById("header").style.top = topbanner.offsetHeight + "px";
          //       // document.getElementById("content").style.padding =  topbanner.offsetHeight + diffheight + "px 0 0 0";
          //     }

          //     function scrollFunction4() {
          //       var navtop = document.getElementById("header");
          //       var topbanner = document.getElementById("navbar");
          //       // var diffheight = navtop.offsetHeight - topbanner.offsetHeight;
          //       var navtop6 = $("#header").outerHeight();
          //       var navtop7= $("#navbar").outerHeight();

          //   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          //     $("#navbar").css("top","-120px");
          //     $("#header").css("top","0px");
          //     $("#content").css("padding",navtop6 + navtop7 + "px 0 0");
          //     // document.getElementById("navbar").style.top = "-120px";
          //     // document.getElementById("header").style.top = "0px";
          //     // document.getElementById("content").style.padding = "47px 0 0 0";
              
          //   } else {
          //     $("#navbar").css("top","0px");
          //     $("#header").css("top",navtop7+"px");
          //     // document.getElementById("navbar").style.top = "0px";
          //     // document.getElementById("header").style.top = topbanner.offsetHeight + "px";
          //     // document.getElementById("content").style.padding =  topbanner.offsetHeight + diffheight + "px 0 0 0";
            
          //     if($(window).width() <= 480 ){
          //       $("#navbar").css("top","0px");
          //       $("#header").css("top",navtop7+"px");
          //       $("#content").css("padding",navtop6 + navtop7 + "px 0 0");
          //       // $("#content").css("padding",navtop6+"px");

          //       // document.getElementById("navbar").style.top = "0px";
          //       // document.getElementById("header").style.top = topbanner.offsetHeight + "px";
          //       // document.getElementById("content").style.padding =  topbanner.offsetHeight + 23 + "px 0 0 0";
          //     };
          //   }
          // }

          //     // alert('專業管理');　//輸出値為 location.pathname: /test.html
          //     window.onscroll = function() {scrollFunction4()};
          //     // document.getElementById("navbar").innerHTML = "<p>EVOX is committed to helping business continuity during the outbreak with special discounts until Jun 30!<a href='/en/contact-us'> Contact us now </a></p>";
          //   }