#! /bin/bash
HOME=`cd $(dirname $0)/../ >/dev/null; pwd`
echo 'home directory:'$HOME
cd $HOME
supervisor -e js -w controllers,services,validators,routes,common,models,app.js ./bin/www
