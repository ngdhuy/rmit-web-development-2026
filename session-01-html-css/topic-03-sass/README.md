# Learning about SASS

## 1 - Setup dev environment

* Setup devcontainer for development environment.

    * Press CMD + Shift + P to open Command
    * Input command: Dev Containers: Open Folder in Container
    * Config environment NODE for Dev Container

* Install SASS for Dev Container

```shell
npm i --save sass
```

## 2 - Build SASS coding to CSS

* Build files

```shell
sass --watch input.sass output.css
```

* build folder

```shell 
sass --watch app/sass:public/stylesheets
```