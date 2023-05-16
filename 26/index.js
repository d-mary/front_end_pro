import { getData } from "./api.js";

document.querySelector(".js--btn").addEventListener("click", formSubmit);
function showId(id) {
  const _idContainer = document.querySelector(".js--idContainer");
  _idContainer.textContent = `ID: ${id}`;
}

function showController(controller) {
  const _controllerContainer = document.querySelector(
    ".js--controllerContainer"
  );
  _controllerContainer.textContent = `Controller: ${controller}`;
}

function showResult(response) {
  const _resultPre = document.querySelector(".js--result");
  _resultPre.textContent = JSON.stringify(response, null, 2);
}

function extractIdFromUrl(url) {
  const urlParts = url.split("/");
  return urlParts.slice(-2)[0];
}

function extractControllerFromUrl(url) {
  const urlParts = url.split("/");
  return urlParts.slice(-3, -2)[0];
}

function showLoader() {
  const _loader = document.querySelector(".js--loader");
  _loader.classList.remove("hidden");
}

function hideLoader() {
  const _loader = document.querySelector(".js--loader");
  _loader.classList.add("hidden");
}

function showResultContainer() {
  const _resultContainer = document.querySelector(".js--resultContainer");
  _resultContainer.classList.remove("hidden");
}

function hideResultContainer() {
  const _resultContainer = document.querySelector(".js--resultContainer");
  _resultContainer.classList.add("hidden");
}
async function formSubmit(event) {
  event.preventDefault();
  const _form = document.querySelector(".js--form");
  const _endpointInput = document.querySelector(".js--endpointInput");
  const _action = _form.action.trim();
  const endpoint = _endpointInput.value.trim();

  if (_action === "") {
    alert("Please enter a valid API URL.");
    return;
  }

  if (endpoint === "") {
    alert("Please enter an endpoint.");
    return;
  }

  const url = `${_action}/${endpoint}`;

  hideResultContainer();
  showLoader();

  try {
    const response = await getData(url);

    if (typeof response === "string") {
      alert(response);
      return;
    }

    if (response.status === "success") {
      const id = response.data.url ? extractIdFromUrl(response.data.url) : null;
      const controller = response.data.url
        ? extractControllerFromUrl(response.data.url)
        : null;

      if (id !== null) {
        showId(id);
      } else {
        showId("");
      }

      if (controller !== null) {
        showController(controller);
      } else {
        showController("");
      }
    }

    showResult(response.data, url);
    showResultContainer();
  } catch (error) {
    console.error("Error:", error);
    showId("");
    showController("");
  } finally {
    hideLoader();
  }
}
