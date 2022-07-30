const getData = async (data) => {
  const response = await fetch('/', { 
    method: 'post',
    body: JSON.stringify(data),
    headers: { 
      "Content-Type": "application/json"
    }
  });

  const statusCode = response.status;
  const json = await response.json();

  return {
    statusCode,
    json
  }
}

export default getData;
