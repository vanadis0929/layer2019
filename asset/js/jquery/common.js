/* 
팝업 열리는 기능 (특정이벤트로 호출하게, 메서드로 호출하게)

팝업 닫히는 기능 (자동으로 닫히게, 버튼으로 닫히게, dim영역 누르면 닫히게)

팝업 생성 (토스트 메시지 등에서 사용)

*/

$(function () {
 $('.layer-pop-btn').on("click", function(){
     console.log($(this).text());
     $('.layer-popup').addClass('on');
     $('.dim').css('display','block');
 });
});