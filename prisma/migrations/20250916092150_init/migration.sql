/*
  Warnings:

  - The values [ANALYST,INVESTOR,FOUNDER] on the enum `CompanyType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."CompanyType_new" AS ENUM ('SHOES', 'WATCH', 'PERFUMES', 'GENERAL');
ALTER TABLE "public"."User" ALTER COLUMN "companyType" DROP DEFAULT;
ALTER TABLE "public"."User" ALTER COLUMN "companyType" TYPE "public"."CompanyType_new" USING ("companyType"::text::"public"."CompanyType_new");
ALTER TYPE "public"."CompanyType" RENAME TO "CompanyType_old";
ALTER TYPE "public"."CompanyType_new" RENAME TO "CompanyType";
DROP TYPE "public"."CompanyType_old";
ALTER TABLE "public"."User" ALTER COLUMN "companyType" SET DEFAULT 'GENERAL';
COMMIT;
