
const obj = {
    nodeVer: process.version,
    requested: 0,
}

const delay = time => new Promise(ok => setTimeout(ok, time))

exports.handler = async function(event, context, callback) {
    console.log('1: start')

    callback(null, {

        statusCode: 200,
        body: JSON.stringify({
            event,
            context,
            ...obj,
        }),
    })

    console.log('2: delay 1s')
    await delay(1e3)
    console.log('3: end')
}