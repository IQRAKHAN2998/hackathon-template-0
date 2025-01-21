export default {
    name: "marketplaceData",
    title: "Marketplace Data",
    type: "document",
    fields: [
      {
        name: "type",
        title: "Data Type",
        type: "string",
        options: {
          list: [
            { title: "Product", value: "product" },
            { title: "Order", value: "order" },
            { title: "Customer", value: "customer" },
          ],
        },
      },
      {
        name: "name",
        title: "Name",
        type: "string",
        hidden: ({ parent }) => parent.type !== "product" && parent.type !== "customer",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
        hidden: ({ parent }) => parent.type !== "product",
      },
      {
        name: "orderId",
        title: "Order ID",
        type: "string",
        hidden: ({ parent }) => parent.type !== "order",
      },
      {
        name: "customer",
        title: "Customer",
        type: "reference",
        to: [{ type: "marketplaceData" }],
        hidden: ({ parent }) => parent.type !== "order",
      },
      {
        name: "products",
        title: "Products",
        type: "array",
        of: [{ type: "reference", to: [{ type: "marketplaceData" }] }],
        hidden: ({ parent }) => parent.type !== "order",
      },
    ],
  };
  