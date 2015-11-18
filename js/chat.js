(function () {

    var menuRight = $('#cbp-spmenu-s2'),
        showChat = $('#btn-chat'),
        LOCAL_STORAGE_USERNAME_KEY = 'signed-in-user-username';


    showChat.on('click', function () {
        showChat.toggleClass('active');
        menuRight.toggleClass('cbp-spmenu-open');
    });

    // for the chat
    var sendButton = $('#btn-send');
    var inputField = $('#chat-input');
    var messageContainer = $('#msg-container');

    var pubnub = PUBNUB({
        subscribe_key: 'demo', // always required
        publish_key: 'demo'    // only required if publishing
    });

    sendButton.on('click', function () {
        var messageValue = inputField.val();
        inputField.val('');
        var username = localStorage[LOCAL_STORAGE_USERNAME_KEY] || 'guest';
        pubnub.publish({
            channel: 'my_channel',
            message: username + ': ' + messageValue,
            callback: function (m) { }
        });
    });

    pubnub.subscribe({
        channel: 'my_channel',
        message: function (m) {
            appendMessage(m);
        }
    });

    function appendMessage(message) {
        messageContainer.append(message + '\n');
    }

    inputField.keyup(function (event) {
        if (event.keyCode == 13) {
            sendButton.click();
        }
    });
} ());
