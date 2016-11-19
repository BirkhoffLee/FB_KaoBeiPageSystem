<p align="center">
    <span style="font-size: 3em">AnonyPages</span>
</p>
<p align="center">
    <a href="https://microbadger.com/images/birkhofflee/anonypages">
        <img src="https://images.microbadger.com/badges/image/birkhofflee/anonypages.svg"
             alt="Docker Image Layers">
    </a>
    <a href="https://hub.docker.com/r/birkhofflee/anonypages">
        <img src="https://img.shields.io/docker/pulls/birkhofflee/anonypages.svg"
             alt="Docker Pulls">
    </a>
    <a href="https://drone.birkhoff.me/BirkhoffLee/AnonyPages">
        <img src="https://drone.birkhoff.me/api/badges/BirkhoffLee/AnonyPages/status.svg"
             alt="Build Status">
    </a>
</p>
<p align="center">
  <i>Posting articles anonymously to Facebook Pages has never been so easy.</i>
</p>


# Deployment
I usually run a website on Docker with [jwilder/nginx-proxy](https://github.com/jwilder/nginx-proxy), and I recommend you to use it too. So simply run the following to launch AnonyPages:

```
$ docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
$ touch /path/to/blacklist.list
$ docker run -itd -P -v /path/to/config.coffee:/var/www/AnonyPages-master/src/config.coffee:ro -v /path/to/blacklist.list:/var/www/AnonyPages-master/src/blacklist.list -e "VIRTUAL_HOST=DOMAIN_1(,DOMAIN_2,...)" birkhofflee/anonypages
```

For wildcard hosts please check this out: https://github.com/jwilder/nginx-proxy/blob/master/README.md#wildcard-hosts

# Blocking a user
Open `/addBlacklist/<YOUR_ADMIN_KEY>/{IDENTIFIER}`

# Stop blocking a user
Open `/removeBlacklist/<YOUR_ADMIN_KEY>/{IDENTIFIER}`

# Contributing
Only one rule: **Test before submitting a pull request**.

# Security Reports
Please contact [admin@birkhoff.me](mailto:admin@birkhoff.me), thank you very much.

# License
See [LICENSE](LICENSE).
