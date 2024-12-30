import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

// Function to serve index.html
async function indexHandler() {
  const html = await Deno.readTextFile("./index.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Function to serve validation.html with style.css
async function validationHandler() {
  const html = await Deno.readTextFile("./validation.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Function to serve confirm.html
async function confirmHandler() {
  const html = await Deno.readTextFile("./confirm.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Function to serve style.css
async function styleHandler() {
  const css = await Deno.readTextFile("./style.css");
  return new Response(css, {
    headers: { "content-type": "text/css" },
  });
}

// Main routing logic
const handler = (req: Request) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return indexHandler(); // Serve the home page (index.html)
  } else if (url.pathname === "/validation.html") {
    return validationHandler(); // Serve the validation page (validation.html)
  } else if (url.pathname === "/confirm.html") {
    return confirmHandler(); // Serve the confirm page (confirm.html)
  } else if (url.pathname === "/style.css") {
    return styleHandler(); // Serve the CSS file
  }

  // Default handler for unknown routes
  return new Response("Page Not Found", { status: 404 });
};

// Start the server
console.log("Server is running on http://localhost:8000");
serve(handler);
