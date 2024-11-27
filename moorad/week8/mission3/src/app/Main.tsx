import { createRoot } from "react-dom/client";
import "./index.css";
import Routing from "./Routing";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <Routing />
        </QueryClientProvider>
    </RecoilRoot>
);