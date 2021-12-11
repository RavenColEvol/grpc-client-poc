## For creating web_pb and pb
```
protoc -I=. todo.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
```

---

## For creating client code
```     
npx webpack ./client.js
```

## For converting client HTTP 1.1 to HTTP 2 run envoy.yaml
```
docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.20.0
```