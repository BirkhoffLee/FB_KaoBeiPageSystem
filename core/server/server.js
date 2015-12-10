/*
    Web Server
 */

var express = require('express'),
    app     = express(),
    swig    = require('swig');

/*
    Swig settings
 */
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', core.paths.web + '/views');
app.set('view cache', true);

/*
    Start server
 */
var port      = config.server.web.port;
var webServer = app.listen(port);

/*
    Web server event hooks
 */
function webServOnErr (err) {
    if (err.errno === 'EADDRINUSE') {
        console.error(core.il8n.err_web_serv_start_failed_eaddrinuse);
        console.error(core.il8n.err_port_already_in_use.replace("{port}", port));
        console.error(core.il8n.err_is_this_already_running);
    } else {
        console.error(core.il8n.err_web_serv_start_failed);
        console.error(core.il8n.err_errno_is + err.errno);
    }

    process.exit(-1);
}

function webServOnListening () {
    console.log(core.il8n.web_serv_running_on + 'http://' + config.server.host.toString() + ":" + config.server.web.port.toString() + "/ " + core.il8n.web_serv_close_press_ctrl_c);
}

/*
    Bind hooks
 */
webServer.on('error'    , webServOnErr);
webServer.on('listening', webServOnListening);


/*
    Return objects
 */
module.exports = {app: app, express: express, webServer: webServer};
