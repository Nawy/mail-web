## MAIL_WEB 
### Run docker image
1. Install dependencies
    ```sh
     npm i
    ```
4. build prod
    ```sh
     npm run build-prod
    ```
5. Make docker with nginx and project 
    ```sh
     docker build -t nginx_web .
    ```
6. Start Docker image
     ```sh
    docker run -p 0.0.0.0:80:80 --network=harakasmtpserver_mail-network --name nginx_web nginx_web
     ```