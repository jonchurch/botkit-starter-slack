module.exports = function(controller) {

    controller.hears('qq', 'message_received', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say('Lets get to know each other a little bit!')

            convo.ask('Which is more offensive? Book burning or flag burning?', function(res, convo) {
                convo.next()

                convo.ask('How often do you keep your promises?', function(res, convo) {
                    convo.next()

                    convo.ask('Which is bigger? The Sun or the Earth?', function(res, convo) {

                        convo.say('Thank you, that is all for now')
                        convo.next()

                    })
                })
            })
        })
    })


    controller.hears('thread', 'message_received', function(bot, message) {
        bot.createConversation(message, function(err, convo) {

            convo.addMessage('Charmed to meet you, lets get to know one another!')

            convo.addQuestion('How much do you like robots?', function(res, convo) {
                convo.gotoThread('q2')
            }, 'default')


            convo.addQuestion('Do you like your job?', function(res, convo) {
                convo.gotoThread('q3')
            }, 'q2')

            convo.addQuestion('How much glucose and energy does your body generate per hour?', function(res, convo) {
                convo.gotoThread('end')
            }, 'q3')


            convo.addMessage('Okay thank you very much for the valuable info, human.', 'end')

        })
    })


}
