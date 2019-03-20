dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t sdg-template-image ./bin/release/netcoreapp2.2/publish

docker tag sdg-template-image registry.heroku.com/heroku-web-app/web

docker push registry.heroku.com/heroku-web-app/web

heroku container:release web -a heroku-web-app

# sudo chmod 755 deploy.sh
# ./deploy.sh