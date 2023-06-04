---
outline: deep
---

# Setup Guide

## Prerequisites

ZForum requires [PHP >=8.1](https://php.net), [Composer](https://getcomposer.org/), [Node.js](https://nodejs.org/) and [Meilisearch](https://www.meilisearch.com/) to be installed on your system. This many not be a complete list, because it is assumed that your system has software preinstalled on it. If you don't have something, just install it.

 Instructions for installing on Windows will not be provided, as the author of this software does not use Windows, nor know anything about it.

<!-- add instructions for other operating systems -->

::: code-group

```sh [Arch Linux]
pacman -S php composer meilisearch nodejs npm

# pnpm is preferred, you can install it from the AUR
paru -S pnpm

# or through npm
npm install -g pnpm
```

:::

## Getting ZForum

You can get ZForum by cloning the GitHub repository.

```sh
git clone https://github.com/zforumdev/zforum.git
cd zforum/
```

## Setup

### Installing dependencies

Install dependencies for composer and node, as well as create required files.

```sh
composer install
pnpm install
cp .env.example .env
```

### Editing the .env file

Next, you need to edit the .env file. For now, just change the `DB_CONNECTION` key's value to `sqlite`, and create a `database.sqlite` file in `database/`. Also, make sure to generate the app config.

```sh
touch database/database.sqlite

php artisan zforum:make-config
```

### Running migrations and required configuration

Now, you can run the migrations, as well as create the default roles, which are explained more in [Roles](/docs/roles).

```sh
php artisan migrate:fresh
php artisan zforum:make-default-roles
```

Head over to [Basic Configuration](/docs/basic-configuration)