const amqp= require('amqplib/callback_api')

amqp.connect(`amqp://localhost`,(err,connection)=>{
    if(err){
        throw err;
    }
    connection.createChannel((err,channel)=>{
        if(err){
            throw err
        }
        let queueName= "TestQueue"
        let message= "This is Ucefez! It's Alright"
        channel.assertQueue(queueName,{
            durable:false
        });
        channel.sendToQueue(queueName,Buffer.from(message));
        console.log(`message is: ${message}`);
        setTimeout(()=>{
            connection.close()
        }, 1000)
    })
})