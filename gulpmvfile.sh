#!/bin/sh
rm -f /tmp/go-server-openshift/daniel/tienda/*.php
rm -f /tmp/go-server-openshift/daniel/tienda/*.html
rm -f /tmp/go-server-openshift/daniel/tienda/js/*
rm -f /tmp/go-server-openshift/daniel/tienda//administrador/*.php
rm -f /tmp/go-server-openshift/daniel/tienda/administrador/*.html
rm -f /tmp/go-server-openshift/daniel/tienda/administrador/js/*
cp -a ./build/web/* /tmp/go-server-openshift/daniel/tienda/
