import { TanStackRouterSSR } from "@lovable.dev/vite-tanstack-config/server";
import { createRouter } from "./router";
import "./styles.css";

const router = createRouter();

export default TanStackRouterSSR({
  router,
  createHandler: (r) => r.handler,
});
