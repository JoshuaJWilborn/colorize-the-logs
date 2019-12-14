import { startObserver, watchForContainer } from "./service";
watchForContainer().then(() => startObserver());
