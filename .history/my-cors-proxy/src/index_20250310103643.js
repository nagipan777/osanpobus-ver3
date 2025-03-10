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
  
	  try {
		const response = await fetch(targetUrl, {
		  method: "GET",
		  headers: {
			"Content-Type": "application/json",
			"User-Agent": "Mozilla/5.0 (compatible; Cloudflare Workers; +https://workers.dev/)"
		  }
		});
  
		if (!response.ok) {
		  return new Response(`Error fetching target URL: ${response.status}`, { status: response.status });
		}
  
		const data = await response.text();
		return new Response(data, {
		  status: 200,
		  headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, OPTIONS",
			"Content-Type": "application/json"
		  }
		});
  
	  } catch (error) {
		return new Response(`Fetch error: ${error.message}`, { status: 500 });
	  }
	}
  };