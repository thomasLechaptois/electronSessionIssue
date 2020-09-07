const { session, app } = require('electron')

function init()
{
    app.on('session-created', (newSession) => {
     console.log(newSession.webRequest);
    });

  let sess = session.fromPartition('Test', { cache: true });
}
  
// main()
app.on('ready', init);
