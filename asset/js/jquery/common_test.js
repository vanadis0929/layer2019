//팝업태그
var popTag = null;

//옵션
var opt = {
    title: "Title",
    content: '레이어팝업 입니다.',
    footer: '<button type="button" class="btn_confirm">확인</button>',
    time: 0,
}

//옵션 셋팅
function optSet(opt1) {
    console.log('11'+ opt1);
    opt.title = (opt1.title !== undefined)? opt1.title:opt.title;
    opt.content = (opt1.content !== undefined)? opt1.content:opt.content;
    if( opt1.footer === 'confirm' ) {
        opt.footer = `<button type="button" class="btn_confirm">확인</button>`
    }else {
        opt.footer = `
            <button type="button" class="btn_confirm">확인</button>
            <button type="button" class="btn_cancle">취소</button>
        `
    }
    //opt.footer =(opt1.footer !== undefined)? opt1.footer:opt.footer;
    opt.time = (opt1.time !== undefined)? opt1.time:opt.time;
}

//팝업 태그 생성
function popTagInit() {
    popTag = `
        <div class="pop_wrap">
            <div class="pop_hd">${opt.title}</div>
            <div class="pop_bd">${opt.content}</div>
            <div class="pop_ft">${opt.footer}</div>
            <button type="button" class="btn_close">X</button>
        </div>
        <div class="dim"></div>  
    `;
}

//팝업 생성
function creatPop(opt1) {
    if(opt1 != undefined){
        optSet(opt1);
    }

    popTagInit();
    $('.popArea').append(popTag);
    if(opt.time != 0) {
        $('.pop_wrap').show();
        $('.dim').show();
        setTimeout(function(){
            closePop();
        },opt.time)
    }else{
        $('.pop_wrap').show();
        $('.dim').show(); 
    }

    
}

//팝업 오픈
function openPop() {
    popTagInit();
    $('.popArea').append(popTag);
    $('.pop_wrap').show();
    $('.dim').show();   
}


//팝업 삭제
function closePop() {
    $('.popArea').empty();
}


$(document).ready(function(){
    $('.btn_create').on('click',function(){  //생성
        creatPop();
    });

    $('.btn_open').on('click',function(){  //오픈
        openPop();
    });

    $('body').on('click','.btn_close, .dim',function(){  //닫기
        closePop();
    });
});