import { useRouter } from "next/router";
import { useEffect } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole: "client" | "admin";
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, requiredRole }) => {
  const router = useRouter();
  const userRole = "admin"; // TODO: replace with actual user role

  useEffect(() => {
    if (userRole !== requiredRole) {
      if (requiredRole === "client") {
        router.push("/client"); // redirect to client page
      } else {
        router.push("/admin"); // redirect to admin page
      }
    }
  }, [router, userRole, requiredRole]);

  return <>{children}</>;
};

export default AuthGuard;
