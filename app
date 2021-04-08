#!/bin/bash
# | ----------------------------------------------------------------------------
# | Application
# | ----------------------------------------------------------------------------
# App Name
APP='APP GraphQL Example'
# Container TAG
DOCKERNAME=api-graphql

function_exists() {
  declare -f -F $1 > /dev/null
  return $?
}
printf ""

# | ----------------------------------------------------------------------------
# | Cores
# | ----------------------------------------------------------------------------
RED='\033[0;31m'
GRAY='\033[0;36m'
LGREEN='\033[1;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # RESET COR

function install() {
  docker exec -it $DOCKERNAME-app "$@"
}

function build() {
  docker-compose build
}

# | ----------------------------------------------------------------------------
# | Start Dev
# | ----------------------------------------------------------------------------
function start() {
  docker-compose up -d $1;
}

# | ----------------------------------------------------------------------------
# | Start prod
# | ----------------------------------------------------------------------------
function prod() {
  docker-compose up -d --build $1;
}

# | ----------------------------------------------------------------------------
# | Stop
# | ----------------------------------------------------------------------------
function stop() {
  docker-compose down
}

# | ----------------------------------------------------------------------------
# | Restart
# | ----------------------------------------------------------------------------
function restart() {
  case "$1" in
    app) docker restart $DOCKERNAME-app
      ;;
    db) docker restart $DOCKERNAME-db
      ;;
    all) stop; start
      ;;
    *)
      echo -e "${GRAY}Informe o container que deseja reniciar:${NC}"
      echo ""
      echo -e " ${GRAY}./app ${YELLOW}restart ${LGREEN}app${NC}"
      echo -e " ${GRAY}./app ${YELLOW}restart ${LGREEN}db${NC}"
      echo ""
      echo -e "${GRAY} Todos os containers${NC}"
      echo -e " ${GRAY}./app ${YELLOW}restart ${LGREEN}all${NC}"
      exit 0
     ;;
  esac
}

# | ----------------------------------------------------------------------------
# | Bash Commands
# | ----------------------------------------------------------------------------
function bash() {
  case "$1" in
    app) docker exec -ti $DOCKERNAME-app bash $2
     ;;
    db) docker exec -ti $DOCKERNAME-db bash $2
     ;;
    -h|--help)
      echo -e "${GRAY}Informe o container que deseja acessar:${NC}"
      echo -e " ${GRAY}./app ${YELLOW}bash ${LGREEN}app${NC}"
      echo -e " ${GRAY}./app ${YELLOW}bash ${LGREEN}db${NC}"
      exit 0
     ;;
    *)
      echo -e "${GRAY}Informe o container que deseja acessar:${NC}"
      echo -e " ${GRAY}./app ${YELLOW}bash ${LGREEN}app${NC}"
      echo -e " ${GRAY}./app ${YELLOW}bash ${LGREEN}db${NC}"
      exit 0
     ;;
  esac
}

# | ----------------------------------------------------------------------------
# | Test
# | ----------------------------------------------------------------------------
function run_test() {
  bash test
}


# | ----------------------------------------------------------------------------
# | Recreate
# | ----------------------------------------------------------------------------
function recreate() {
  stop
  docker-compose rm -f
  start
}

# if [ "$UID" -ne 0 ]
#   then echo "Please run as root"
#   exitadd packageart | bash app ou db | yarn"
#   exit
# fi

# | ----------------------------------------------------------------------------
# | Switch case commands
# | ----------------------------------------------------------------------------
case "$1" in
  yarn) function_exists install && install $@
    ;;
  npx) function_exists install && install $@
    ;;
  npm)  function_exists install && install $@
    ;;
  build) function_exists build && build $2
    ;;
  start) function_exists start && start $2
    ;;
  # prod) function_exists prod && prod $2
  #   ;;
  stop)  function_exists stop && stop $2
    ;;
  restart)  function_exists restart && restart $2
    ;;
  bash) function_exists bash && bash $2
    ;;
  recreate) function_exists recreate && recreate
    ;;
  -h|--help)
    echo -e "${GRAY}Seja bem vindo ao${NC} $APP"
    echo " "
    echo -e "${GRAY}./app ${YELLOW}[options] ${LGREEN}[arguments]${NC}"
    echo " "
    echo -e "${LGREEN}options:${NC}"
    echo -e "${YELLOW}  yarn ${LGREEN}add package | --dev${NC}"
    echo -e "${YELLOW}  npm ${LGREEN}install package --save|--save-dev${NC}"
    echo -e "${YELLOW}  build ${RED}- DOCKER${NC}"
    echo -e "${YELLOW}  start ${RED}- DOCKER${NC}"
    echo -e "${YELLOW}  stop ${RED}- DOCKER${NC}"
    echo -e "${YELLOW}  restart ${RED}- DOCKER${NC}"
    echo -e "${YELLOW}  bash ${RED}- DOCKER${NC}"
    echo -e "${YELLOW}  recreate ${RED}- DOCKER${NC}"
    echo -e "${LGREEN}  -h, --help${NC}"
    exit 0
    ;;
  *)
    echo "Informe commando:"
    echo -e "${LGREEN}  -h|--help${NC}              ${YELLOW}Mostrar ajuda${NC}"
    ;;
esac
