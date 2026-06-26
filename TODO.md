# TODO - Remove Prisma (WordPress headless CMS migration)

- [x] Remove Prisma config: `prisma.config.ts`

- [x] Remove Prisma schema folder: `prisma/` (includes `schema.prisma`)


- [ ] Remove Prisma client helper: `lib/prisma.ts`



- [x] Update API routes that import Prisma (`api/projects/*`) to no longer import `@/lib/prisma` (leave endpoints returning 501 for now)

- [ ] Update `package.json` dependencies to remove `prisma` and `@prisma/client`
- [ ] Run `npm run lint` and `npm run build` to verify compilation

