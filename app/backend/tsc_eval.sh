#!/bin/bash

npx tsc --build

if [ $? != 0 ]; then
  echo "Ocorreu um ero ao compilar o TypeScript, verifique seu código e tente novamente"
  exit 1
fi
