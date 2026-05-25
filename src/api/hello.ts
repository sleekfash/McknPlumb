export async function getHelloMessage() {
  return {
    message: 'Hello from the minimal API helper route',
    timestamp: new Date().toISOString(),
  };
}
