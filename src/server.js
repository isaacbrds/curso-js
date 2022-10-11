import setupApp from './app'
const PORT = 3000

(async () => {
  try {
    const app = await SetupApp();
    const server = app.listen(PORT, ()=>{
      console.log('App running at port ' + PORT);
    });
    
    const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"]
    exitSignals.map(sig=>process.on(sig, ()=>{
      server.close(err => {
        if(err) {
          console.error(err)
          process.exit(1)
        }
        app.database.connection.close(function(){
          console.info("Database connection closed!")
          process.exit(0)
        })

      })
    }))
  }catch(err){
    console.error(err)
    process.exit(1)
  }
})();
