$(function(){
    var currentStage = '1';
    function Return2(e){
        return(e[0])
    }
    $('#timeline').click(function(e) {
        let x = e.clientX;
        let t1 = Math.abs(x - $('#1').offset().left)
        let t2 = Math.abs(x - $('#2').offset().left)
        let t3 = Math.abs(x - $('#3').offset().left)
        console.log(x, t1, t2, t3);
        let lowest = [t1, '1'];
        if (t2 < lowest[0]){
            lowest = [t2, '2'];
        }
        if (t3 < lowest[0]){
            lowest = [t3, '3'];
        }
        if (currentStage != lowest){
            ChangeStage(lowest[1])
        }
        
    })
    // function click1(){
    //     if (currentStage != '1'){
    //         ChangeStage('1');
    //     }
    // }
    // function click2(){
    //     if (currentStage != '2'){
    //         ChangeStage('2');
    //     }
    // }
    // function click3(){
    //     if (currentStage != '3'){
    //         ChangeStage('3');
    //     }
    // }

    function ChangeStage(x){
        $('#' + currentStage).removeClass('active')
        currentStage = x;
        $('#' + x).addClass('active');
        console.log(x);
    }


})