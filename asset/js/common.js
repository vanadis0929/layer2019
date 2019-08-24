(function($) {
  $(document).on("click", "[data-open-to]", function() {
    $().popup({
      open: $(this)
    });
  });

  $(document).on("click", "[data-create-msg]", function() {
    $().popup({
      create: $(this)
    });
  });

  $(document).on("click", "[data-btn-to=close]", function() {
    $().popup({
      close: true
    });
  });

  $(document).on("click", ".layer_style", function(e) {
    $(this)
      .find("[data-btn-to=close]")
      .eq(0)
      .trigger("click");
    e.stopPropagation();
  });

  $(document).on("click", ".layer_wrapper", function(e) {
    e.stopPropagation();
  });

  var defaults = {
    open: null,
    openTime: 300,

    close: false,
    deletePopup: false,

    createMsg: null
  };

  $.fn.popup = function(options) {
    var popup = {};

    popup.settings = $.extend({}, defaults, options);

    //open 관련
    function open(popid, openTime) {
      var el = $(this);
      var target = null;

      //console.log(event.target.dataset.openTo);

      if (event && event.target.dataset.openTo) {
        target = $(`#${event.target.dataset.openTo}`);
        console.log("팝업오픈: 이벤트 감지");
        console.log(target);
      } else {
        console.log("팝업오픈: 메서드로 감지");
        target = $(popup.settings.open);
        console.log(target);
      }

      target.addClass("opened").fadeIn(openTime ? openTime : 300);
    }

    if (popup.settings.open != null) {
      open();
    }

    //close 관련
    function close(closeTime, dimclose, closeTodelete) {
      var el = $(this);
      var target = $(".layer_style.opened");

      var closeTimeOut = setTimeout(function() {
        target.removeClass("opened").fadeOut(300);
        console.log(target);
      }, closeTime);

      if (closeTime) {
        closeTimeOut;
      }

      if (
        (popup.settings.createMsg != null &&
          popup.settings.deletePopup == true) ||
        closeTodelete
      ) {
        target.remove();
      }
    }
    if (popup.settings.close) {
      close();
    }

    //create관련
    function create() {
      var el = $(this);
      var sizeCheck = $(".layer_style").length;
      var targetId = "layer_" + (sizeCheck + 1);
      console.log(event);
      if (event && event.target.dataset.createMsg) {
        console.log("팝업 생성: 이벤트로 감지");
        msg = event.target.dataset.createMsg;
        console.log(msg);
      } else {
        console.log("팝업 생성: 메서드로 감지");
        msg = popup.settings.create;
        console.log(msg);
      }

      console.log(targetId);

      target = `<div id="${targetId}" class="layer_style style_01"><div class="layer_wrapper"><div class="layer_body">${msg}</div> </div></div>`;

      $("body").append(target);

      console.log($(`#${targetId}`));

      $().popup({
        open: $(`#${targetId}`)
      });
      console.log(popup.settings.deletePopup);
      if (popup.settings.deletePopup == true) {
        $().popup({
          close: true,
          deletePopup: true
        });
      } else {
        close(3000);
      }
    }
    if (popup.settings.create != null) {
      create();
    }

    //if (popup) console.log(popup.settings);
  };
})(jQuery);
