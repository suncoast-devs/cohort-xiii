dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t deploy-me-image ./bin/release/netcoreapp2.2/publish

docker tag deploy-me-image registry.heroku.com/cohort-xiii-sample-app/web

docker push registry.heroku.com/cohort-xiii-sample-app/web

heroku container:release web -a cohort-xiii-sample-app

# sudo chmod 755 deploy.sh
# ./deploy.sh