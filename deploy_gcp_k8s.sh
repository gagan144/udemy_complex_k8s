# Build docker images
docker build -t gagan144/udemy_complex_client:latest -t gagan144/udemy_complex_client:$GIT_COMMIT_SHA -f ./client/Dockerfile ./client
docker build -t gagan144/udemy_complex_server:latest -t gagan144/udemy_complex_server:$GIT_COMMIT_SHA -f ./server/Dockerfile ./server
docker build -t gagan144/udemy_complex_worker:latest -t gagan144/udemy_complex_worker:$GIT_COMMIT_SHA -f ./worker/Dockerfile ./worker


# Push to docker hub
docker push gagan144/udemy_complex_client:latest
docker push gagan144/udemy_complex_client:$GIT_COMMIT_SHA

docker push gagan144/udemy_complex_server:latest
docker push gagan144/udemy_complex_server:$GIT_COMMIT_SHA

docker push gagan144/udemy_complex_worker:latest
docker push gagan144/udemy_complex_worker:$GIT_COMMIT_SHA


# Deploy into kubernetes cluster
kubectl apply -f k8s


# Imperatively update existing container
kubectl set image deployments/client-deployment client=gagan144/udemy_complex_client:$GIT_COMMIT_SHA
kubectl set image deployments/server-deployment server=gagan144/udemy_complex_server:$GIT_COMMIT_SHA
kubectl set image deployments/worker-deployment worker=gagan144/udemy_complex_worker:$GIT_COMMIT_SHA



