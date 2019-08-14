/* 참고 사이트 
https://offbyone.tistory.com/129
https://offbyone.tistory.com/132?category=283347
https://webclub.tistory.com/108
https://webclub.tistory.com/345
https://chosim.asv.kr/softwares/simpleone-popup-js
https://learn.jquery.com/plugins/basic-plugin-creation/
*/


$(document).ready(function(){
    $('body').popup();
});


// popup 플러그인
(function($){
    function Popup() {
        this.$dim = null;
        this.$popup = null;
        this.$btnClose = null;
        this.$btnOpen = null;

        //요소 초기화 및 이벤트 등록 호출하기
        this.init();
        this.initEvent();
    }

    //요소 초기화
    Popup.prototype.init = function() {
        this.$dim = $('.dim');
        this.$popup = $('.pop_wrap');
        this.$btnClose = $('.btn_close');
        this.$btnOpen = $('.btn_pop');
    }

    //이벤트 등록
    Popup.prototype.initEvent = function() { 
        var objThis = this;
        this.$btnOpen.on("click",function(){
            
            objThis.openPop();
        });

        this.$btnClose.on("click",function(){
            objThis.closePop();
        });

        this.$dim.on("click",function(){
            objThis.closePop();
        });  
    }

    //팝업 열기
    Popup.prototype.openPop = function() { 
        this.$dim.show();
        this.$popup.show();
    }

    //팝업 닫기
    Popup.prototype.closePop = function() {   
        this.$dim.hide();
        this.$popup.hide();
    }


    $.fn.popup=function(){
        // 요소 개수 만큼 루프 돌기
        this.each(function(index){
            // 구현 코드 위치
            var popup = new Popup(this);
        })
        // this 리턴
        return this;
    }
})(jQuery)




 

