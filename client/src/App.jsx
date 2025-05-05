import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient.js";
import { Toaster } from "./components/ui/toaster.jsx";
import { SoundProvider } from "./hooks/use-sound.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/not-found.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SoundProvider>
        <Router />
        <Toaster />
      </SoundProvider>
    </QueryClientProvider>
  );
}

export default App;