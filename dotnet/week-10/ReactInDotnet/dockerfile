FROM microsoft/dotnet:2.2-sdk
WORKDIR /app
COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet content.dll
