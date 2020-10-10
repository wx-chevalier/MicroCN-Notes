# Development

## Rebuilding the generated code

1. Install [protobuf compiler](https://github.com/google/protobuf/blob/master/README.md#protocol-compiler-installation)

2. Install the protoc Go plugin

   ```
   $ go get -u github.com/golang/protobuf/protoc-gen-go
   ```

3. Rebuild the generated Go code

   ```
   $ go generate google.golang.org/grpc/examples/helloworld/...
   ```

   Or run `protoc` command (with the grpc plugin)

   ```
   $ protoc -I helloworld/ helloworld/helloworld.proto --go_out=plugins=grpc:helloworld
   ```
