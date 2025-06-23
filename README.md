```npm
npm install prisma --save-dev
npm install @prisma/client
npm install sqlite3
```

```npm
npx prisma init
```

```env
DATABASE_URL="file:./dev.db"
```

```npm
npx prisma migrate dev --name init
```

```npm
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}
```

```npm
npx prisma db seed
```
