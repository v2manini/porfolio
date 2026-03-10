---
title: Sistema Operativo
img: /porfolio/imgs/Os.JPG
description: Simulación del funcionamiento de un sistema operativo tipo unix.
tecs: ["C"]
repo_url: https://github.com/v2manini/os-simulaci-n

--- 

Es una simulación de un sistema operativo tipo Unix. En este tenemos 4 módulos que deben interactuar entre si, y esos módulos representan una parte del sistema operativo (El módulo de la cpu, el kernel, la memoria y el sistema de archivos). Estos módulos se separaron en 4 archivos que se comunicaban mediante sockets. Algunos de estos tenían que ser servers multihilo (con la biblioteca de pthreads), por lo que era necesario sincronizarlos para evitar las condiciones de carrera.

Este proyecto grupal fue hecho  para la materia de sistemas operativos de la UTN.
