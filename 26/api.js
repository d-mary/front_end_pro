export async function getData(url) {
  try {
    const response = await fetch(url);
    return {
      status: "success",
      data: await response.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: "error",
      data: null,
    };
  }
}
