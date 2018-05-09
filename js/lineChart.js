(function () {
    var canvas = document.getElementById('lineGraph'),
        context = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height;
    var stats = [40, 65, 72, 120, 267, 87, 100, 42];
    console.log(stats);
    var range = 350;
    var respectiveValues = [];
    for(i in stats){
        respectiveValues.push( (stats[i]* height)/range );
    }

    context.fillStyle = '#fff';
    context.fillRect(0, 0, width, height);

    drawline(respectiveValues, width, context, height);
    // ---------------  
    canvas.onmousemove = function (e) {
        var pageCrds = '(' + e.pageX + ', ' + e.pageY + ')',
            clientCrds = '(' + e.clientX + ', ' + e.clientY + ')';
            if(e.clientX >=65 && e.clientX <=85 && e.clientY >=30 && e.clientY <=50){
                console.log('first position');
            }
    };
    yAxis(respectiveValues, height , width, context);
})();
/**
 * 
 * @param {*} lineArray get the arra for creating graph
 * @param {*} cWidth get canvas width
 * @param {*} context get context of canvas
 * 
 */
function drawline(lineArray, cWidth, context, height) {
    var left = 0,
        prev_stat = height - lineArray[0],
        move_left_by = cWidth / lineArray.length;
        var nlarray = [];

    for (i in lineArray) {
        initPoint = height - lineArray[i];
        // console.log(initPoint);

        context.beginPath();
        context.moveTo(left, prev_stat);
        context.lineTo(left + move_left_by, initPoint);
        context.lineWidth = 1;
        context.lineCap = 'round';
        context.stroke();

        nlarray.push({"x": left + move_left_by,"y":initPoint});
        prev_stat = initPoint;
        left += move_left_by;
    }
}

function yAxis(lineArray, height , width, context){
    let maxValue = Math.max.apply(null, lineArray);
    let getModule = maxValue % 50; 
    let storyPointArr = [];
    var gridYvalues = [];
    if(getModule){
        maxValue = maxValue + (50 - getModule)
    }
    for( i = 0; i<maxValue/50+0; i++){
        storyPointArr.push(50*[i]);
        gridYvalues.push(height - (height/((maxValue/50)+0)*[i]));
    }
    console.log(storyPointArr);
    console.log(gridYvalues);
    for (g in gridYvalues) {
        gridPoint= gridYvalues[g];
        context.beginPath();
        context.moveTo(0, gridPoint);
        context.lineTo(width, gridPoint);
        context.lineWidth = 1;
        context.stroke();
    }
}