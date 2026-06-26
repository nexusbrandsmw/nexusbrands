// Prisma removed from this project (migrating CMS to WordPress headless).
// This placeholder exists only to avoid runtime/module-not-found errors
// in parts of the code that may still import `@/lib/prisma`.

type PrismaArgs = unknown;

export const prisma: {
  project: {
    findMany: (args?: PrismaArgs) => Promise<never>;
    findUnique: (args: PrismaArgs) => Promise<never>;
    create: (args?: PrismaArgs) => Promise<never>;
    update: (args?: PrismaArgs) => Promise<never>;
    delete: (args?: PrismaArgs) => Promise<never>;
  };
} = {
  project: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findMany: async (_args?: PrismaArgs) => {
      throw new Error("Prisma removed: wire to WordPress REST API");
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findUnique: async (_args: PrismaArgs) => {
      throw new Error("Prisma removed: wire to WordPress REST API");
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    create: async (_args?: PrismaArgs) => {
      throw new Error("Prisma removed: wire to WordPress REST API");
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update: async (_args?: PrismaArgs) => {
      throw new Error("Prisma removed: wire to WordPress REST API");
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    delete: async (_args?: PrismaArgs) => {
      throw new Error("Prisma removed: wire to WordPress REST API");
    },
  },
};

