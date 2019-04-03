dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t infinite-castle-70750-image ./bin/release/netcoreapp2.2/publish

docker tag infinite-castle-70750-image registry.heroku.com/infinite-castle-70750/web

docker push registry.heroku.com/infinite-castle-70750/web

heroku container:release web -a infinite-castle-70750

# sudo chmod 755 deploy.sh
# ./deploy.sh