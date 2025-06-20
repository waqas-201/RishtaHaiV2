-- CreateEnum
CREATE TYPE "LivesWithYou" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "HasChildren" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "city" TEXT,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "qualification" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "earning" DOUBLE PRECISION NOT NULL,
    "familyStatus" TEXT NOT NULL,
    "profileFor" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "religion" TEXT NOT NULL,
    "community" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT,
    "description" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "hasChildren" "HasChildren" NOT NULL,
    "livesWithYou" "LivesWithYou",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
