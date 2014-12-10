chrome.storage.local.get('bgColor', function(result) {
  
        bgColorValue= result.bgColor ? result.bgColor : 'yellow';
        
         // alert(valueArray.abc);     
 });

chrome.storage.local.get('ulColor', function(result) {
  
        ulColorValue= result.ulColor ? result.ulColor : 'red';
        
         // alert(valueArray.abc);     
 });

chrome.storage.local.get('fontColor', function(result) {
  
        fontColorValue= result.fontColor ? result.fontColor : 'yellow';
        
         // alert(valueArray.abc);     
 });
chrome.storage.local.get('bgShortcut', function(result) {
  
        bgShortcut= result.bgShortcut ? result.bgShortcut : 'd';
        
         // alert(valueArray.abc);     
 });
chrome.storage.local.get('ulShortcut', function(result) {
  
        ulShortcut= result.ulShortcut ? result.ulShortcut : 's';
        
         // alert(valueArray.abc);     
 });
chrome.storage.local.get('fontShortcut', function(result) {
  
        fontShortcut= result.fontShortcut ? result.fontShortcut : 'a';
        
         // alert(valueArray.abc);     
 });



function surroundContent() {
        var r;
        if (window.getSelection) {        
            r = window.getSelection();
            if (r.rangeCount > 0) {             
                r = r.getRangeAt(0);
                var a = document.createElement('span'); 
                // alert(fontColor); 
                a.setAttribute("style","color:"+fontColorValue+';');// 对选中文本的颜色进行处理
                r.surroundContents(a)        //   这里面的 a 不是标签   ，是前面的   那个储存新标签 的变量名
                r.collapse(false);
            }
        }
    }
    function xiahuaxian(){
    	var x;
        if (window.getSelection) {         //其他浏览器
            x = window.getSelection();
            if (x.rangeCount > 0) {             
                x = x.getRangeAt(0);
                var a = document.createElement('span');  
                a.setAttribute("style","border-bottom:2px solid "+ulColorValue+";");// 下划线
                x.surroundContents(a)        //   这里面的 a 不是标签   ，是前面的   那个储存新标签 的变量名
                x.collapse(false);
            }
        }
    }
        function beijingse(){
    	var x;
        if (window.getSelection) {         //其他浏览器
            x = window.getSelection();
            if (x.rangeCount > 0) {             
                x = x.getRangeAt(0);
                var a = document.createElement('span');  
                a.setAttribute("style","background:"+bgColorValue+";");
                x.surroundContents(a)        //   这里面的 a 不是标签   ，是前面的   那个储存新标签 的变量名
                x.surroundContents(false);
            }
        }
    }
    function e(){
      var   key=event.keyCode;   
     if(String.fromCharCode(key)==fontShortcut)   
      {   
           
           surroundContent(); //字体颜色
      } 
      if (String.fromCharCode(key)==ulShortcut) {
      	xiahuaxian();
      }; 
      if(String.fromCharCode(key)==bgShortcut){beijingse();} 
  }
      document.onkeypress=e; 
     