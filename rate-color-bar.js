initRateColorBar();

function initRateColorBar() {
    [].forEach.call(document.getElementsByClassName('rate-color-bar'), function(v,i,a) {
        v.innerHTML += '<div class="bar-row">' +
                            '<div class="min-val">5</div>' +
                            '<div class="bar-container">' +
                                '<div class="bar-stick"></div>' +
                                '<div class="bar-target" alt="" style="left:'+ (25 * (parseFloat(v.dataset.value) - 1)) +'%;"></div>' +
                            '</div>' + 
                            '<div class="max-val">1</div>' +
                        '</div>';
    });
}