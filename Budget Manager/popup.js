
$(function(){

    // Reading data from storage
    chrome.storage.sync.get(['total', 'limit'], function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    });
    
    
    $('#spendAmount').click(function(){
        chrome.storage.sync.get(['total', 'limit'], function(budget){
            var newTotal = 0;
            
            if(budget.total){   // checking whether storage hase any data
                newTotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();  // getting amount from user input
            if(amount){
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal});
            // chrome.storage.sync.set({'total': newTotal}, function(){
            //     if(amount && newTotal >= budget.limit){
            //         var notifOptions={
            //             type: "basic",
            //             iconurl: "icon48.png",
            //             title: "Linit reached!",
            //             message: "Uh oh. look's you've reached your alloted limit."
            //         };
            //         chrome.notifications.create('limitNotif', notifOptions);
            //     }
            // });

            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
});