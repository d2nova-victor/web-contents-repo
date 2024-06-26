(function($){


$.fn.Pages = function(options){

var opts = $.extend({},$.fn.Pages.defaults, options);

return this.each(function(){
  
var $this = $(this);
var $PagesClass = opts.PagesClass; // 分页元素
var $AllMth = $this.find($PagesClass).length;  //总个数
var $Mth = opts.PagesMth; //每页显示个数
var $NavMth = opts.PagesNavMth; // 导航显示个数


// 定义分页导航
var PagesNavHtml = "<div class=\"Pagination\"><a href=\"javascript:;\" class=\"homePage\">首页</a><a href=\"javascript:;\" class=\"PagePrev\"> << 前一頁</a><span class=\"Ellipsis\"><b>...</b></span><div class=\"pagesnum\"></div><span class=\"Ellipsis\"><b>...</b></span><a href=\"javascript:;\" class=\"PageNext\">下一頁 >> </a><a href=\"javascript:;\" class=\"lastPage\">尾頁</a><cite class=\"FormNum\">直接到第<input type=\"text\" name=\"PageNum\" id=\"PageNum\">頁</cite><a href=\"javascript:;\" class=\"PageNumOK\">確定</a></div>";


/*默认初始化显示*/

if($AllMth > $Mth){

//判断显示
var relMth = $Mth - 1;
$this.find($PagesClass).filter(":gt("+relMth+")").hide();


// 计算数量,页数
var PagesMth = Math.ceil($AllMth / $Mth); // 计算页数
var PagesMthTxt = "<span>共<b>"+$AllMth+"</b>條，共<b>"+PagesMth+"</b>頁</span>";
$this.append(PagesNavHtml).find(".Pagination").append(PagesMthTxt);


// 计算分页导航显示数量

var PagesNavNum = "";
for(var i=1;i<=PagesMth;i++){

PagesNavNum = PagesNavNum + "<a href=\"javascript:;\">"+i+'.'+"</a>";

};

$this.find(".pagesnum").append(PagesNavNum).find("a:first").addClass("PageCur");



//判断是否显示省略号
if($NavMth < PagesMth){

$this.find("span.Ellipsis:last").show();
var relNavMth = $NavMth - 1;
$this.find(".pagesnum a").filter(":gt("+relNavMth+")").hide();

}else{

$this.find("span.Ellipsis:last").hide();
};


/*默认显示已完成,下面是控制区域代码*/


//跳转页面
var $input = $this.find(".Pagination #PageNum");
var $submit = $this.find(".Pagination .PageNumOK");

//跳转页面文本框
$input.keyup(function(){

var pattern_d = /^\d+$/; //全数字正则

if(!pattern_d.exec($input.val())) {   
                  
alert("提示：\n\n请填寫正确的數字！");
$input.focus().val("");
return false

                };

});

//跳转页面确定按钮
$submit.click(function(){

if($input.val() == ""){

alert("提示：\n\n请填寫您要跳到第幾頁！");
$input.focus().val("");
return false

}if($input.val() > PagesMth){

alert("提示：\n\n您指定的頁面不存在！");
$input.focus().val("");
return false

}else{

showPages($input.val());

};

});


//导航控制分页
var $PagesNav = $this.find(".pagesnum a"); //导航指向
var $PagesFrist = $this.find(".homePage"); //首页
var $PagesLast = $this.find(".lastPage"); //尾页
var $PagesPrev = $this.find(".PagePrev"); //上一页
var $PagesNext = $this.find(".PageNext"); //下一页

//导航指向
$PagesNav.click(function(){

var NavTxt = $(this).text();
showPages(NavTxt);

});

//首页
$PagesFrist.click(function(){

showPages(1);

});

//尾页
$PagesLast.click(function(){

showPages(PagesMth);

});

//上一页
$PagesPrev.click(function(){

var OldNav = $this.find(".pagesnum a[class=PageCur]");


if(OldNav.text() == 1){alert("提示：\n\n已經是最前面！");}else{

var NavTxt = parseInt(OldNav.text()) - 1;
showPages(NavTxt);

};

});

//下一页
$PagesNext.click(function(){

var OldNav = $this.find(".pagesnum a[class=PageCur]");

if(OldNav.text() == PagesMth){alert("提示：\n\n已經是最後面！");}else{

var NavTxt = parseInt(OldNav.text()) + 1;
showPages(NavTxt);

};

});

// 主体显示隐藏分页函数
function showPages(page){


$PagesNav.each(function(){

var NavText = $(this).text();

if(NavText == page){

$(this).addClass("PageCur").siblings().removeClass("PageCur");

};
});

//显示导航样式
var AllMth = PagesMth / $NavMth;
for(var i=1;i<=AllMth;i++){

if(page > (i*$NavMth)){

$PagesNav.filter(":gt("+(i*$NavMth-1)+")").show();
$PagesNav.filter(":gt("+(i*$NavMth-1+$NavMth)+")").hide();
$PagesNav.filter(":lt("+(i*$NavMth)+")").hide();

$this.find("span.Ellipsis:first").show();

};

if(page <= $NavMth){

$PagesNav.filter(":gt("+($NavMth-1)+")").hide();
$PagesNav.filter(":lt("+$NavMth+")").show();

$this.find("span.Ellipsis:first").hide();

};


};


// 显示内容区域
var LeftPage = $Mth * (page-1);
var NowPage = $Mth * page;

$this.find($PagesClass).hide();
$this.find($PagesClass).filter(":lt("+(NowPage)+")").show();
$this.find($PagesClass).filter(":lt("+(LeftPage)+")").hide();

};


}; //判断结束 

}); //主体代码
};

// 默认参数
$.fn.Pages.defaults = {

PagesClass:'.item', //需要分页的元素
PagesMth:5, //每页显示个数
PagesNavMth:20 //显示导航个数
};

$.fn.Pages.setDefaults = function(settings) {
$.extend( $.fn.kkPages.defaults, settings );
};

})(jQuery);