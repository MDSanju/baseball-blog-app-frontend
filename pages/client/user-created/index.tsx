import { NextPage } from "next";
import { AuthGuard } from "@/components";

const AddProduct: NextPage = () => {
  return (
    <AuthGuard requiredRole="client">
      <div>Client page content goes here</div>
    </AuthGuard>
  );
};

export default AddProduct;
