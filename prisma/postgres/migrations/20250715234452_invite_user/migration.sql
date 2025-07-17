-- CreateTable
CREATE TABLE "invite_users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "property_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by" TEXT,
    "updated_by" TEXT,

    CONSTRAINT "invite_users_pkey" PRIMARY KEY ("id")
);
