/* #### 참고 사이트 #### 
https://offbyone.tistory.com/129
https://offbyone.tistory.com/132?category=283347
https://webclub.tistory.com/108
https://webclub.tistory.com/345
https://chosim.asv.kr/softwares/simpleone-popup-js
https://learn.jquery.com/plugins/basic-plugin-creation/
*/

/* #### 2차 과제 ####
1. 팝업 열리는 기능 (특정이벤트로 호출하게, 메서드로 호출하게)
2. 팝업 닫히는 기능 (자동으로 닫히게, 버튼으로 닫히게, dim영역 누르면 닫히게)
3. 팝업 생성 (토스트 메시지 등에서 사용)
4. scss를 사용하여 스타일 생성, css 작성하기
5. 모바일까지 커버 가능하게
*/


// popup 플러그인
(function($){
    //기본값
    $.defaultOptions = {
        delayTime: 5000,
    }

    $.fn.popup=function(options){

        // 사용자 옵션 정보 유무 판단 후, 값이 없는 경우 기본 값으로 설정
        options = $.extend(null, $.defaultOptions, options);

      
        // 요소 개수 만큼 루프 돌기
        this.each(function(index){
            // 구현 코드 위치            
            var pop = new Popup(this); 

            console.log(options.delayTime);
            pop.openPop();
            
            if( options.delayTime != 0 || options.delayTime != undefined ) {   
                setTimeout(function(){
                    pop.closePop();
                }, options.delayTime);
            }
           
        })
        // this 리턴
        return this;
    }


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
        console.log('open');
        this.$dim.show();
        this.$popup.show();
    }

    //팝업 닫기
    Popup.prototype.closePop = function() {  
        console.log('close');
        this.$dim.hide();
        this.$popup.hide();   
    }


    
})(jQuery)


$(document).ready(function(){
    //플러그인 호출
    $("body").popup({
        delayTime:2000
    });
   
});
