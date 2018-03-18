


### Replacement for the frontend Flash web app used OfflineLab: a remote device configurator and collector
https://github.com/AJNOURI/offlinelab

##### Using Docker httpd for the dev environment

```
docker container mapped to github
docker run -tid -v /home/ajn/github/jquery-xml-reader/encubator/remotexmlreader:/usr/local/apache2/htdocs --hostname jquery --name jquery httpd
docker stop jquery
docker rm jquery
```
