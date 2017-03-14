

module.exports = function(controller) {

controller.hears('?', 'message_received', function(bot, message){
    bot.startConversation(message, function(err, convo){
        convo.say('Lets get to know each other a little bit!') 
        convo.ask('Which is more offensive? Book burning or flag burning?', function(res, convo){
            convo.ask('How often do you keep your promises?', function(res, convo){
                convo.ask('Which is bigger? The Sun or the Earth?', function(res, convo){
                    conov.say('Thank you, that is all for now â¤')})})
        })
    })
})

}
