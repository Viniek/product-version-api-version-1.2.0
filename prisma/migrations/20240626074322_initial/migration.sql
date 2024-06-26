-- CreateTable
CREATE TABLE "products_table" (
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_Cost" TEXT NOT NULL,
    "onoffer" TEXT NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_table_product_title_key" ON "products_table"("product_title");
