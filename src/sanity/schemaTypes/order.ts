import { defineField, defineType } from "sanity";

export default defineType({
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "productId",
              title: "Product ID",
              type: "string",
            }),
            defineField({
              name: "name",
              title: "Product Name",
              type: "string",
            }),
            defineField({
              name: "image",
              title: "Image URL",
              type: "string",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
            }),
            defineField({
              name: "quantity",
              title: "Quantity",
              type: "number",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    }),
    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
        ],
      },
    }),
    defineField({
      name: "stock",
      title: "Stock Level",
      type: "number",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
  ],
});
