import { NextPage } from "next";
import { AuthGuard, Layout } from "@/components";

const AddProduct: NextPage = () => {
  return (
    <AuthGuard requiredRole="admin">
      <Layout>
        <div>Admin page content goes here</div>
      </Layout>
    </AuthGuard>
  );
};

export default AddProduct;
