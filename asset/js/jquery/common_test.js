

//function popup() {
        var popTag = null;
        var opt = {
            title: "Title",
            content: '레이어팝업 입니다.',
            footer: "Footer",
            time: 0,
        }

        function optSet(opt1) {
            console.log('11'+opt1);
            opt.title = (opt1.title !== undefined)? opt1.title:opt.title;
            opt.content = (opt1.content !== undefined)? opt1.content:opt.content;
            opt.footer =(opt1.footer !== undefined)? opt1.footer:opt.footer;
            opt.time = (opt1.time !== undefined)? opt1.time:opt.time;
        }
        
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

        function popTagInitEvent() {
            $('.btn_pop').on('click',function(){
                openPop();
            });
            $('.btn_close, .dim').on('click',function(){
                closePop();
            });
        }      

        function openPop(opt1) {
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
            }else {
                $('.pop_wrap').show();
                $('.dim').show();                
            }

            popTagInitEvent();

        }

        function closePop() {
            $('.popArea').empty();
        
        }

        popTagInit();   
        popTagInitEvent();

        // function aa(){
        //     console.log('aa');
        // }
        // aa();


//}  


window.addEventListener( 'load' , function () {
    popTagInit();   
    popTagInitEvent();
}) ;

