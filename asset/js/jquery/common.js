/* 
팝업 열리는 기능 (특정이벤트로 호출하게, 메서드로 호출하게)

팝업 닫히는 기능 (자동으로 닫히게, 버튼으로 닫히게, dim영역 누르면 닫히게)

팝업 생성 (토스트 메시지 등에서 사용)

*/

$(function () {
    var DimHtml = $('<div class="dim"></div>'); // dim 생성
    const delayTime = 5;

    /* 레이어팝업 열기 */
    $('.layer-pop-btn').on("click", function(){
        $('.layer-popup').addClass('on');
        $('body').append(DimHtml);
        timeOut(delayTime);
        
    });
    /* 레이어팝업 닫기 */
    $('.popup-close-btn').on("click", function(){
        $(this).parents('.layer-popup').removeClass('on');
        DimHtml.remove();
        timeOut(0);
    });

    /* dim영역 닫기 */
    $(document).on("click", ".dim" , function(){
        $('.layer-popup').removeClass('on');
        $(this).remove();
        timeOut(0);
    });

    /* 5초후 닫기 */
    function timeOut(stop){
        setTimeout(function(){
            $('.layer-popup').removeClass('on');
            DimHtml.remove();
        },delayTime*1000);
    }
});


    /* prototype... */
    function layerPop() {

        
    };
    
    layerPop.prototype.create = function(){

        this.render(); // dim호출
    }
    
    layerPop.prototype.render = function(){
        let $body = $('body');
        $body.append('<div class="dim"></div>');
    }
    
    function startApp() {
        let app = new layerPop();
      }
      
      $(startApp);

