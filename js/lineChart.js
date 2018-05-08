(function () {
    var canvas = document.getElementById('lineGraph'),
        context = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height;
    var stats = [40, 65, 72, 120, 250, 87, 100, 42];

    context.fillStyle = '#f6f6f6';
    context.fillRect(0, 0, width, height);

    drawline(stats, width, context);
    // ---------------  
    canvas.onmousemove = function (e) {
        var pageCrds = '(' + e.pageX + ', ' + e.pageY + ')',
            clientCrds = '(' + e.clientX + ', ' + e.clientY + ')';
            if(e.clientX >=65 && e.clientX <=85 && e.clientY >=30 && e.clientY <=50){
                console.log('first position');
            }
    };
})();

function drawline(lineArray, cWidth, context) {
    var left = 0,
        prev_stat = lineArray[0],
        move_left_by = cWidth / lineArray.length;
        var nlarray = [];

    for (i in lineArray) {
        initPoint = lineArray[i];

        context.beginPath();
        context.moveTo(left, prev_stat);
        context.lineTo(left + move_left_by, initPoint);
        context.lineWidth = 5;
        context.lineCap = 'round';
        context.stroke();

        nlarray.push({"x": left + move_left_by,"y":initPoint});
        prev_stat = initPoint;
        left += move_left_by;
    }
    console.log(nlarray);
}