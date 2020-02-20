# standup

aws ecr get-login-password

docker login -u AWS -p <password> <aws_account_id>.dkr.ecr.<region>.amazonaws.com

docker tag standup_web:latest 474261603803.dkr.ecr.us-east-2.amazonaws.com/standup:latest

docker push 474261603803.dkr.ecr.us-east-2.amazonaws.com/standup:latest
