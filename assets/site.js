var cursorTimeout,cursorStates,cursorStatesIndex;$(function(){$(".beast code").length&&$(".beast").each(function(){var e=$(this).find("code"),r=e.html(),t="htmlmixed";$(this).data("mode")&&(t=$(this).data("mode"));CodeMirror(this,{value:r,mode:t,theme:"vibrant-ink",lineWrapping:!0,lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,readOnly:!1});$(this).find(".CodeMirror").length&&($(this).find(".CodeMirror").unwrap(),e.remove())}),cursorStates=["n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize","nw-resize"],cursorStatesIndex=0,$(".header__logo").hover(function(){cursorTimeout=setInterval(function(){$(".header__logo").css("cursor",cursorStates[cursorStatesIndex]),cursorStatesIndex++,cursorStatesIndex>=cursorStates.length&&(cursorStatesIndex=0)},60)},function(){$(".header__logo").css("cursor","auto"),clearInterval(cursorTimeout)})});