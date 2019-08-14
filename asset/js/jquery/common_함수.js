/* 참고 사이트 
https://offbyone.tistory.com/129
https://offbyone.tistory.com/132?category=283347
https://webclub.tistory.com/108
https://webclub.tistory.com/345
https://chosim.asv.kr/softwares/simpleone-popup-js
https://learn.jquery.com/plugins/basic-plugin-creation/
*/


$(document).ready(function(){
    $('body').openPopup();
});


// popup 플러그인
(function($){
    $.fn.openPopup=function(){
        // 요소 개수 만큼 루프 돌기
        this.each(function(index){
            // 구현 코드 위치
            //console.log(this);

            var $dim = null;
            var $popup = null;
            var $btnClose = null;
            var $btnOpen = null;

            //요소 초기화
            function init() {
                $dim = $('.dim');
                $popup = $('.pop_wrap');
                $btnClose = $('.btn_close');
                $btnOpen = $('.btn_pop');
            }

            //이벤트 등록
            function initEvent() {
                $btnOpen.on("click",function(){
                    openPop();
                });

                $btnClose.on("click",function(){
                    closePop();
                });

                $dim.on("click",function(){
                    closePop();
                });  
            }

            function openPop(){
                $dim.show();
                $popup.show();
            }

            function closePop(){
                $dim.hide();
                $popup.hide();
            }


            init();
            initEvent();
        })
        // this 리턴
        return this;
    }
})(jQuery)




 

