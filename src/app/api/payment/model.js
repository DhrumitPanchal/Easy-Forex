import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  payer_Info: {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    town_Ci: {
      type: String,
      required: true, // Make optional
    },
    // phone: {
    //   type: Number,
    //   required: true, // Make optional
    // },
    email: {
      type: String,
      required: true,
    },
  },

  items: {
    type: [
      {
        productId: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        description: { type: String },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String },
      },
    ],
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
});

export const Payment =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
