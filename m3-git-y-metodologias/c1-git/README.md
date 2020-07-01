## Uso de GIT y Github


### Cuando terminamos de instalar

`git `

`git --version`


### Solo una vez por repositorio

`git init`

`git config user.name "nombreDeUsuario"`
`git config user.name --global "nombreDeUsuario"`

`git config user.name`

`git config user.email "email@usuadio.de"`
`git config user.email --global "email@usuadio.de"`

`git config user.email`

`git remote add origin http://dire-del-repo`

`git remote -v`


### Cada vez que subamos cambios

`git add .`

`git add archivos`

`git commit -m "Mensaje"`

`git push origin master`
    - origin es el destino
    - master es la rama

`git status`

`git log -> historial de cambios`

### Para bajar cambios

`git pull origin master`

`git clone http://dire-del-repo`

