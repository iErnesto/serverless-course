async function createAuction(event, context) {
  const { title } = JSON.parse(event.body);

  const auction = {
    title,
  };
  return {
    statusCode: 200,
    body: JSON.stringify({ event, context }),
  };
}

export const handler = createAuction;
