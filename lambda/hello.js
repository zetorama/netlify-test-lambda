
const obj = {
    nodeVer: process.version,
    requested: 0,
}

exports.handler = async function(event, context, callback) {
    callback(null, {
        event,
        context,
        ...obj,
    })
}