/*
  Warnings:

  - You are about to drop the column `created_by` on the `invite_users` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `invite_users` table. All the data in the column will be lost.
  - Added the required column `expires_at` to the `invite_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invited_by_id` to the `invite_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "invite_users" DROP COLUMN "created_by",
DROP COLUMN "updated_by",
ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "invited_by_id" TEXT NOT NULL;
