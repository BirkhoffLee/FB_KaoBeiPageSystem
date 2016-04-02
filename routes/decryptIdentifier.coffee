crypto = require "crypto"

global.AnonyPages.app.get '/decrypt/:key/:string', (req, res) ->
    config = global.AnonyPages.config

    if !req.params.key? or !req.params.string or req.params.key != config.encryptKey
        false

    decipher = crypto.createDecipher 'aes-256-cbc', config.encryptKey.toString 'binary'
    decoded  = decipher.update req.params.string, 'hex', 'utf8'
    decoded += decipher.final 'utf8'

    res.send decoded