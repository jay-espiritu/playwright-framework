FROM mcr.microsoft.com/playwright:v1.16.3-focal-amd64

ENV NODE_VERSION v14.18.1

# Create a non-root user to use if preferred - see https://aka.ms/vscode-remote/containers/non-root-user    
ARG USERNAME=vscode
ARG USER_UID=2000
ARG USER_GID=$USER_UID
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME

# Get update
RUN apt update \
    && apt-get update

# This is to alleviate Node permission issue when running the 'preinstall'
RUN npm set unsafe-perm true

# Install additional tools
RUN  apt-get -y install jq nano pass

RUN apt install -y python3-pip

# Upgrade pip
RUN pip3 install wheel --upgrade pip

# Install NVM
ENV NVM_DIR /usr/local/nvm
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use --delete-prefix $NODE_VERSION"

ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH

RUN npm i -D @playwright/test
RUN npx playwright install chrome

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*