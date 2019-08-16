//   const default = {
//       //팝업에 있어서 기본 값 정의

//       //열리는 데 필요한 것

//       //생성하는 데 필요한 것

//       //닫히는데 필요한 것
//   }

var defaults = {
  openStyle: "normal"
};

var popup = {
  open: function(popid, time) {
    var el = $(this);

    //팝업이 열리는 대상 정의

    var target = null;
    if (event && el.data("openTo")) {
      target = $(`#${el.data("openTo")}`);
      console.log("팝업오픈: 이벤트 감지");
    } else {
      console.log("팝업오픈: 메서드로 감지");
      target = $("#" + popid);
    }

    //event ? $("#" + el.data("openTo")) : $("#" + popid);

    console.log(typeof target);

    target.addClass("opened").fadeIn(300);

    //console.log(defaults);

    //console.log(target);
  },

  create: function(msg) {
    var el = $(this);
    var sizeCheck = $(".layer_style").length;
    var targetId = "layer_" + (sizeCheck + 1);

    if (event && el.data("createMsg")) {
      msg = el.data("createMsg");
    }

    console.log(targetId);

    target = `<div id="${targetId}" class="layer_style style_01"><div class="layer_wrapper"><div class="layer_body">${msg}</div> </div></div>`;

    $("body").append(target);

    console.log(typeof targetId);
    popup.open(targetId);
    popup.close(3000);
  },

  close: function(closeTime) {
    var el = $(this);
    var target = event ? el.parents(".layer_style") : $(".layer_style.opened");
    //console.log(target);

    var closeTimeOut = setTimeout(function() {
      target.fadeOut(300);
      console.log("gg");
    }, closeTime);

    if (closeTime) {
      closeTimeOut;
    }

    //e.stopPropagation();
  }
};

//var popup = $.extend({}, settings, defaults);

(function($) {
  $(document).on("click", "[data-open-to]", popup.open);

  $(document).on("click", "[data-create-msg]", popup.create);

  $(document).on("click", "[data-btn-to=close]", popup.close);

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
})(jQuery);
