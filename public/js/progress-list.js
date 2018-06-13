<<<<<<< HEAD
'use strict';

//Animate progress-bar
$('.js-progress-list').waypoint({
    handler: function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 200);
        });
        this.destroy();
    }, offset: '50%'
});
=======
'use strict';

//Animate progress-bar
$('.js-progress-list').waypoint({
    handler: function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + '%'
            }, 200);
        });
        this.destroy();
    }, offset: '50%'
});
>>>>>>> 00eb354f8b09512514b01bfa842aa09b309cd186
