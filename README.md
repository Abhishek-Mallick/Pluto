### Pluto

Setting up Server side
 - Any changes to `schema.prisma` should be followed by a manual check on the database schema using sql-workbench or prisma studio.
 - To update the schema run `npx prisma generate`
 - To visualize the schema run `npx prisma studio` / manually open up SQL workbench and visualize the schema under Pluto running at `localhost:3306`