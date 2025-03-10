/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request) {
	  const url = new URL(request.url);
	  const targetUrl = url.searchParams.get("url");
  
	  if (!targetUrl) {
		return new Response("Missing `url` parameter", { status: 400 });
	  }
  
	  const response = await fetch(targetUrl, {
		method: "GET",
		headers: {
		  "Content-Type": "application/json",
		},
	  });
  
	  return new Response(response.body, {
		status: response.status,
		headers: {
		  "Access-Control-Allow-Origin": "*",
		  "Access-Control-Allow-Methods": "GET",
		  "Content-Type": "application/json",
		},
	  });
	},
  };
