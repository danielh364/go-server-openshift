#!/bin/sh
rm -f ./go-server-openshift/*.php
rm -f ./go-server-openshift/*.html
rm -f ./go-server-openshift/js/*
rm -f ./go-server-openshift/administrador/*.php
rm -f ./go-server-openshift/administrador/*.html
rm -f ./go-server-openshift/administrador/js/*
cp -a ./build/web/* ./go-server-openshift/
