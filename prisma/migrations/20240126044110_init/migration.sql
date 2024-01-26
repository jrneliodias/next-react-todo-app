-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(200) NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "color" VARCHAR(10) NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);
