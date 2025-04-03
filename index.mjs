export const handler = async (event, context) => {
    console.log(event);
    console.log(context);
    return {
        statusCode: 200,
        body: JSON.stringify({ name: 'Andrei', env: '!!! NEW  DEV !!!' }),
        headers: {
            'content-type': 'application/json',
        }
    }
}