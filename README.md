## Dependancies

- node.js (>=18)

## Setup your local environment

1. Clone the repository

```
git clone https://github.com/JokerMrx/coins.git
```
3. Within the project folder install the dependancies

```
> cd coins
> npm i | yarn
```

4. Set up your environment
   
Rename `.env.local.sample` to `.env.local`

Update the file with your application settings.  These can be found within the backend application details within the Kinde dashboard
```
KINDE_CLIENT_ID=<your_kinde_client_id>
KINDE_CLIENT_SECRET=<your_kinde_client_secret>
KINDE_ISSUER_URL=https://<your_kinde_subdomain>.kinde.com
```


## Setup Kinde

Within your back-end web application update your settings

**Allowed callback URLs**

```
http://localhost:3000/api/auth/kinde_callback
```

**Allowed logout redirect URLs**

```
http://localhost:3000
```

**Note: When you deploy your application, these URLs will have to be updated accordingly**


## Start your app

```
npm run dev | yarn dev --port 3000
```

open `http://localhost:3000` in your browser

## Create your first user

Click on `Sign up` and register your first user for your business!

Within the Kinde Dashboard, you will see your new user listed within the user view. 🚀
