//   const default = {
//       //팝업에 있어서 기본 값 정의

//       //열리는 데 필요한 것

//       //생성하는 데 필요한 것

//       //닫히는데 필요한 것
//   }

$(function() {
  var init = function() {
    console.log("target");

    const popup = {
      open: function(popid) {
        let target = $("#layer_01");
        target = $("#" + popid);
        target.show();
        console.log(target);
      },

      create: function(popid) {},

      close: function(popid) {}
    };
  };

  init();
});
