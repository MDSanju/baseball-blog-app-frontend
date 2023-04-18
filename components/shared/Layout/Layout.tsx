import { AppShell, Navbar, Header } from "@mantine/core";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Layout = ({ children }: any) => {
  const router = useRouter();
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              delay: 0.06,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </AppShell>
  );
};

export default Layout;
