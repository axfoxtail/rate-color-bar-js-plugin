initRateColorBar();

function initRateColorBar() {
    [].forEach.call(document.getElementsByClassName('rate-color-bar'), function(v,i,a) {
        console.log('v ', v);
        console.log('i ', i);
        console.log('a ', a);
        v.innerHTML += '<div class="bar-row">' +
                            '<div class="min-val">1</div>' +
                            '<div class="bar-wrapper">' +
                                '<img class="bar-target" src="img/target.png" alt="" style="left:'+ (25 * (parseFloat(v.dataset.value) - 1)) +'%;" />' +
                            '</div>' +
                            '<div class="max-val">5</div>' +
                        '</div>';
    });
}