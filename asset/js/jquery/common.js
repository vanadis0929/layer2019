/* 
팝업 열리는 기능 (특정이벤트로 호출하게, 메서드로 호출하게)

팝업 닫히는 기능 (자동으로 닫히게, 버튼으로 닫히게, dim영역 누르면 닫히게)

팝업 생성 (토스트 메시지 등에서 사용)

*/

$(function () {
//     var DimHtml = $('<div class="dim"></div>'); // dim 생성
//     const delayTime = 5;

//     /* 레이어팝업 열기 */
//     $('.layer-pop-btn').on("click", function(){
//         $('.layer_wrap').addClass('on');
//         $('body').append(DimHtml);
//         timeOut(delayTime);
        
//     });
//     /* 레이어팝업 닫기 */
//     $('.popup-close-btn').on("click", function(){
//         $(this).parents('.layer_wrap').removeClass('on');
//         DimHtml.remove();
//         timeOut(0);
//     });

//     /* dim영역 닫기 */
//     $(document).on("click", ".dim" , function(){
//         $('.layer_wrap').removeClass('on');
//         $(this).remove();
//         timeOut(0);
//     });

//     /* 5초후 닫기 */
//     function timeOut(stop){
//         setTimeout(function(){
//             $('.layer_wrap').removeClass('on');
//             DimHtml.remove();
//         },delayTime*1000);
//     }

    


    /* prototype... */
    function layerPop() {

        $('.btn_poplayer').on('click', this.openPop.bind(this)); // btn 클릭시 openPop 실행
        $('.btn_close').on('click', this.closePop.bind(this)); // btn 클릭시 closePop 실행

        

    };
    
    layerPop.prototype.openPop = function(event){
        console.log(this.dataset.popup);
        var popData = $('.btn_poplayer').data('popup'); // prototype은 this가 다름.
        console.log(popData);
        if ( 'open' == popData ){
            console.log('????')
            $('.layer_wrap').addClass('on');
            this.render();
        };
        if ('layer' == popData){
            console.log('!!!!');
            this.create();
        }
    }
    layerPop.prototype.closePop = function(){
        var popData = $('.btn_close').data('popup');
        if ( 'close' == popData ){
            $('.layer_wrap').removeClass('on');
            this.delete();
        };
    }



    layerPop.prototype.create = function(){
        var popUp =
            $('<div class="layer_wrap on">' +
                '  <h1>레이어팝업</h1>  ' +
                '  <p>임시</p> ' +
                '  <button type="button" class="btn_close" data-popup="close">닫기</button>' +
                '</div>');
        $('body').append(popUp);
    }


    layerPop.prototype.render = function(){
        $('body').append('<div class="dim"></div>');
    }
    layerPop.prototype.delete = function(){
        $('.dim').remove();
    }


    function startApp() {
        let app = new layerPop();
    }
      
    $(startApp);

 });