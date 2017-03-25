'use strict';
window.renderStatistics=function(ctx, names, times) {
  ctx.fillStyle="rgba(0, 0, 0, 0.7)";
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle="white";
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle="#000";
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max=0;
  var maxIndex;
  for (var i=0; i<times.length; i++) {
    if (times[i]>max) {
      max=times[i];
      maxIndex=i;
    }
  };

  var histagramHeight=150;
  var columnWidth=40;
  var spaceBetween=50;
  var initialX=140;
  var initialY=250;
  var step=histagramHeight/max;

  for (i=0; i<times.length; i++) {
    var timeRounded=Math.floor(times[i]);
    var columnOpacity=(Math.ceil(Math.random()*10))/10;
    ctx.fillStyle='rgba(2, 14, 134,'+ columnOpacity + ')'
    if (names[i]==="Вы") {
      ctx.fillStyle="red";
    }
    ctx.fillRect(initialX+i*(spaceBetween+columnWidth), initialY-times[i]*step, columnWidth, times[i]*step);
    ctx.fillStyle="#000";
    ctx.fillText(names[i], initialX+i*(spaceBetween+columnWidth), initialY+20);
    ctx.fillText(timeRounded, initialX+i*(spaceBetween+columnWidth), (initialY-times[i]*step)-20);
  }
};
