# PaoPao

## install mongodb
## start mongodb

    ./bin/mongod -dbpath /var/lib/mongodb &
  
## install dependency

    npm install --save
  
## start

    npm start
or in development model (without restart after modify some code)

    ./bin/supervisor_start.sh
    
after started, you can access http://localhost:3000
  
## start webpack (build reactjs if you changed the code under reactjs/src)

    webpack
  
  
