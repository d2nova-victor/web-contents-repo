// 參考http://tutorials.jenkov.com/jquery/generating-table-of-contents.html
// $(document).ready(function() {                                                                          
//     tableOfContents("#tocList");
// });

function tableOfContents(tocList) {                                                                            
    $(tocList).empty();
    var prevH2Item = null;
    var prevH2List = null;
    var index = 0;

    $("h2, h3").each(function() {
        //insert an anchor to jump to, from the TOC link.
        var anchor = "<a id='" + index + "'></a>";
        $(this).before(anchor);
    
        var li     = "<li><a class='tocAnchor' href='#" + index + "'>" +
                     $(this).text() + "</a></li>";
    
        if( $(this).is("h2") ){
            prevH2List = $("<ul class='toclist-b'></ul>");
            prevH2Item = $(li);
            prevH2Item.append(prevH2List);
            prevH2Item.appendTo(tocList);
        } else {
            prevH2List.append(li);
        }
        index++;
    });
}     