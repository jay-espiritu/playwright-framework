echo ""
echo "Welcome back $USER!"
echo "Welcome to $PROJECT_DISPLAY_NAME DevContainer!"
echo "Congratulations! You are all set and ready to go!"
echo "Happy surfing!"
echo ""

export CONFIG_PATH=~/config.json
export PROJECT_NAME=playwright
export PROJECT_DISPLAY_NAME=playwright
export PROJECT_ROOT=/workspaces/$PROJECT_NAME
export PS1="\[\e[32m\]\[\e[m\]\[\e[31m\]\`parse_git_branch\`\[\e[m\]\[\e[36m\]\w\[\e[m\]: "

# configure standard tty input for GPG prompts
export GPG_TTY=$(tty)

function parse_git_branch() {
  BRANCH=$(git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/')
  if [ ! "${BRANCH}" == "" ]; then
    echo "[${BRANCH}]"
  else
    echo ""
  fi
}

# ALIAS
alias c="clear"