export async function initMSW() {
  if (typeof window === "undefined") {
    const { serverWorker } = await import("./server");

    serverWorker.listen({
      onUnhandledRequest: "bypass",
    });
  } else {
    const { worker } = await import("./broswer");

    worker.start({
      onUnhandledRequest: "bypass",
    });
  }
}
